const productHandler = require('../handlers/Produto')


module.exports = [

    {
        method: 'GET',
        path: '/api/v1/products',
        handler: productHandler.getAll,
        options: {
            cors: true
        }
    },
    {
        method: 'POST',
        path: '/api/v1/products',
        handler: productHandler.save,
        options: {
            cors: true
        }
    },
    {
        method: 'GET',
        path: '/api/v1/products/{id}',
        handler: productHandler.find,
        
    },
    {
        method: 'DELETE',
        path: '/api/v1/products/{id}',
        handler: productHandler.remove
    },
    /**
    
    
    {
        method: 'PATCH',
        path: '/api/v1/products/{id}',
        handler: productHandler.update,
        options: {
            cors: true
        }
    }
     */


]