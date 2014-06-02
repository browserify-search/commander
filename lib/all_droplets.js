var request = require('./request')
var fs = require('fs')
var path = require('path')

module.exports = function(callback){
  request('https://api.digitalocean.com/droplets/')
    .end(function(err, reply){
      if (err) return callback(err)
      if (reply.error) return callback(reply.error)
      var droplets = reply.body.droplets
      callback(null, droplets)
    })
}