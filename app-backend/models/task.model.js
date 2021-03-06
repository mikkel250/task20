const mongoose = require('mongoose');


const TaskSchema = mongoose.Schema({
    title: String,
    content: String,    
    owner: String,
    due: Date,
    done: {
        type: Boolean,
        default: false
    },
},
    {
        timestamps: true,
    },
    {
        collection: 'tasks'
    }
);

module.exports = mongoose.model('Task', TaskSchema);