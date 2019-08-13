
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Root, Header, Nav, Content, Footer } from './Layout';
import NavContent from './components/NavContent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowAllTasks from './components/ShowAllTasks';


  const config = {
  "navAnchor": "left",
  "navVariant": {
    "xs": "persistent",
    "sm": "persistent",
    "md": "persistent"
  },
  "navWidth": {
    "xs": 240,
    "sm": 256,
    "md": 256
  },
  "collapsible": {
    "xs": true,
    "sm": true,
    "md": true
  },
  "collapsedWidth": {
    "xs": 64,
    "sm": 64,
    "md": 64
  },
  "clipped": {
    "xs": true,
    "sm": true,
    "md": true
  },
  "headerPosition": {
    "xs": "sticky",
    "sm": "sticky",
    "md": "sticky"
  },
  "squeezed": {
    "xs": true,
    "sm": true,
    "md": true
  },
  "footerShrink": {
    "xs": true,
    "sm": true,
    "md": true
  }
};
  
const App = () => (
  <Router>
    <Root config={config} style={{ minHeight: "100vh" }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
        <CssBaseline />
        <Header
          menuIcon={{
            inactive: <MenuIcon />,
            active: <ArrowBackIosIcon />
          }}
        >
            {/* header goes here */}
        </Header>
        <Nav
          collapsedIcon={{
            inactive: <ArrowBackIosIcon />,
            active: <ArrowForwardIosIcon />
          }}
          header={
            // you can provide fixed header inside nav
            // change null to some react element
            ctx => null
          }
        >
          {<NavContent />}
        </Nav>
        
          <Content>
            <Switch>
              {/* Use the render and anonymous function to render an element 
              from this vid: https://reacttraining.com/react-router/ */}
              <Route exact path='/' render={() => (
                // this might actually be a good place to put a calendar
              <h3>Welcome to the Task Manager</h3> 
              )} />
              {/* Use component to render a predefined component */}
              <Route exact path="/task" component={ShowAllTasks} />
            </Switch>    
          </Content>
        
        <Footer>{/* footer goes here */}</Footer>
      </Root>
    </Router>
  )

export default App;
