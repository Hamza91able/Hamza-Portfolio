import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@material-ui/core';

import PhoneIcon from '../Assets/Images/Icon material-call.png';
import Mail from '../Assets/Images/Icon zocial-email.png';

import GithubIcon from '../Assets/Images/github.svg';
import LinkedInIcon from '../Assets/Images/linkedin.svg';

const styles = theme => ({
    mainDiv: {
        width: "100%",
        height: 330,
    },
    mainName: {
        fontSize: 32,
        color: "#00BBF9",
    },
    secondaryText: {
        fontSize: 16,
        color: "#00BBF9",
        fontStyle: "italic",
    },
    normalText: {
        fontSize: 16,
    },
    socialIcon: {
        width: 50,
        height: 50,
        cursor: "pointer",
    },
    socialParent: {
        display: "flex",
        alignItems: "center",
    },
    creditDiv: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    contentList: {
        marginTop: 0,
        paddingTop: 0,
        [theme.breakpoints.up('sm')]: {
            marginTop: -30,
        },
    },
    centerDesktop: {
        display: "flex",
        justifyContent: "left",
        [theme.breakpoints.up('sm')]: {
            justifyContent: "center",
        },
    },
    link: {
        textDecoration: "none",
        color: "white",
    }
});

class Footer extends Component {

    render() {
        const { classes } = this.props;
        const {
            mainDiv,
            mainName,
            secondaryText,
            normalText,
            socialIcon,
            socialParent,
            creditDiv,
            contentList,
            centerDesktop,
        } = classes;

        return (
            <>
                <div className={mainDiv}>
                    <Container maxWidth="lg" style={{ padding: 30 }}>
                        <Grid container>
                            <Grid item md={4} xs={12}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Typography className={mainName}>
                                            HAMZA <text style={{ color: "white" }}>KHAN</text>
                                        </Typography>
                                        <Typography className={secondaryText}>
                                            Software Engineer
                                            <br />
                                            MERN Stack Developer
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} style={{ marginTop: 90, marginBottom: 20 }}>
                                        <Typography className={normalText}>
                                            Follow Me
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} md={2}>
                                        <a href="https://github.com/hamza91able" target="_blank">
                                            <img src={GithubIcon} alt="github" className={socialIcon} />
                                        </a>
                                    </Grid>
                                    <Grid item xs={3} md={2} className={socialParent}>
                                        <a href="https://www.linkedin.com/in/datguyhamza/" target="_blank">
                                            <img src={LinkedInIcon} alt="linkedin" className={socialIcon} />
                                        </a>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={4} className={centerDesktop}>
                                <List className={contentList}>
                                    <a href="#home" className={classes.link}>
                                        <ListItem button>
                                            <ListItemText primary="Profile" />
                                        </ListItem>
                                    </a>
                                    <a href="#skills" className={classes.link}>
                                        <ListItem button>
                                            <ListItemText primary="Skills" />
                                        </ListItem>
                                    </a>
                                    <a href="#education" className={classes.link}>
                                        <ListItem button>
                                            <ListItemText primary="Education" />
                                        </ListItem>
                                    </a>
                                    <a href="#experience" className={classes.link}>
                                        <ListItem button>
                                            <ListItemText primary="Experience" />
                                        </ListItem>
                                    </a>
                                    <a href="#proficiency" className={classes.link}>
                                        <ListItem button>
                                            <ListItemText primary="Proficiency" />
                                        </ListItem>
                                    </a>
                                    <a href="#projects" className={classes.link}>
                                        <ListItem button>
                                            <ListItemText primary="Projects" />
                                        </ListItem>
                                    </a>
                                </List>
                            </Grid>
                            <Grid item xs={12} md={4} className={centerDesktop}>
                                <List className={contentList}>
                                    <ListItem>
                                        <ListItemText>
                                            Contact Me
                                        </ListItemText>
                                    </ListItem>
                                    <a
                                        href="tel:+923002322689"
                                        className={classes.link}
                                    >
                                        <ListItem>
                                            <ListItemAvatar>
                                                <img src={PhoneIcon} alt="phone" />
                                            </ListItemAvatar>
                                            <ListItemText>
                                                03002322689
                                            </ListItemText>
                                        </ListItem>
                                    </a>
                                    <a
                                        href="mailto:Fatimashakilkhan@gmail.com"
                                        target="_blank"
                                        className={classes.link}
                                    >
                                        <ListItem>
                                            <ListItemAvatar>
                                                <img src={Mail} alt="mail" />
                                            </ListItemAvatar>
                                            <ListItemText>
                                                m.hamzakhan91able@gmail.com
                                            </ListItemText>
                                        </ListItem>
                                    </a>

                                </List>
                            </Grid>
                        </Grid>
                    </Container>
                    <Divider style={{ background: "#00BBF9" }} />
                    <div className={creditDiv}>
                        <Typography className={normalText} style={{ padding: 20, color: "#00BBF9" }}>
                            All Rights Reserved By Hamza Khan
                        </Typography>
                    </div>
                </div>
            </>
        )
    }
}

export default withStyles(styles)(Footer);
