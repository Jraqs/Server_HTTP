var str = "/user/Louis";
var path = "/user/:dezad/:dazdaz/:dza"
var path2 = "/user/fhezo/cez/dad"
var expr = "^/" + path.split('/')[1];
var tokens = path.split('/')
                 .filter(part => part[0] === ':')
                 .map(part => part.substr(1))
tokens.forEach(function() {
  expr += "/(.*)";
});
expr += "$"
var regexp = new RegExp(expr, 'gi')
var token = path2.split('/')
                  .filter(part => part[0] === '')
                  .map(part => part.substr(1))
var route = null;
route = regexp.test(path2)
console.log(token);
