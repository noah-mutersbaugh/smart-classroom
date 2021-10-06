const express = require('express');
const router = express.Router();
const Inventory = require('../models/InventoryModel');

router.get('/', async (req, res) => {
    const q = await Inventory.find({});
    res.json(q);
})

router.post('/new', (req, res) => {
    res.send('This is posted inventory');
})