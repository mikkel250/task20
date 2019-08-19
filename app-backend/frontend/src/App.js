
import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Root, Header, Nav, Content, Footer } from './Layout';
import NavContent from './components/NavContent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowAllTasks from './components/ShowAllTasks';
import CreateTask from './components/CreateTask';
import Calendar from 'react-calendar';
import DateFilter from './components/DateFilter';

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
  
class App extends Component {
  constructor() {
    super();
    this.state = { tasks: [], filterChange: "" };
  }
  componentDidMount() {
    fetch("/task")
      .then(res => res.json())
      .then(eachTask => this.setState({ tasks: eachTask }));
  }

  onFilterByDate = (event) => {
    this.setState({ filterChange: event.target.value });
    console.log(event.target.value);
  };

  render() {
    const filteredTasks = this.state.tasks.filter(task => {
      if (task.due <= this.state.filterChange) {
        return task;
      }
    });

    if (filteredTasks !== '') {
      return (
       
        <Router>
          <Root config={config} style={{ minHeight: "100vh" }}>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
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

            <Content className="ml3">
              <Switch>
                <Route
                  exact
                  path="/task"
                  render={() => (
                    <>
                      <h2 className="ml4">Task List</h2>
                      <DateFilter filterChange={this.onFilterByDate} />
                      <ShowAllTasks tasks={filteredTasks} />
                    </>
                  )}
                />
                {/* Use component to render a predefined component */}

                <Route exact path="/create" component={CreateTask} />
                {/* <Route exact path="/filter" component={FilterTasks} /> */}
                {/* <Route exact path="/teams" component={Teams} /> */}
              </Switch>
            </Content>

            <Footer>{/* footer goes here */}</Footer>
          </Root>
        </Router>
      )
    
    
    } else {
      return (
        <Router>
          <Root config={config} style={{ minHeight: "100vh" }}>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
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

            <Content className="ml3">
              <Switch>
                <Route
                  exact
                  path="/task"
                  render={() => (
                    <>
                      <h2 className="ml4">Task List</h2>
                      <DateFilter filterChange={this.onFilterByDate} />
                      <ShowAllTasks tasks={this.state.tasks} />
                    </>
                  )}
                />
                {/* Use component to render a predefined component */}

                <Route exact path="/create" component={CreateTask} />
                {/* <Route exact path="/filter" component={FilterTasks} /> */}
                {/* <Route exact path="/teams" component={Teams} /> */}
              </Switch>
            </Content>

            <Footer>{/* footer goes here */}</Footer>
          </Root>
        </Router>
      );
    }
  }
};

export default App;
