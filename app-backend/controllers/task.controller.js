const Task = require('../models/task.model.js');
const app = require('../app.js');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false })); // use body-parser middleware to parse urls
app.use(bodyParser.json()); // use body-parser middleware to parse JSON




// create and save a new task
exports.create = (req, res) => {
    // validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "task content cannot be empty"
        });
    }

    // create a task
    const task = new Task({
        title: req.body.title || "Untitled task",
        content: req.body.content,
        owner: req.body.owner,
        done: false
    });

    //save task in db
    task.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating the task. "
        });
    });
};

// retrieve and return all tasks from the db
exports.findAll = (req, res) => {
    Task.find({})
    .then(tasks => {
        res.send(tasks);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving tasks."
        });
    });
};

// find a single task with taskId
exports.findOne = (req, res) => {
    Task.findById(req.params.taskId)
    .then(task => {
        if (!task) {
            return res.status(404).send({
                message: `task not found with id ${req.params.taskId}`
            });
        } else {
            res.send(task);
        }
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: `task not found with id ${req.params.taskId}`
            });
        }
        return res.status(500).send({
            message: `Error retrieving task with id ${req.params.taskId}`
        });
    });
};

// update a task identified by taskId in the request
exports.update = (req, res) => {
    //Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: 'task content cannot be empty.'
        });
    }

    //find task and update it with the request body
    Task.findByIdAndUpdate(req.params.taskId, {
        title: req.body.title || "Untitled task",
        content: req.body.content
    }, { new: true }) //The {new: true} option method is used to return the modified document to the then() function instead of the original.
    .then(task => {
        if (!task) {
            return res.status(404).send({
                message: `task not found with id ${req.params.taskId}`
            });
        }
        res.send(task);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: `task not found with id ${req.params.taskId}`
            });
        }
        return res.status(500).send({
            message: `Error updating task with id ${req.params.taskId}`
        });
    });
};

// delete a task with the specified taskId in the request
exports.delete = (req, res) => {
    Task.findByIdAndRemove(req.params.taskId)
    .then(task => {
        if (!task) {
            return res.status(404).send({
                message: `task not found with id ${req.params.taskId}`
            });
        }
        res.send({ message: "task deleted successfully!" });
    }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: `task not found with id ${req.params.taskId}`
            });
        }
        return res.status(500).send({
            message: `Could task delete task with id ${req.params.taskId}`
        });
    });
};

