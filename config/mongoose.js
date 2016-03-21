/**
 * Created by dsm on 3/21/16.
 */
var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function(){
    var db = mongoose.connect(config.db);
    require('../app/models/user.server.model');
    return db;
};