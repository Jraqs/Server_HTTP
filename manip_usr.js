var mongoose = require('mongoose');
var usrSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    passwd: String
});
var Users = mongoose.model('urs', usrSchema);



var verify_delete_usr = function(email, passwd, callback)
{
  var promise = Users.find({email: email});
  promise.then(function(data) {
    if (data.length == 0)
      throw ("no user")
    return (data)
  })
    .then(function(data){
        var str;
        var keyValue = {};

        str = data.toString();
        str.split(",\n  ").forEach((element) => {
          keyValue[element.split(': ')[0]] = element.split(': ')[1];
        })
        if (keyValue["passwd"] == null)
          throw ("no password")
        if (keyValue["passwd"].localeCompare( "\'" + passwd + "\'") == 0) {
          promise.verified = true;
        }
      })
      .then(function(){
        if (promise.verified === true){
          var res = ""
          Users.remove({email: email}, function(err, result) {
            if (err)
              console.log(err);
          }, 1)
          callback("delete_succes");
        }
      })
      .catch(function(err){
          callback("delete_failure");
        })
}

module.exports =  {
      create_usr: function(email, password)
      {
        var newUsr  = new Users;
        newUsr['email'] = email;
        newUsr['passwd'] = password;
        newUsr.save();
      },
      modify_usr: function(email, password)
      {
        Users.update({email : email},
        {passwd: password},
        {upsert: true},
        function(err, data)
          {
          if (err)
            console.log(err);
          else
            console.log(data);
          });
        },
      delete_usr: function(email, passwd, callback)
      {
          verify_delete_usr(email, passwd, function(mess)
          {
            callback(mess);
          })
        }
      }
