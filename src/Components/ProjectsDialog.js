import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import AliceCarousel from 'react-alice-carousel';
import { withStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from '@material-ui/core';

const styles = theme => ({
    imageStyle: {
        width: "100%",
        height: "100%",
    },
    container: {
        padding: 30,
    },
    mainHeading: {
        fontSize: 24,
        fontWeight: "bold",
    },
    descriptionStyle: {
        fontSize: 16,
        marginTop: 10,
    }
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};

function ProjectsDialog(props) {
    const {
        classes,
        images,
        description,
        detailedDescription,
        link,
        link2,
    } = props;
    const {
        imageStyle,
        container,
        mainHeading,
        descriptionStyle,
    } = classes;

    return (
        <div>
            <Dialog
                open
                TransitionComponent={Transition}
                keepMounted
                onClose={props.handleModalClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                maxWidth="xl"
            >
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <AliceCarousel
                            mouseTracking
                            items={
                                Array.isArray(images) &&
                                images.map((image, i) => (
                                    <img src={image} draggable={false} className={imageStyle} alt={image} />
                                ))
                            }
                            responsive={responsive}
                            disableButtonsControls
                        />
                    </Grid>
                    <Grid item xs={12} md={4} style={{ height: "100%" }}>
                        <Container maxWidth="lg" className={container}>
                            <Typography className={mainHeading}>
                                <u>{description}</u>
                            </Typography>
                            <Typography className={descriptionStyle}>
                                {detailedDescription}
                            </Typography>
                            {link && <Typography>
                                <br />
                                Link: <a href={link} target="_blank">{link}</a>
                            </Typography>}
                            {link2 && <Typography>
                                <br />
                                Github Link: <a href={link2} target="_blank">Computer Store</a>
                            </Typography>}
                        </Container>
                    </Grid>
                </Grid>
            </Dialog>
        </div>
    );
}

export default withStyles(styles)(ProjectsDialog);
