// Dependencies
var express     = require('express'),
    app         = express(),
    mongoose    = require('mongoose'),
    bodyParser  = require('body-parser')
    taskControl = require('./server/controllers/taskController.js')

// Middleware
mongoose.connect('mongodb://localhost:27017/meanTodo1')
app.use('/js', express.static(__dirname + '/client/js'));
app.use(bodyParser())

// Navigation Route
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/views/index.html')
})

// API Routes
app.post('/api/tasks', taskControl.create);

app.get('/api/tasks', taskControl.list);



app.listen('3000', function() {
  console.log('Server listening ...')
})
