const ProviderModel = require('../models/provider')

const transformer = provider => ({
    type: 'providers',
    id: provider.id,
    attributes: {
        name: provider.name,
        contact: provider.contact
    },
    links: {
        self: `api/v1/providers/${provider.id}`
    }

})

const getAll = async (req, h) => {
    const providers =  await ProviderModel.find({})
    return { data: providers.map(transformer)}
}

const find = async (req, h) => {
    const provider = await ProviderModel.findById(req.params.id)
    return h.response(provider)
}

const save = async (req, h) => {
    const {name, contact} = req.payload   
    const provider = new ProviderModel
    provider.name = name;
    provider.contact = contact

    try {
        await provider.save()
        return h.response(provider).code(201)
        
    } catch (err) {
        console.log(err);
        
        
    }
}

const remove = async (req, h) => {
    await ProviderModel.findOneAndDelete({_id: req.params.id})    
    return h.response().code(204)
}

const update = async (req, h) =>{
    const {id} = req.params;
    const {payload} = req;
    await ProviderModel.updateOne({_id: id}, 
        { $set: payload})
        return {message: 'Fornecedor atualizado com sucesso!'}
    
}


module.exports = {
    getAll,
    save,
    remove,
    find,
    update
}