const CategoriaSchema = require('../models/cagorie')

const getAll = async (req, h) => {
    const categories = await CategoriaSchema.find({})
    return categories
}

const find = async (req, h) => {
    const categories = await CategoriaSchema.findById(req.params.id)
    return categories
}

const save = async (req, h) => {
    const {nome} = req.payload;
    const categoria = new CategoriaSchema
    categoria.nome = nome
    try {
        await categoria.save()
        return h.response(categoria).code(201)
    } catch (error) {
        console.log(error);
        
        
    }

}

const remove = async (req, h) => {
    await CategoriaSchema.findOneAndDelete({_id: req.params.id})
    return h.response().code(204)

}

module.exports = {
    getAll,
    find,
    save,
    remove

}


