'use strict';

require('../services/dbknex')
const Hapi = require('@hapi/hapi');
const providerRouter = require('../routers/provider')
const CategorieRouter = require('../routers/categoria')
const prodRouter = require('../routers/produto')


const init = async () => {

    const server = Hapi.server({
        port: 3001,
        host: 'localhost'
    });

    server.route(providerRouter)
    server.route(CategorieRouter)
    server.route(prodRouter)

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();