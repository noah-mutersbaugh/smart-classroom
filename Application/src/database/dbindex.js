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
        // MongoDB Specific Query
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
        // MongoDB Specific Query
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
        // MongoDB Specific Query
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
        // MongoDB Specific Query
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
        // MongoDB Specific Query
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
        // MongoDB Specific Query (limits the query to the first entry)
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
        // MongoDB Specific Query
        techcollection.find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.header("Access-Control-Allow-Origin", "*");
            res.json(result);
        });
    });

    //TODO: Still need GET projectors

    app.patch('/patch/professors/:id', (req, res) => {
        var updateObject = req.body;
        var id = req.params.id;
        console.log(req.body);
        // MongoDB Specific Query
        professorcollection.updateOne({ _id: ObjectId(id) }, { $set: updateObject });
        res.send("Updated");
    });

    app.patch('/patch/buildings/:id', (req, res) => {
        var updateObject = req.body;
        var id = req.params.id;
        console.log(req.body);
        // MongoDB Specific Query
        buildingcollection.updateOne({ _id: ObjectId(id) }, { $set: updateObject });
        res.send("Updated");
    });

    app.patch('/patch/cameras/:id', (req, res) => {
        var updateObject = req.body;
        var id = req.params.id;
        console.log(req.body);
        // MongoDB Specific Query
        cameracollection.updateOne({ _id: ObjectId(id) }, { $set: updateObject });
        res.send("Updated");
    });

    app.patch('/patch/classrooms/:id', (req, res) => {
        var updateObject = req.body;
        var id = req.params.id;
        console.log(req.body);
        // MongoDB Specific Query
        roomcollection.updateOne({ _id: ObjectId(id) }, { $set: updateObject });
        res.send("Updated");
    });

    app.patch('/patch/technology/:id', (req, res) => {
        var updateObject = req.body;
        var id = req.params.id;
        console.log(req.body);
        // MongoDB Specific Query
        techcollection.updateOne({ _id: ObjectId(id) }, { $set: updateObject });
        res.send("Updated");
    });

    //TODO: Still need PATCHES for missing collections

    //TODO: Still need POSTS for missing collections

    //TODO: Still need DELETE for missing collections

    app.delete('/delete/technology/:id', (req, res) => {
        var id = req.params.id;
        console.log("Deleted ID: " + id);
        // MongoDB Specific Query
        techcollection.deleteOne({ _id: ObjectId(id) });
        res.send("Deleted");
    });

    app.delete('/delete/classrooms/:id', (req, res) => {
        var id = req.params.id;
        console.log("Deleted ID: " + id);
        // MongoDB Specific Query
        roomcollection.deleteOne({ _id: ObjectId(id) });
        res.send("Deleted");
    });

    app.delete('/delete/professors/:id', (req, res) => {
        var id = req.params.id;
        console.log("Deleted ID: " + id);
        // MongoDB Specific Query
        professorcollection.deleteOne({ _id: ObjectId(id) });
        res.send("Deleted");
    });

    app.delete('/delete/buildings/:id', (req, res) => {
        var id = req.params.id;
        console.log("Deleted ID: " + id);
        // MongoDB Specific Query
        buildingcollection.deleteOne({ _id: ObjectId(id) });
        res.send("Deleted");
    });

    app.delete('/delete/cameras/:id', (req, res) => {
        var id = req.params.id;
        console.log("Deleted ID: " + id);
        // MongoDB Specific Query
        cameracollection.deleteOne({ _id: ObjectId(id) });
        res.send("Deleted");
    });

    app.delete('/delete/microphones/:id', (req, res) => {
        var id = req.params.id;
        console.log("Deleted ID: " + id);
        // MongoDB Specific Query
        microphonecollection.deleteOne({ _id: ObjectId(id) });
        res.send("Deleted");
    });

    app.delete('/delete/settings/:id', (req, res) => {
        var id = req.params.id;
        console.log("Deleted ID: " + id);
        // MongoDB Specific Query
        settingscollection.deleteOne({ _id: ObjectId(id) });
        res.send("Deleted");
    });

    app.post('/new/building', (req, res) => {
        //var name = req.params.name;
        //var location = req.params.location;
        //var abbreviation = req.params.abbreviation;
        var newBody = req.body;
        buildingcollection.insertOne(newBody)
        res.send('Posted');
    });

    app.post('/new/classroom', (req, res) => {
        //var buildingabbr = req.params.buildingabbr;
        //var num = req.params.num;
        //var size = req.params.size;
        //var tech = req.params.tech;
        //var layoutids = req.params.layoutids;
        //var recsettings = req.params.recsettings;
        var newBody = req.body;
        roomcollection.insertOne(newBody)
        res.send('Posted');
    });

    app.post('/new/professor', (req, res) => {
        //var profname = req.params.profname;
        //var buildingabbr = req.params.buildingabbr;
        //var num = req.params.num;
        //var settings = req.params.settings;
        //var permission = req.params.permission;
        //var email = req.params.email;
        var newBody = req.body;
        professorcollection.insertOne(newBody)
        res.send('Posted');
    });

    app.post('/new/tech', (req, res) => {
        //var name = req.params.name;
        //var description = req.params.description;
        //var category = req.params.category;
        var newBody = req.body;
        techcollection.insertOne(newBody);
        res.send('Posted');
    });

});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`listening on ${port}`);
});