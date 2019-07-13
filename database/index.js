const mongoose = require('mongoose');
// if our user.js file is at models/user.js
const User = require('./models/user');

class Db {

  constructor(connectionString) {
    if (mongoose.connection.readyState === 0) {
      mongoose.connect(connectionString);
    }
  }

  addNewUser(user) {
    // create a new user with the passed in object
    let newUser = new User({
      name: user.name,
      username: user.username,
      password: user.password
    });

    // call the built-in save method to save to the database
    newUser.save(function(err) {
      if (err) throw err;

      console.log('User saved successfully!');
      return true;
    });
  }

  // call the custom method. this will just add -dude to his name
  static dudifyUser(user) {
    user.dudify(function(err, name) {
      if (err) throw err;

      return name;
    });
  }

  static getAllUsers() {

    // get all the users
    User.find({}, function(err, users) {
      if (err) throw err;

      // object of all the users
      return users;
    });
  }

  static findUser(userName) {

    User.find({username: userName}, function(err, user) {
      if (err) throw err;

      // object of the user
      return user;
    });

  }

  static findUserByID(id) {

    // get a user with ID of
    User.findById(id, function(err, user) {
      if (err) throw err;

      // show the one user
      return user;
    });

  }

  static deleteByID(id) {
    // find the user with id 4
    User.findByIdAndRemove(id, function(err) {
      if (err) throw err;

      // we have deleted the user
      console.log('User deleted!');

    });
    return true;
  }
}

module.exports = Db;