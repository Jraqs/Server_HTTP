module.exports = function() {

  var mongoose = require('mongoose');
  mongoose.Promise = global.Promise;
  mongoose.Promise = require('bluebird');
  mongoose.connect(`mongodb://localhost/database`);

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('Connected');
  });

}
