var request = require('./request')
var fs = require('fs')
var path = require('path')

module.exports = function(callback){
  var cacheFilePath = path.join(
    __dirname, '..', 'droplets.json')
  fs.readFile(cacheFilePath, function(err, data){
    if (err){
      request('https://api.digitalocean.com/droplets/')
      .end(function(err, reply){
        if (err) return callback(err)
        if (reply.error) return callback(reply.error)
        var droplets = reply.body.droplets
        fs.writeFile(cacheFilePath, 
          JSON.stringify(droplets, null, '  '), 
          function(err){
            callback(null, droplets)
          })
      })
    }else{
      callback(null, JSON.parse('' + data))
    }
  })
}