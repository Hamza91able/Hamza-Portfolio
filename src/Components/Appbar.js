import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {
    Grid,
    Container,
    Avatar,
} from '@material-ui/core';
import MobileMenu from './MobileMenu';
import { withRouter } from 'react-router-dom';

import Logo from '../Assets/Images/Hamza Khan.png'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appbar: {
        backgroundColor: "#0A0A0A",
        boxShadow: "none",
        color: "white",
    },
    button: {
        float: "right",
        marginRight: 10,
        display: "none",
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    menuButton: {
        float: "right",
        marginRight: 10,
        display: "block",
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    }
}));

const underlineStyle = {
    background: "#0096C7",
    height: "4px",
    borderRadius: 30,
}

function Appbar(props) {
    const classes = useStyles();
    const [selected, setSelected] = useState("Home");

    useEffect(() => {
        if (window.location.pathname === "/artworks") {
            setSelected("Portfolio");
        } else if (window.location.pathname === "/exhibitions") {
            setSelected("Exhibition");
        } else if (window.location.pathname === "/contact") {
            setSelected("Contact");
        }
    }, [])

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar style={{ marginTop: 20 }}>
                    <Container maxWidth="lg">
                        <Grid container>
                            <Grid item xs={3}>
                                <img src={Logo} alt="logo" style={{
                                    width: 150
                                }} />
                            </Grid>
                            <Grid item xs={9}>
                                <div className={classes.menuButton}>
                                    <MobileMenu />
                                </div>
                                <div style={{ marginTop: 5 }}>
                                    <Button
                                        color="inherit"
                                        className={classes.button}
                                        onClick={() => {
                                            props.history.push("/contact");
                                            setSelected("Contact");
                                        }}
                                    >
                                        Contact Me
                                        <div style={selected === "Contact" ? underlineStyle : {}}>

                                        </div>
                                    </Button>
                                    <Button
                                        color="inherit"
                                        className={classes.button}
                                        onClick={() => {
                                            props.history.push("/follow-me");
                                            setSelected("Follow Me");
                                        }}
                                    >
                                        Follow Me
                                        <div style={selected === "Follow Me" ? underlineStyle : {}}>

                                        </div>
                                    </Button>
                                    <Button
                                        color="inherit"
                                        className={classes.button}
                                        onClick={() => {
                                            props.history.push("/about");
                                            setSelected("About");
                                        }}
                                    >
                                        About
                                        <div style={selected === "About" ? underlineStyle : {}}>

                                        </div>
                                    </Button>
                                    <Button
                                        color="inherit"
                                        className={classes.button}
                                        onClick={() => {
                                            props.history.push("/portfolio");
                                            setSelected("Portfolio");
                                        }}
                                    >
                                        Portfolio
                                        <div style={selected === "Portfolio" ? underlineStyle : {}}>

                                        </div>
                                    </Button>
                                    <Button
                                        color="inherit"
                                        className={classes.button}
                                        onClick={() => {
                                            props.history.push("/");
                                            setSelected("Home");
                                        }}
                                    >
                                        Profile
                                        <div style={selected === "Home" ? underlineStyle : {}}>

                                        </div>
                                    </Button>
                                </div>

                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(Appbar);