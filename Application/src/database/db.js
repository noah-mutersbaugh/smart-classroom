const express = require("express");
const mongoose = require('mongoose');
const InventoryRoute = require('../router/inventorys');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/inventory', InventoryRoute);

app.get("/", (req, res) => {
    res.send("This is a response");
})

app.listen(3000, () => {
    console.log("listening at port: 3000");
})

const uri = "mongodb+srv://admin:smartpass@smartclassroom0.eqwpx.mongodb.net/smartclassroom?retryWrites=true&w=majority";

mongoose.connect(uri, { 
    useFindAndModify: false, 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true},
    (err) => {
        if (err)
        {
            return console.log(err);
        }
        console.log("MongoDB Connection -- ready state is: ", mongoose.connection.readyState);
    });