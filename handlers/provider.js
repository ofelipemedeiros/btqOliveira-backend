const database = require('../services/dbknex')

const getAll = async(req, h) => {
    const listProvider = await database.select().table("fornecedor")
    return listProvider
}

const find = async(req, h) => {

}

const save = async (req, h) => {
    const {nome, contato} = req.payload
    const provider = {
        nome: nome,
        contato: contato
    }

    try {
        await database.insert(provider).into("fornecedor")
        return h.response(provider).code(201)
    } catch (error) {

        console.log(error);
        
    }
}

const remove = async(req,h) => {
    try {
        await database.where({idfornecedor: req.params.id}).delete().table("fornecedor")
        return h.response('fornecedor deletado!')
    } catch (error) {
        console.log(error);
        console.log(req.params);
    }

}

module.exports = {
    getAll,
    find,
    save,
    remove
}