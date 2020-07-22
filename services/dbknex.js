var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'Anais1s00898',
      database : 'btqOliveira'
    }
  });

  module.exports = knex