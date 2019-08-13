import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TaskCreationForm from './TaskCreationForm'
import ShowAllTasks from './ShowAllTasks';

const list = [
    {
        primaryText: "This one doesn't show up for some reason",
        icon: "folder",
        route: "/tasks", 
        component: <ShowAllTasks />
    },
    {
        primaryText: "My Tasks",
        icon: "list",
        route: "/task",
        component: <ShowAllTasks />
    },
    {
        primaryText: "Add Task",
        icon: "add_circle",
        route: "/TaskCreationForm",
        component: <ShowAllTasks />
    },
    {
        primaryText: "Filter",
        icon: "filter_list",
        route: "/task/:taskID",
        component: <ShowAllTasks />
    },
    {
        primaryText: "Calendar View",
        icon: "event"
    },
    // {
    //     primaryText: "Offline",
    //     icon: "offline_pin"
    // },
    // {
    //     primaryText: "Backups",
    //     icon: "backup"
    // },
    {
        primaryText: "Delete Tasks",
        icon: "delete"
    }
];

const NavContent = () => (
    // Wrap this in a router tag? then Route and Route.Fragment for each item? going off V's App.js
    // she is essentially doing the same as a sidebar just at the top
    //<Router>
        <List>
            {list.map(({ primaryText, icon, route, component }, i) => (
                <Link to={route} >
                    <ListItem selected={i === 0} button>
                        <ListItemIcon>
                            <Icon>{icon}</Icon>
                        </ListItemIcon>
                        <ListItemText
                            primary={primaryText}
                            primaryTypographyProps={{ noWrap: true }}
                        />
                    </ListItem>
                </Link>
            ))}
            <Divider style={{ margin: "12px 0" }} />
            <ListItem button>
                <ListItemIcon>
                    <Icon>group</Icon>
                </ListItemIcon>
                <ListItemText
                    primary={"Teams"}
                    primaryTypographyProps={{ noWrap: true }}
                />
            </ListItem>
        </List>
    //</Router>
);

NavContent.propTypes = {};
NavContent.defaultProps = {};

export default NavContent;
