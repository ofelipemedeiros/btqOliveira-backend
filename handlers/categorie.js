var database = require('../services/dbknex')

const getAll = async (req, h) => {
    const listCategoria = await database.select().from("categoria")
    return listCategoria

}
const find = async (req, h) => {

}

const save = async (req, h ) => {
    const {nome, descricao} = req.payload;
    const categoria = {
        nome: nome,
        descricao: descricao
    }
    
    try {
        await database.insert(categoria).into("categoria")
        return h.response(categoria).code(201)
    } catch (error) {
        
    }
    
    

}

const remove = async(req, h ) => {
    try {
        await database.where({idcategoria: req.params.id}).delete().table("categoria")
        return h.response("registro deletado!")
    } catch (error) {
        console.log(error);
        
    }
    

}

module.exports = {
    getAll,
    find,
    save,
    remove
}