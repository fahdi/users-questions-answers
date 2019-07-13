const Database = require('./database');
const Config = require('./config');

// Get configuration from convict
const db = new Database(Config.get('mongodb'));

myUser = {
    name: "Fahad",
    username: "fahdi2",
    password: "mrjojo"
};

db.addNewUser(myUser);