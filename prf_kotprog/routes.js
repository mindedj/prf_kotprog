const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const termekModel = mongoose.model('termek');
const userModel = mongoose.model("user");
const passport = require("passport");

router.route("/test").get((req, res, next) => {
    console.log(req.user.accessLevel);
    next();
})

router.route("/login").post((req, res, next) => {
    if(req.body.username && req.body.password){
        passport.authenticate('local', function(error, user){
            if(error) return res.status(500).send(error);
            req.logIn(user, function(err){
                if(err) return res.status(500).send(error);
                return res.status(200).send("Sikeres bejelentkezes!");
            })
        })(req, res);
    } else {
        return res.status(400).send("Hibas username vagy password");
    }
})

router.route("/logout").post((req, res, next) => {
    if(req.isAuthenticated()){
        req.logout();
        return res.status(200).send("Sikeres kijelentkezes!");
    } else {
        return res.status(400).send("Nem volt bejelentkezve.");
    }
})

router.route('/status').get((req, res, next) => {
    if(req.isAuthenticated()){
        return res.status(200).send(req.session.passport);
    } else {
        return res.status(403).send("Nincs bejelentkezve");
    }
})


router.route("/user").get((req, res, next) =>{
    userModel.find({}, (err, users) =>{
        if(err) return res.status(500).send('Adatbazis hiba');
        res.status(200).send(users);
    })
}).post((req, res, next) =>{
    if(req.body.username && req.body.password){
        userModel.findOne({username: req.body.username}, (err, user) => {
            if(err) return res.status(500).send('Adatbazis hiba');
            if(user) return res.status(400).send("Hiba, mar van ilyen felhasznalonev!");
            const usr = new userModel({username: req.body.username, password: req.body.password});
            usr.save((error) => {
                if(error) return res.status(500).send('Sikertelen regisztracio');
                return res.status(200).send('Sikeres regisztracio');
            })
        })
    } else {
        return res.status(400).send("Hibas keres, username es password kotelezo");
    }
})

router.route('/termek').get((req, res, next) => {
    if(req.isAuthenticated()){
        termekModel.find({}, (err, termekek) =>{
            if(err) return res.status(500).send('Adatbazis hiba');
            res.status(200).send(termekek);
        })
    } else {
        return res.status(403).send('A funkcio hasznalatahoz jelentkezz be!');
    }
}).post((req, res, next) => {
    if(req.isAuthenticated() && req.session.passport.user.accessLevel === "admin"){
        if(req.body.id && req.body.nev && req.body.ar){
        termekModel.findOne({id: req.body.id}, (err, termek) => {
            if(err){
                return res.status(500).send('Adatbazis hiba');
            }
            if(termek){
                return res.status(400).send('Mar letezik ilyen id');
            } else {
                const termek = new termekModel({id: req.body.id, nev: req.body.nev, ar: req.body.ar})
                termek.save((error) => {
                    if(error) return res.status(500).send('Sikertelen termekfelvetel');
                    return res.status(200).send('Sikeres termekfelvetel');
                })
            }
        })
        } else {
            return res.status(400).send('Nincs megadva valamilyen kotelezo ertek!');
        }
    } else {
        return res.status(400).send("Nincs megfelelo jogosultsagod");
    }
    
}).put((req, res, next) => {
    if(req.isAuthenticated() && req.session.passport.user.accessLevel === "admin"){
        if(req.body.id && (req.body.nev || req.body.ar)){
        termekModel.findOne({id: req.body.id}, (err, termek) => {
            if(err){
                return res.status(500).send('Adatbazis hiba');
            }
            if(termek){
                if(req.body.nev) termek.nev = req.body.nev;
                if(req.body.ar) termek.ar = req.body.ar;
                termek.save((error) => {
                    if(error) return res.status(500).send('Sikertelen termek frissites');
                    return res.status(200).send('Sikeres termek frissites');
                })
            } else {
                return res.status(400).send('Nincs ilyen id termek az adatbazisban');
            }
        })
        } else {
            return res.status(400).send('Nincs megadva valamilyen kotelezo ertek!');
        }
    } else {
        return res.status(400).send("Nincs megfelelo jogosultsagod");
    }
    
}).delete((req, res, next) => {
    if(req.isAuthenticated() && req.session.passport.user.accessLevel === "admin"){
        if(req.body.id){
        termekModel.findOne({id: req.body.id}, (err, termek) => {
            if(err){
                return res.status(500).send('Adatbazis hiba');
            }
            if(termek){
                termek.delete((error) => {
                    if(error) return res.status(500).send('Sikertelen termek torles');
                    return res.status(200).send('Sikeres termek torles');
                })
            } else {
                return res.status(400).send('Nincs ilyen id termek az adatbazisban');
            }
        })
        } else {
            return res.status(400).send('Nincs megadva valamilyen kotelezo ertek!');
        }
    } else {
        return res.status(400).send("Nincs megfelelo jogosultsagod");
    }
    
})



module.exports = router;