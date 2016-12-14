var User = require('./mongo.js')
User();
var mongoose = require('mongoose');

var usrSchema = mongoose.Schema({
    email: String,
    passwd: String
});

var Users = mongoose.model('urs', usrSchema);

Users.remove({email: "koko"},{justOne: 1});

// Users.update({name : 'Louis'},
// {name: 'Louis', Alive: true},
// {upsert: true},
// function(err, data){
//   if (err)
//     console.log(err);
//   else
//     console.log(data);
// }
// );


// Users.update(
//   {email : "test"},
//   {
//     $set: {"passwd" : "changed"},
//     $currentDate: {"lastModified": true}
//   },
//   {upsert: true}
// )

//console.log(Users.find({"name": 'louis'}));


 //Users.find({email: "Hi"}, function(err, data){
//   console.log(data);
//   var str;
//   var keyValue = {};
//   str = data.toString();
//   str.split(",\n  ").forEach((element) => {
//     keyValue[element.split(':')[0]] = element.split(':')[1];
//     })
//     console.log((keyValue["passwd"]));
//   })
