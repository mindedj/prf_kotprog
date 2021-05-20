const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require("passport");
const path = require('path');
const expressSession = require("express-session");
const localStrategy = require("passport-local").Strategy;


const app = express();
const port = process.env.PORT || 3000;

const dbUrl = 'mongodb+srv://admin:admin@kotprogcluster.j95y7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbUrl);

mongoose.connection.on('connected', () => {
    console.log('csatlakozva');
})

mongoose.connection.on('error', (err)=>{
    console.log('Hiba tortent', err);
})

require('./termek.model');
require('./user.model');

const userModel = mongoose.model('user');


app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({}));


const whitelist = ['http://localhost:4200', 'http://localhost:3000', "https://prf-kotprog123.herokuapp.com", "https://prf-spring.herokuapp.com"]

var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin', 
    'Origin', 'Accept']
  };

app.use(cors(corsOptions));

//app.use(cors());


passport.use("local", new localStrategy(function(username, password, done){
    userModel.findOne({username: username}, function(err, user){
        if(err) return done("Hiba lekeres soran", null)
        if(!user) return done("Nincs ilyen felhasznalonevvel regisztralt fiok", null);
        user.comparePasswords(password, function(error, isMatch){
            if(error) return done(error, false);
            if(!isMatch) return done("Hibas jelszo!", false);
            return done(null, user);
        })
    })
}));

passport.serializeUser(function(user, done){
    if(!user) return done("Nincs megadva beleptetheto felhasznalo", null);
    return done(null, user);
});

passport.deserializeUser(function(user, done){
    if(!user) return done("Nincs belepve felhasznalo", null);
    return done(null, user);
})

app.use(expressSession({secret: 'secret123prfkotprog', resave: true}));
app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(path.join(__dirname, 'public')))
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')
.get('/', (req, res) => res.render('pages/index'));

app.use('/', require('./routes'));

app.use((req,res,next) => {
    console.log('hibakezelo');
    res.status(404).send('Eroforras nem elerheto')
})

app.listen(port, () => {
    console.log('Server is running!');
});