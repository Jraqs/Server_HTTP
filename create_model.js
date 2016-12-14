module.exports = function () {
  var mongoose = require('mongoose');
  var usrSchema = mongoose.Schema({
      email: {type: String, required: true, unique: true},
      passwd: String
  });
  var Users = mongoose.model('urs', usrSchema);
}
