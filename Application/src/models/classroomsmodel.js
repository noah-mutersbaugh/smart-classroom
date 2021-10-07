const dbserver = require('../database/db');

dbserver.client.connect(err => {
    if (err) throw err;
    const collection = dbserver.client.db("smartclassroom").collection("classrooms");
});

function getAll() {
    const classrooms = [];
    collection.find({}).toArray(function(err, result) {
        if (err) throw err;
        classrooms = result;
    });
    return classrooms;
}

module.exports = {
    collection
};