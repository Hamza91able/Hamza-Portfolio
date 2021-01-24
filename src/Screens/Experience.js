import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Typography } from '@material-ui/core';

import Freelancing from '../Assets/Images/freelancing.svg';
import Novasoft from '../Assets/Images/logo.png';

const styles = theme => ({
    mainHeading: {
        fontSize: 32,
    },
    displayCenter: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
    },
    underlineStyle: {
        background: "#0096C7",
        height: "4px",
        borderRadius: 30,
    },
    para1: {
        fontSize: 16,
        marginTop: 40,
    },
    skillPaper: {
        background: "#0A0A0A",
        color: "white",
        height: 470,
        width: 360,
        padding: 30,
    },
    skillLogo: {
        height: 60,
        width: 60,
    },
    skillName: {
        color: "white",
        fontSize: 24,
    },
    experienceOccup: {
        color: "#00BBF9",
        fontSize: 20,
    },
    experienceDate: {
        fontSize: 16,
        color: "white",
    },
    experienceDetails: {
        fontSize: 14,
        color: "white",
        whiteSpace: "pre-line",
    }
});

const skills = [
    {
        img: Freelancing,
        experienceName: "FREELANCING",
        experienceOccup: "FULL STACK DEVELOPER",
        experienceDate: "JUNE 2019 - Present",
        experienceDetails: `
        Creating rich proefssional web applications
        Created various Portfolio websites
        CRM Development`,
    },
    {
        img: Novasoft,
        experienceName: "NOVASOFT",
        experienceOccup: "SOFTWARE ENGINEER",
        experienceDate: "JUNE 2019 - 2020",
        experienceDetails: `
        Designs and creates professional web applications
        Checks feasibility of software prototypes
        Modifies code to fix errors`,
    },
]

class Experience extends Component {

    render() {
        const { classes } = this.props;
        const {
            mainHeading,
            displayCenter,
            underlineStyle,
            skillPaper,
            skillLogo,
            skillName,
            experienceOccup,
            experienceDate,
            experienceDetails,
        } = classes;

        return (
            <>
                <div className={displayCenter} id="experience">
                    <Typography className={mainHeading}>
                        Experience
                        <div className={underlineStyle}>

                        </div>
                    </Typography>
                </div>
                <Container maxWidth="lg" style={{ marginTop: 50 }}>
                    <Grid container>
                        {
                            skills.map((skill, index) => (
                                <Grid item xs={12} md={6} className={displayCenter} style={{ marginBottom: 20 }}>
                                    <Paper elevation={2} className={`${skillPaper}`}>
                                        <Grid container style={{ height: "100%" }}>
                                            <Grid item xs={12} className={displayCenter}>
                                                <img src={skill.img} alt={skill.skillName} className={skillLogo} />
                                            </Grid>
                                            <Grid item xs={12} className={displayCenter}>
                                                <Typography className={skillName}>
                                                    {skill.experienceName}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} className={displayCenter}>
                                                <Typography className={experienceOccup}>
                                                    {skill.experienceOccup}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} className={displayCenter}>
                                                <Typography className={experienceDate}>
                                                    {skill.experienceDate}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} className={displayCenter}>
                                                <Typography className={experienceDetails}>
                                                    {skill.experienceDetails}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </>
        )
    }
}

export default withStyles(styles)(Experience);
