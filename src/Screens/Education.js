import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Avatar, Container, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@material-ui/core';

import KULogo from '../Assets/Images/Group 29.png';
import JouharDegree from '../Assets/Images/jouhar.jpg';
import TheEducators from '../Assets/Images/the-educators-1.jpg';

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
    educationPaper: {
        width: "100%",
        height: "auto",
        background: "#0A0A0A",
        padding: 10,
        boxShadow: "-12px -20px 20px 0px rgba(0,0,0,0.75)",
        [theme.breakpoints.up('sm')]: {
            width: 527,
            height: 236,
        },
    },
    educationLogo: {
        height: 80,
        width: 80,
    },
    educationInstitute: {
        fontSize: 22,
        color: "#00BBF9",
    },
    educationName: {
        fontSize: 16,
        color: "white",
    },
    educationDate: {
        fontSize: 14,
        color: "white",
        marginTop: 20
    },
    educationDiscription: {
        fontSize: 12,
        color: "#FFFFFF",
        whiteSpace: "pre-line",
    }
});

const educations = [
    {
        educationLogo: KULogo,
        educationInstitute: "University of Karachi",
        educationName: "Bachelors of Science in Computer",
        educationDate: "January 2017 - February 2021",
        educationDiscription: `I'm pursuing a degree in Software Engineering from University of Karachi. 
        I will be graduating in Feb 21' with 3.0 CGPA`
    },
    {
        educationLogo: JouharDegree,
        educationInstitute: "Jouhar Degree College",
        educationName: "Pre-Engineering",
        educationDate: "2013-2016",
        educationDiscription: "I have done my intermediate in Pre-Engineering from Karachi Board."
    },
    {
        educationLogo: TheEducators,
        educationInstitute: "The Educators",
        educationName: "Matriculation",
        educationDate: "2001-2013",
        educationDiscription: "I have done my matric in Science from Karachi Board and I got 74% marks in it."
    },
]

class Education extends Component {

    render() {
        const { classes } = this.props;
        const {
            mainHeading,
            displayCenter,
            underlineStyle,
            educationPaper,
            educationLogo,
            educationInstitute,
            educationName,
            educationDate,
            educationDiscription,
        } = classes;

        return (
            <>
                <div className={displayCenter} id="education">
                    <Typography className={mainHeading}>
                        EDUCATION
                        <div className={underlineStyle}>

                        </div>
                    </Typography>
                </div>
                <Container maxWidth="lg" style={{ marginTop: 50 }}>
                    <Grid container>
                        {
                            educations.map((education, index) => (
                                <Grid item xs={12} md={6} className={displayCenter} style={{ marginBottom: 20 }}>
                                    <Paper elevation={2} className={`${educationPaper}`}>
                                        <List className={classes.root}>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar src={education.educationLogo} alt={education.educationName} className={educationLogo} />
                                                </ListItemAvatar>
                                                <ListItemText style={{ marginLeft: 30 }} primary={
                                                    <Typography className={educationInstitute}>
                                                        {education.educationInstitute}
                                                    </Typography>
                                                } secondary={
                                                    <>
                                                        <Typography className={educationName}>
                                                            {education.educationName}
                                                        </Typography>
                                                        <Typography className={educationDate}>
                                                            {education.educationDate}
                                                        </Typography>
                                                    </>
                                                } />
                                            </ListItem>
                                        </List>
                                        <div style={{ padding: 20, marginTop: 0 }}>
                                            <Typography className={educationDiscription}>
                                                {education.educationDiscription}
                                            </Typography>
                                        </div>
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

export default withStyles(styles)(Education);
