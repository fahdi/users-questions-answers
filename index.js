const Database = require('./database');
const Config = require('./config');

// Get configuration from convict
const db = new Database(Config.get('mongodb'));

myUser = {
    name: "Khidash",
    username: "jojo",
    password: "mrjojo"
};

db.addNewUser(myUser);