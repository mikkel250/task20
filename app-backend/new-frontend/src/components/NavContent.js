import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";

const list = [
    {
        primaryText: "This one doesn't show up for some reason",
        icon: "folder"
    },
    {
        primaryText: "My Tasks",
        icon: "list"
    },
    {
        primaryText: "Filter",
        icon: "filter_list"
    },
    {
        primaryText: "Recent",
        icon: "schedule"
    },
    {
        primaryText: "Offline",
        icon: "offline_pin"
    },
    {
        primaryText: "Add Task",
        icon: "add_circle"
    },
    {
        primaryText: "Backups",
        icon: "backup"
    },
    {
        primaryText: "Trash",
        icon: "delete"
    }
];

const NavContent = () => (
    <List>
        {list.map(({ primaryText, icon }, i) => (
            <ListItem selected={i === 0} button>
                <ListItemIcon>
                    <Icon>{icon}</Icon>
                </ListItemIcon>
                <ListItemText
                    primary={primaryText}
                    primaryTypographyProps={{ noWrap: true }}
                />
            </ListItem>
        ))}
        <Divider style={{ margin: "12px 0" }} />
        <ListItem button>
            <ListItemIcon>
                <Icon>settings</Icon>
            </ListItemIcon>
            <ListItemText
                primary={"Settings & account"}
                primaryTypographyProps={{ noWrap: true }}
            />
        </ListItem>
    </List>
);

NavContent.propTypes = {};
NavContent.defaultProps = {};

export default NavContent;
