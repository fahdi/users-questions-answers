const Database = require('./database');
const config = require('./config');

// Get configuation from convict
const db = new Database(config.get('mongodb'));

myUser = {
    name: "Fahad",
    username: "fahdi2",
    password: "mrjojo"
}

db.addNewUser(myUser);