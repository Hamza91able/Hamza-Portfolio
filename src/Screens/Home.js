import React, { Component } from 'react';
import { Avatar, Button, Container, Grid, List, ListItem, ListItemAvatar, ListItemText, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import './Home.css';

import Image01 from '../Assets/Images/Group 34.png';
import ScrollDownImage from '../Assets/Images/Group 32.png';
import CV from '../Assets/Muhammad Hamza Khan.pdf';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Proficiency from './Proficiency';
import Projects from './Projects';
import Footer from './Footer';

const styles = theme => ({
    hideImageMobile: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    showImageMobile: {
        display: "block",
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    mainImageMargin: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    mobileFont: {
        fontSize: 35,
        [theme.breakpoints.up('sm')]: {
            fontSize: 50,
        },
    },
    heading1: {
        fontSize: 60,
        color: "#00BBF9",
    },
    heading2: {
        fontSize: 32,
    },
    para1: {
        fontSize: 16,
        marginTop: 10,
    },
    bottomScrollImg: {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        left: 0,
        bottom: 50,
        width: "100%",
    },
    image01Style: {
        width: 650,
        marginLeft: 60
    },
    image01StyleMobile: {
        width: "90%",
        marginLeft: 30,
    },
    displayCenter: {
        display: "flex",
        justifyContent: "center",
    }
});

class Home extends Component {

    render() {
        const { classes } = this.props;
        const {
            heading1,
            heading2,
            para1,
            bottomScrollImg,
            image01Style,
            image01StyleMobile,
            displayCenter,
        } = classes;

        return (
            <div>
                <div className="top-div" id="home">
                    <Container maxWidth="lg" style={{ padding: 0, height: "100%" }}>
                        <Grid container style={{
                            display: "flex",
                            alignItems: "center",
                            height: "100%",
                        }}>
                            <Grid item md={6} xs={12} style={{
                                padding: 30,
                                paddingTop: 0,
                            }}>
                                <Typography className={heading1}>
                                    HI!
                                </Typography>
                                <Typography className={heading2}>
                                    My name is <strong style={{ color: "#00BBF9" }}>Muhammad Hamza Khan</strong>
                                </Typography>
                                <Typography className={para1}>
                                    I'm a Software Engineer from UBIT. Currently focused on Web Development using MERN Stack Technologies.
                                </Typography>
                                <a href={CV} target="_blank" style={{ textDecoration: "none" }}>
                                    <Button
                                        color="inherit"
                                        style={{
                                            backgroundImage: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,150,199,1) 0%, rgba(3,4,94,1) 100%",
                                            color: "white",
                                            width: 180,
                                            padding: 10,
                                            marginTop: 30,
                                        }}
                                    >
                                        Download CV
                                    </Button>
                                </a>
                            </Grid>
                            <Grid item xs={0} md={6} className={classes.hideImageMobile}>
                                <img src={Image01} alt="image01" className={image01Style} />
                            </Grid>
                            <Grid item xs={0} md={6} className={`${classes.showImageMobile} ${classes.mainImageMargin}`}>
                                <div className={displayCenter}>
                                    <img src={Image01} alt="image01" className={image01StyleMobile} />
                                </div>
                            </Grid>
                        </Grid>
                        {/* <div className={bottomScrollImg}>
                            <img src={ScrollDownImage} alt="scroll-down" style={{
                                cursor: "pointer",
                            }} />
                        </div> */}
                    </Container>
                </div>
                <Skills />
                <div style={{ height: 130 }} />
                <Education />
                <div style={{ height: 130 }} />
                <Experience />
                <div style={{ height: 130 }} />
                <Proficiency />
                <div style={{ height: 130 }} />
                <Projects />
                <div style={{ height: 130 }} />
                <Footer />
            </div>
        )
    }
}

export default withStyles(styles)(Home);
