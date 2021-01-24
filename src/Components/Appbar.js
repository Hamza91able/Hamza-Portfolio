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
    },
    link: {
        textDecoration: "none",
        color: "white",
    }
}));

const underlineStyle = {
    background: "#0096C7",
    height: "4px",
    borderRadius: 30,
}

function Appbar(props) {
    const classes = useStyles();
    const [selected, setSelected] = useState("Profile");

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appbar}>
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
                                    <a href="#projects" className={classes.link}>
                                        <Button
                                            color="inherit"
                                            className={classes.button}
                                            onClick={() => {
                                                setSelected("Projects");
                                            }}
                                        >
                                            Projects
                                            <div style={selected === "Projects" ? underlineStyle : {}}>

                                            </div>
                                        </Button>
                                    </a>
                                    <a href="#proficiency" className={classes.link}>
                                        <Button
                                            color="inherit"
                                            className={classes.button}
                                            onClick={() => {
                                                setSelected("Proficiency");
                                            }}
                                        >
                                            Proficiency
                                            <div style={selected === "Proficiency" ? underlineStyle : {}}>

                                            </div>
                                        </Button>
                                    </a>
                                    <a href="#experience" className={classes.link}>
                                        <Button
                                            color="inherit"
                                            className={classes.button}
                                            onClick={() => {
                                                setSelected("Experience");
                                            }}
                                        >
                                            Experience
                                            <div style={selected === "Experience" ? underlineStyle : {}}>

                                            </div>
                                        </Button>
                                    </a>
                                    <a href="#education" className={classes.link}>
                                        <Button
                                            color="inherit"
                                            className={classes.button}
                                            onClick={() => {
                                                setSelected("Education");
                                            }}
                                        >
                                            Education
                                            <div style={selected === "Education" ? underlineStyle : {}}>

                                            </div>
                                        </Button>
                                    </a>
                                    <a href="#skills" className={classes.link}>
                                        <Button
                                            color="inherit"
                                            className={classes.button}
                                            onClick={() => {
                                                setSelected("Skills");
                                            }}
                                        >
                                            Skills
                                            <div style={selected === "Skills" ? underlineStyle : {}}>

                                            </div>
                                        </Button>
                                    </a>
                                    <a href="#home" className={classes.link}>
                                        <Button
                                            color="inherit"
                                            className={classes.button}
                                            onClick={() => {
                                                setSelected("Profile");
                                            }}
                                        >
                                            Profile
                                            <div style={selected === "Profile" ? underlineStyle : {}}>

                                            </div>
                                        </Button>
                                    </a>
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