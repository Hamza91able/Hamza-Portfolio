import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import Project1 from '../Assets/Project Images/Project1.png';

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
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 15,
    },
    description: {
        backgroundColor: "#0A0A0A",
        fontSize: 16,
        color: "white",
        textAlign: "center",
        paddingTop: 20,
    }
});

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 2 },
};

class Projects extends Component {

    render() {
        const { classes } = this.props;
        const {
            mainHeading,
            displayCenter,
            underlineStyle,
            image,
            description,
        } = classes;

        return (
            <>
                <div className={displayCenter}>
                    <Typography className={mainHeading}>
                        PROJECTS
                        <div className={underlineStyle}>

                        </div>
                    </Typography>
                </div>
                <Container maxWidth="lg" style={{ marginTop: 60 }}>
                    <AliceCarousel
                        mouseTracking
                        items={
                            projects.map((project, index) => {
                                return (
                                    <a href={project.link} target="_blank">
                                        <Paper style={{ marginRight: 30, borderRadius: 15, }} onClick={() => window.open(project.link, '_blank')}>
                                            <img src={project.img} alt={index} className={image} draggable={false} />
                                            <Typography className={description}>
                                                {project.description}
                                            </Typography>
                                        </Paper>
                                    </a>
                                )
                            })
                        }
                        responsive={responsive}
                        disableButtonsControls
                    />
                </Container>
            </>
        );
    }
}


const projects = [
    {
        img: Project1,
        description: `
            Portfolio website created for an artist using ReactJS
        `,
        link: "www.fathymakhalid.com"
    },
    {
        img: Project1,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        img: Project1,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        img: Project1,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        img: Project1,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
]

export default withStyles(styles)(Projects);
