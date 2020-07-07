const CategoriaHandle = require('../handlers/categorie')

module.exports = [
    {
        method: 'GET',
        path: '/api/v1/categories',
        handler: CategoriaHandle.getAll,
        options: {
            cors: true
        }
    },
    {
        method: 'POST',
        path: '/api/v1/categories',
        handler: CategoriaHandle.save,
        options: {
            cors: true
        }
    },
    {
        method: 'DELETE',
        path: '/api/v1/categories/{id}',
        handler: CategoriaHandle.remove,
        options: {
            cors: true
        }
    },
    {
        method: 'GET',
        path: '/api/v1/categories/{id}',
        handler: CategoriaHandle.find,
        options: {
            cors: true
        }
        
    },

]