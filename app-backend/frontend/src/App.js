import React from 'react';
//import './App.css';
import Header from './components/Header';
import About from './components/About';
import Profile from './components/Profile';
import Product from './components/Product';
import SimpleTabs from './components/SimpleTabs';
//import { Button, Tabs, Tab, Icon } from 'react-materialize';

const loggedIn = true;
const name = 'Valerie';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        <Header name={name} isLoggedIn={loggedIn} />
        <SimpleTabs />
      </div>
    )
   }
  
}

export default App;

