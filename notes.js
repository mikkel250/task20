// https://codeburst.io/getting-started-with-react-router-5c978f70df91
// Suggested above is to add the various component(as separate files), and then you go to index.js and import them, then add the various components and routing:

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Users from './users'
import Contact from './contact'
const routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/users" component={Users} />
            <Route path="/contact" component={Contact} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
// Then you change the render from <App /> or whatever, to "routing", which you've just defined. There are lots of other bells and whistles that can be added but this is the crux. Read article for full info. 

// ----------------Other-----------------

// Very good beginner friendly explanation: 
// https://medium.com/the-andela-way/understanding-the-fundamentals-of-routing-in-react-b29f806b157e

// In the above, they have all the routing in the App.js file, which is a lot more helpful (even though they use links instead of buttons)....could potentially change the tags to links instead of buttons in the NavContent file.

// The example file: https://github.com/vumbula/vumbula-react/blob/master/chapter5/Nested-Routing/src/components/App.js

//Obviously I would want to create components separately in own dir, but you get the idea.



// OK CONFIRMED - THIS METHOD IS WORKING FOR THE CONTENT!! YAY!
// USE ROUTES INSIDE THE APP.JS. MAY BE ABLE TO NOT USE THE LINK TAG, WE'LL SEE.



//  TODO for the app:
//     - Create API routes to render the TaskCreationForm, filtering, calendar, and deleting (optional, see 4th note down regarding this)
// - Create the React components for the views above and link to the Routes in the App.js file
// - Make the landing page a calendar view?
// - Make the tasks in the tasklist(s) links that when clicked run task.update Api call (need to pass in the id to the call)
// do the same as the above but with task.delete for the delete page or just get rid of the delete page and add a button on the tasklist views to delete them (actually two buttons - mark as done and delete, where mark as done will either add a field that can be filtered in various views or move it to a different collection).


