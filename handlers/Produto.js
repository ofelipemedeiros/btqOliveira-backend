const ProdSchema = require('../models/products')

const save = async (req, h) => {
    const {nome, descricao, dataEntrada, fornecedor, categoria} = req.payload
    const produto = new ProdSchema
    produto.nome = nome,
    produto.descricao = descricao,
    produto.dataEntrada = dataEntrada,
    produto.fornecedor = fornecedor,
    produto.categoria = categoria
    try {
        await produto.save()
        return h.response(produto).code(201)
    } catch (error) {
        console.log(error);
        
        
    }
}

const getAll = async (req, h) =>{
    const produtos = await ProdSchema.find({})
    return produtos
}

module.exports = {
    save,
    getAll

}