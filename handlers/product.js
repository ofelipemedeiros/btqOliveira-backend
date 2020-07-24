const database = require('../services/dbknex')

const getAll = async (req, h) => {
    const listProd = await database
    .select(["produto.nome as nome", 
                "produto.descricao as descricao",
                "produto.dataEntrada as dataEntrada", 
    
                "categoria.nome as categoria",
                "fornecedor.nome as fornecedor"])
    .table("produto")
    .innerJoin("categoria", "categoria.idcategoria", "produto.categ" )
    .innerJoin("fornecedor", "fornecedor.idfornecedor", "produto.provider")
    return listProd
    
}

const find = async (req, h) => {

}

const save = async(req, h) => {

}

const remove = async(req, h) =>{
    try {
        await database.where({idproduto: req.params.id}).delete().table("produto")
        return h.response({msg: 'registro deletado'})
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