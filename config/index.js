const convict = require('convict');

// Define a schema
const conf = convict({
  env: {
    doc: 'The application environment.',
    format: ['development', 'production', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  port: {
    doc: 'The Dashboard port to bind.',
    format: 'port',
    default: 3000,
    env: 'PORT'
  },  
  mongodb: {
    doc: 'The mongodb connection string.',
    format: '*',
    default: 'mongodb://localhost:27017/users_quest_ans',
    env: 'MONGODB'
  }
});

// Load environment dependent configuration
const env = conf.get('env');
conf.loadFile(`./config/${env}.json`);

// Perform validation
conf.validate({allowed: 'strict'});

module.exports = conf;
