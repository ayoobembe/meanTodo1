// Dependencies
var express = require('express'),
    app     = express()

// Middleware
app.use('/js', express.static(__dirname + '/client/js'));


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/views/index.html')
})


app.listen('3000', function() {
  console.log('Server listening ...')
})
