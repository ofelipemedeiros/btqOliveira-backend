const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProdSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    price: {type: Number},
    entryDate: {type: Date},
    minimumQuantity: {type: Number},
    departureDate: {type: Date},
    provider: {type: mongoose.Schema.Types.ObjectId, ref: 'Provider'}


})



module.exports = mongoose.model('Product', ProdSchema)