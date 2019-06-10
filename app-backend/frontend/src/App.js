import React, {Component} from 'react';
//import './App.css';
import Header from './components/Header';
import SimpleTabs from './components/SimpleTabs';
import ResponsiveDrawer from './components/Drawer.js'
import DrawerNew from './components/DrawerNew';

const loggedIn = true;
const name = 'Valerie';

// note: to use a sidebar/menu and to display different content based on what is clicked, need to use a combo of Material UI drawers (responsive), and the react router to render different content based on what is clicked.
// https://material-ui.com/components/drawers/#responsive-drawer
// https://blog.pshrmn.com/simple-react-router-v4-tutorial/
// another good option https://www.youtube.com/watch?v=Jkj_XP80h1k
// a simple example https://stackoverflow.com/questions/44728098/react-route-with-persistent-drawer

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <div className="row">
          
        </div>
        <div classsName="row">
          <ResponsiveDrawer />
        </div>
      </div>
    );
   }
  
}

export default App;

