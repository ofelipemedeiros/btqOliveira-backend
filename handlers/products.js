const ProducModel = require('../models/product')

const transformer = product => ({
    type: 'products',
        id: product.id,
        attributes: {
        name: product.name,
        description: product.description,
        price: product.price,
        entryDate: product.entryDate,
        minimumQuantity: product.minimumQuantity,
        departureDate: product.departureDate,
        provider: product.provider
        },
        links: {
            self: `/api/v1/products/${product.id}`
        }
});

const getAll = async (req, h) => {
    const products = await ProducModel.find({})
    return { data: products.map(transformer)}
}

const find = async (req, h) => {
    const product = await ProducModel.findById(req.params.id)
    return {data: transformer(product)}

}

const save = async (req, h) =>{

    const {name, description, price, entryDate, minimumQuantity, departureDate, provider} = req.payload;  
    const product = new ProducModel
    product.name = name;
    product.description = description;
    product.price = price;
    product.entryDate = entryDate;
    product.minimumQuantity = minimumQuantity;
    product.departureDate = departureDate;
    product.provider = provider;
        
    try {
        await product.save()
        return h.response(transformer(product)).code(201)
    } catch (err) {
        console.log(err);
        
        
    }
}

const remove = async (req, h) => {
    await ProducModel.findOneAndDelete({_id: req.params.id})
    return h.response().code(204)
}


const update = async (req) => {
     const { id } = req.params;
     const { payload } = req; 
     await ProducModel.updateOne({_id: id},
        { $set: payload});
    return { message: 'Produto atualizado com sucesso!' }
   }

module.exports = {
    getAll,
    find,
    save,
    remove,
    update
}