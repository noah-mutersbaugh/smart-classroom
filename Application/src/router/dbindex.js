const express = require('express');
const dbserver = require('../database/db');
const cors = require("cors");
const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
};

dbserver.client.connect(err => {
    if (err) throw err;
    const collection = dbserver.client.db("smartclassroom").collection("classrooms");
    
    app.use(cors(corsOptions));
    app.options('/get/classrooms', cors());

    app.get('/get/classrooms', (req, res) => {
        collection.find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.header("Access-Control-Allow-Origin", "*");
            res.json(result);
        });
    });

    app.post('/new', (req, res) => {
        res.send('This is posted inventory');
    });
});

const port = process.env.PORT ||  4000;

app.listen(port, () => {
    console.log(`listening on ${port}`);
});