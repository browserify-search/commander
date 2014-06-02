var request = require('./request')

module.exports = function(api, callback){
  request('https://api.digitalocean.com/v1/' + api + '/')
    .end(function(err, reply){
      if (err) return callback(err)
      if (reply.error) return callback(reply.error)
      callback(null, reply.body)
    })
}