const express = require('express');
const db = require('../models');
const passport = require('../config/passportConfig');
const router = express.Router();

router.get('/', function(req, res){
    res.render('chord/index')
})

router.get('/detail', function(req, res){
    db.chord.findOne({
        where:{
            root: root,
            type: type,
            extension: ext
        }
    }).then(function(chord){
        chord.getScales().then(function(scales){
            db.arp.findOne({
                where: {
                    chordId: chord.id
                }
            }).then(function(arp){
                db.scale.findAll()
                res.render('chord/detail',{root,type,ext,chord,arp,scales})
            })
        })
    })
})


router.post('/',function(req,res){
    var chordRoot = req.body.rootLetter
    var chordType = req.body.type
    var extension = parseInt(req.body.extension)
    root = chordRoot;
    type = chordType;
    ext = extension;

    res.redirect('/chords/detail')
})

module.exports = router;