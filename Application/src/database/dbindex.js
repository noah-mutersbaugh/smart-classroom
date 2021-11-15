const express = require('express');
const dbserver = require('../database/db');
const cors = require("cors");
const { ObjectId } = require('bson');
const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
};

dbserver.client.connect(err => {
    if (err) throw err;

    //Get Classrooms
    const roomcollection = dbserver.client.db("smartclassroom").collection("classrooms");
    
    app.use(cors(corsOptions));
    app.use(express.json());
    app.options('/get/classrooms', cors());

    app.get('/get/classrooms', (req, res) => {
        roomcollection.find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.header("Access-Control-Allow-Origin", "*");
            res.json(result);
        });
    });

    //Get Buildings
    const buildingcollection = dbserver.client.db("smartclassroom").collection("buildings");
    app.get('/get/buildings', (req, res) => {
        buildingcollection.find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.header("Access-Control-Allow-Origin", "*");
            res.json(result);
        });
    });

    //Get Cameras
    const cameracollection = dbserver.client.db("smartclassroom").collection("cameras");
    app.get('/get/cameras', (req, res) => {
        cameracollection.find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.header("Access-Control-Allow-Origin", "*");
            res.json(result);
        });
    });

    //Get Settings
    const settingscollection = dbserver.client.db("smartclassroom").collection("settings");
    app.get('/get/settings', (req, res) => {
        settingscollection.find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.header("Access-Control-Allow-Origin", "*");
            res.json(result);
        });
    });

    //Get Microphones
    const microphonecollection = dbserver.client.db("smartclassroom").collection("microphones");
    app.get('/get/microphones', (req, res) => {
        microphonecollection.find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.header("Access-Control-Allow-Origin", "*");
            res.json(result);
        });
    });

    //Get Professors
    const professorcollection = dbserver.client.db("smartclassroom").collection("professors");
    app.get('/get/professors', (req, res) => {
        professorcollection.find({}).limit(1).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.header("Access-Control-Allow-Origin", "*");
            res.json(result);
        });
    });

    //Get Technology
    const techcollection = dbserver.client.db("smartclassroom").collection("technology");
    app.get('/get/tech', (req, res) => {
        techcollection.find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.header("Access-Control-Allow-Origin", "*");
            res.json(result);
        });
    });

    //TODO: Still need GET projectors

    app.patch('/patch/professors/:id', (req, res) =>{
        var updateObject = req.body;
        var id = req.params.id;
        console.log(req.body);
        professorcollection.updateOne({_id : ObjectId(id)}, {$mod: updateObject});
        res.send("Updated");
    });

    //TODO: Still need patches for each collection

    app.post('/new', (req, res) => {
        res.send('This is posted inventory');
    });
});

const port = process.env.PORT ||  4000;

app.listen(port, () => {
    console.log(`listening on ${port}`);
});