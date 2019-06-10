
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Root, HeaderLayout, Nav, Content, Footer };

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

const DrawerNew = () => (
    <Root config={config} style={{ minHeight: "100vh" }}>
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
            {/* nav goes here */}
        </Nav>
        <Content>
            {/* content goes here */}
        </Content>
        <Footer>{/* footer goes here */}</Footer>
    </Root>
)

export default DrawerNew;