import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";
import { BrowserRouter as Router, Route } from 'react-router-dom';


const list = [
    {
        primaryText: "This one doesn't show up for some reason",
        icon: "folder",
        route: "/tasks"
    },
    {
        primaryText: "My Tasks",
        icon: "list"
    },
    {
        primaryText: "Add Task",
        icon: "add_circle"
    },
    {
        primaryText: "Filter",
        icon: "filter_list"
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
    <List>
        {list.map(({ primaryText, icon, route }, i) => (
            <ListItem selected={i === 0} button>
                <ListItemIcon>
                    <Icon>{icon}</Icon>
                </ListItemIcon>
                <ListItemText
                    primary={primaryText}
                    primaryTypographyProps={{ noWrap: true }}
                    onClick={route}
                />
            </ListItem>
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
);

NavContent.propTypes = {};
NavContent.defaultProps = {};

export default NavContent;
