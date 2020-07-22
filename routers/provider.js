const ProviderHandler = require('../handlers/provider')

module.exports = [
    {
        method: 'GET',
        path: '/api/v1/provider',
        handler: ProviderHandler.getAll,
        options: {
            cors: true
        }
    },
    {
        method: 'GET',
        path: '/api/v1/provider/{id}',
        handler: ProviderHandler.find
    },
    {
        method: 'POST',
        path: '/api/v1/provider',
        handler: ProviderHandler.save,
        options: {
            cors: true
        }
    },
    {
        method: 'DELETE',
        path: '/api/v1/provider/{id}',
        handler: ProviderHandler.remove,
        options: {
            cors: true
        }
    },
    /**
    {
        method: 'PATCH',
        path: '/api/v1/provider/{id}',
        handler: ProviderHandler.update
    }
     */
]