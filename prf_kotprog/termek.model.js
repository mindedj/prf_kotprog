const mongoose = require('mongoose');

var termekSchema = new mongoose.Schema({
    id: {type: Number, unique: true, required: true},
    nev: {type: String, required: true},
    ar: {type: Number, required: true}
}, {collection: 'termek'});

mongoose.model('termek', termekSchema);