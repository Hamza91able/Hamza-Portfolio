import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Typography } from '@material-ui/core';

import HTML from '../Assets/Images/Mask Group 22.png';
import ReactIcon from '../Assets/Images/react.svg';
import NodeIcon from '../Assets/Images/nodejs.svg';
import ExpressIcon from '../Assets/Images/expressjs.png';
import MongoDbIcon from '../Assets/Images/mongodb.svg';
import SqlDatabase from '../Assets/Images/sql-database.svg';
import CSSIcon from '../Assets/Images/css.svg';
import GithubIcon from '../Assets/Images/github.svg';
import JavascriptIcon from '../Assets/Images/javascript.svg';

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
        height: 80,
        width: 80,
    },
    skillName: {
        color: "white",
        fontSize: 18,
    },
    mongooseStyle: {
        color: "#800",
        fontWeight: 100,
        fontSize: 35,
    }
});

const skills = [
    {
        skillName: "ReactJS",
        img: ReactIcon,
    },
    {
        skillName: "NodeJS",
        img: NodeIcon,
    },
    {
        skillName: "Express",
        img: ExpressIcon,
    },
    {
        skillName: "MongoDB",
        img: MongoDbIcon,
    },
    {
        skillName: "Mongoose",
        img: null,
    },
    {
        skillName: "React Native",
        img: ReactIcon,
    },
    {
        skillName: "SQL Database",
        img: SqlDatabase,
    },
    {
        skillName: "Javascript",
        img: JavascriptIcon,
    },
    {
        skillName: "HTML",
        img: HTML,
    },
    {
        skillName: "CSS3",
        img: CSSIcon,
    },
    {
        skillName: "Github",
        img: GithubIcon,
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
            mongooseStyle,
        } = classes;

        return (
            <>
                <div className={displayCenter} id="skills">
                    <Typography className={mainHeading}>
                        SKILLS
                        <div className={underlineStyle}>

                        </div>
                    </Typography>
                </div>
                <div className={displayCenter}>
                    <Typography className={para1}>
                        Skills that I'm proficient in
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
                                                {
                                                    skill.skillName !== "Mongoose"
                                                        ?
                                                        <img src={skill.img} alt={skill.skillName} className={skillLogo} />
                                                        :
                                                        <Typography className={mongooseStyle}>
                                                            Mongoose
                                                        </Typography>
                                                }

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
