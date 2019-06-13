import React from 'react';
import ReactDOM from "react-dom";
import { ThemeProvider } from '@material-ui/styles';

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";

import { Root, Header, Nav, Content, Footer, presets } from "./Layout";


// import "./styles.css";


function App() {
    return (
        <ThemeProvider theme={createMuiTheme()}>
            <Root>
                <CssBaseline />
                <Header
                    menuIcon={{
                        inactive: <Icon>menu</Icon>,
                        active: <Icon>chevron_left</Icon>,
                    }}
                >
                    <Typography>Header</Typography>
                </Header>
                <Nav>
                    <Typography>Nav</Typography>
                </Nav>
                <Content>
                    <Typography>Content</Typography>
                </Content>
                <Footer>
                    <Typography>Footer</Typography>
                </Footer>
            </Root>
        </ThemeProvider>
    );
}

export default App;