const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    accessLevel: {type: String}
}, {collection: 'user'});

userSchema.pre('save', function(next){
    const user = this;
    if(user.isModified('password')){
        user.accessLevel = 'basic';
        bcrypt.genSalt(10, function(err, salt){
            if(err) {
                console.log("hiba salt generalasnal");
                return next(err);
            }
            bcrypt.hash(user.password, salt, function(error, hash) {
                if(error) {
                    console.log('hiba a hasheles soran');
                    return next(error);
                }
                user.password = hash;
                return next();
            })
        })
    } else {
        return next();
    }
})

userSchema.methods.comparePasswords = function(password, next){
    bcrypt.compare(password, this.password, function(err, isMatch){
        next(err, isMatch);
    });
}

mongoose.model('user', userSchema);