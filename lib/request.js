var superagent = require('superagent')
var auth = require(__dirname + '/../auth.json')

module.exports = function(url){
  return superagent.get(url)
    .query(auth)
}