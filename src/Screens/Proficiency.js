import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import CustomizedProgress from '../Components/CustomisedProgress';

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
    skill: {
        fontSize: 26,
        color: "white",
        padding: 20,
    }
});

const proficiencies = [
    {
        name: "HTML",
        level: 95,
    },
    {
        name: "HTML",
        level: 95,
    },
    {
        name: "HTML",
        level: 95,
    },
    {
        name: "HTML",
        level: 95,
    },
]

class Proficiency extends Component {

    render() {
        const { classes } = this.props;
        const {
            mainHeading,
            displayCenter,
            underlineStyle,
            skill,
        } = classes;

        return (
            <>
                <div className={displayCenter}>
                    <Typography className={mainHeading}>
                        PROFICIENCY
                        <div className={underlineStyle}>

                        </div>
                    </Typography>
                </div>
                <Container maxWidth="lg" style={{ marginTop: 60 }}>
                    <Grid container spacing={3}>
                        {
                            proficiencies.map((proficiency, index) => {
                                return (
                                    <Grid item xs={12} md={6} key={index}>
                                        <Typography className={skill}>
                                            {proficiency.name}
                                        </Typography>
                                        <CustomizedProgress level={proficiency.level} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Container>
            </>
        );
    }
}

export default withStyles(styles)(Proficiency);
