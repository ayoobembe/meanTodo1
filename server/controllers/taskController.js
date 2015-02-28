var Task = require('../models/taskModel')

module.exports.create = function(req, res) {
  console.log("Writing to databse: ", req.body )
  var task = new Task(req.body)
  task.save(function(err, result){
    res.json(result)
  })
}

module.exports.list = function(req, res) {
  Task.find({}, function(err, results) {
    res.json(results)
  })
}
