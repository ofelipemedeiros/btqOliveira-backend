const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProdutoSchema = new Schema({
    nome: {type: String, required: true},
    descricao: {type: String},
    dataEntrada: {type: Date},
    fornecedor: {type: mongoose.Schema.Types.ObjectId, ref: 'Provider'},
    categoria: {type: mongoose.Schema.Types.ObjectId, ref: 'Categoria'}
})



module.exports = mongoose.model('Produto', ProdutoSchema)
