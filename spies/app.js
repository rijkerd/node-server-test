var db = require('./db.js');

module.exports.handleSignUp = (email,password) => {
    db.saveUser({email,password});
};