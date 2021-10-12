const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:smartpass@smartclassroom0.eqwpx.mongodb.net/smartclassroom?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

function dbconnect() {
    client.connect(err => {
        if (err) throw err;
    });
    return;
}

module.exports = {
    client,
    dbconnect
};