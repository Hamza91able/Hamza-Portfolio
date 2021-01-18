import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Avatar, Container, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@material-ui/core';

import KULogo from '../Assets/Images/Group 29.png';

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
    }
});

const educations = [
    {
        educationLogo: KULogo,
        educationInstitute: "University of Karachi",
        educationName: "Bachelors of Science in Computer",
        educationDate: "January 2017 - January 2021",
        educationDiscription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        educationLogo: KULogo,
        educationInstitute: "University of Karachi",
        educationName: "Bachelors of Science in Computer",
        educationDate: "January 2017 - January 2021",
        educationDiscription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        educationLogo: KULogo,
        educationInstitute: "University of Karachi",
        educationName: "Bachelors of Science in Computer",
        educationDate: "January 2017 - January 2021",
        educationDiscription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        educationLogo: KULogo,
        educationInstitute: "University of Karachi",
        educationName: "Bachelors of Science in Computer",
        educationDate: "January 2017 - January 2021",
        educationDiscription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
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
                <div className={displayCenter}>
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
                                                    <img src={education.educationLogo} alt={education.educationName} className={educationLogo} />
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
