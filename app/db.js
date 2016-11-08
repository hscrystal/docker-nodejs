var mongojs = require('mongojs');

var databaseUrl = 'mongo/nodejs';
var collections = ['users'];

var connect = mongojs(databaseUrl, collections);

module.exports = {
  connect: connect
};
