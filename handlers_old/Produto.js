const ProdSchema = require('../models/products')
const provider = require('../models/provider')

const save = async (req, h) => {
    //const {nome, descricao, dataEntrada, fornecedor, categoria} = req.payload
    const produto = new ProdSchema
    
    produto.nome = req.payload.nome,
    produto.descricao = req.payload.descricao,
    produto.dataEntrada = req.payload.dataEntrada,
    produto.fornecedor = req.payload.fornecedor,
    produto.categoria = req.payload.categoria
    try {
        await produto.save()
        return h.response(produto).code(201)
    } catch (error) {
        console.log(error);
        
        
    }
}

const getAll = async (req, h) =>{
    const produtos = await ProdSchema.find().populate('Categorie')
    return { produtos }
}

const find = async (req, h) => {
    const produto = await ProdSchema.findById(req.params.id).populate('Provider')
    return produto
}

const remove = async (req, h) => {
    await ProdSchema.findOneAndDelete({_id: req.params.id})
    return h.response().code(204)

}

module.exports = {
    save,
    getAll,
    find,
    remove

}