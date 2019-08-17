var Task = require('../models/task.model.js');

exports.create = function(req, res) {
    // Create and Save a new Task

    if(!req.body) {
      /*test that the request contains content in the body. When testing this with Postman
      make sure that 1) you select the post method on the URL http://localhost:3001/task (remember we specified that
    we are using port 3001 in the package.json file).2) That you specify keys 'title' and 'description' with
    corresponding values in the body of the request. Use x-www-form-urlencoded. Postman will then send an HTTP request
    to your app which contains the relevant data about the task you want to add to your database.  */
        res.status(400).send({message: "Task cannot be empty"});
    }else {
      /* Since you have called this function using app.post (see /routes/task.js) and since your app uses
      body-parser middleware (app.use(bodyParser.json());) the body has been parsed into a JSON object.
      That is why your code will recognise req.body.title and req.body.description. */
    var task = new Task({title: req.body.title || "Untitled Task", description: req.body.description});
    task.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the task."});
        } else {
          res.json(data);
          //  res.send(data);
        }
    });
  }
};

exports.findAll = function(req, res) {
  console.log('in findAll');
    // Retrieve and return all notes from the database.
    Task.find(function(err, tasks){
        if(err) {
          console.log(err);
            res.status(500).send({message: "Some error occurred while retrieving tasks."});
        } else {
          //  res.send(tasks);
          res.json(tasks);
            console.log(tasks);
        }
    });
};
