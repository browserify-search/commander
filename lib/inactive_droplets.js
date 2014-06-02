var allDroplets = require('./all_droplets')

module.exports = function(callback){
  allDroplets(function(err, droplets){
    if (err) return callback(err)
    callback(null, droplets.filter(function(d){
      return d.status !== 'active'
    }))
  })
}