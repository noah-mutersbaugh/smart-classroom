const mongoose = require ('mongoose');

const InventorySchema = new mongoose.Schema({
    buildingabbr: String,
    num: String,
    size: Number,
    techids: Array,
    layoutids: Array,
    recsettings: Array
});

module.exports = mongoose.model('inventory', InventorySchema);