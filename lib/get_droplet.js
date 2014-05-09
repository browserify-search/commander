var allDroplets = require('./all_droplets')

module.exports = function(name, callback){
  allDroplets(function(err, droplets){
    if (err) return callback(err)
    var droplet = droplets.filter(function(d){
      return d.name === name
    })[0]
    if (!droplet){
      return callback(
        new Error('No droplet with name ' +
          name + 'found.')
      )
    }
    callback(null, droplet)
  })
}

