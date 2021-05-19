var express = require('express')

var app = express();

var eventRouter = express.Router();

eventRouter.route('/events')
  .get(funtion(req, res){
    var data = {data: 'Hello Sanjay'}
    res.json(data)
  })

app.use('/api', eventRouter)
