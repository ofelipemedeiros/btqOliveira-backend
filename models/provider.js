const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProviderSchema = new Schema({
    name:{type: String, required: true},
    contact: {type: String}
},{
    timestamps: true
})

module.exports = mongoose.model('Provider', ProviderSchema)