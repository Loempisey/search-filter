const mongoose = require('mongoose')
const User = require('./user.model')
let db = {};

db.mongoose = mongoose;
db.user = User;
module.exports = db;