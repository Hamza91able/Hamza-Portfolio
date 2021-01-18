import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Typography } from '@material-ui/core';

import HTML from '../Assets/Images/Mask Group 22.png';

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
        height: 182,
        width: 180,
        padding: 30,
    },
    skillLogo: {
        height: 60,
        width: 60,
    },
    skillName: {
        color: "white",
        fontSize: 18,
    }
});

const skills = [
    {
        skillName: "HTML",
        img: HTML,
    },
    {
        skillName: "HTML",
        img: HTML,
    },
    {
        skillName: "HTML",
        img: HTML,
    },
    {
        skillName: "HTML",
        img: HTML,
    },
    {
        skillName: "HTML",
        img: HTML,
    },
]

class Skills extends Component {

    render() {
        const { classes } = this.props;
        const {
            mainHeading,
            displayCenter,
            underlineStyle,
            para1,
            skillPaper,
            skillLogo,
            skillName,
        } = classes;

        return (
            <>
                <div className={displayCenter}>
                    <Typography className={mainHeading}>
                        SKILLS
                        <div className={underlineStyle}>

                        </div>
                    </Typography>
                </div>
                <div className={displayCenter}>
                    <Typography className={para1}>
                        Skills ka bhashan here
                    </Typography>
                </div>
                <Container maxWidth="lg" style={{ marginTop: 30 }}>
                    <Grid container>
                        {
                            skills.map((skill, index) => (
                                <Grid item xs={12} md={3} className={displayCenter} style={{ marginBottom: 20 }}>
                                    <Paper elevation={2} className={`${skillPaper}`}>
                                        <Grid container style={{ height: "100%" }}>
                                            <Grid item xs={12} className={displayCenter}>
                                                <img src={skill.img} alt={skill.skillName} className={skillLogo} />
                                            </Grid>
                                            <Grid item xs={12} className={displayCenter}>
                                                <Typography className={skillName}>
                                                    {skill.skillName}
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

export default withStyles(styles)(Skills);
