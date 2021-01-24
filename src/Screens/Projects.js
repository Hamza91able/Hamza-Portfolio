import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import ProjectsDialog from '../Components/ProjectsDialog';

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
    568: { items: 3 },
    1024: { items: 3 },
};

class Projects extends Component {

    state = {
        openModal: false,
        project: {},
        customKey: 0,
    }

    handleModalClose = () => {
        this.setState({
            openModal: false,
            project: {},
        })
    }

    render() {
        const { classes } = this.props;
        const {
            mainHeading,
            displayCenter,
            underlineStyle,
            image,
            description,
        } = classes;
        const {
            openModal,
            project,
            customKey,
        } = this.state;

        return (
            <>
                <div className={displayCenter} id="projects">
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
                                    <Paper style={{ marginRight: 30, borderRadius: 15, cursor: "pointer" }} onClick={() => {
                                        this.setState({
                                            openModal: true,
                                            project,
                                            customKey: new Date(),
                                        })
                                    }}>
                                        <img src={project.img} alt={index} className={image} draggable={false} />
                                        <Typography className={description}>
                                            {project.description}
                                        </Typography>
                                    </Paper>
                                )
                            })
                        }
                        responsive={responsive}
                        disableButtonsControls
                    />
                    {openModal && <ProjectsDialog
                        handleModalClose={this.handleModalClose}
                        images={project.images}
                        description={project.description}
                        detailedDescription={project.detailedDescription}
                        link={project.link}
                        link2={project.link2}
                        key={customKey}
                    />}
                </Container>
            </>
        );
    }
}

const projects = [
    {
        img: "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/PCMD/PCMD1_UMvPmUC9i.png",
        images: [
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/PCMD/PCMD1_UMvPmUC9i.png?tr=w-1200,h-630,fo-auto",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/PCMD/PCMD2_tn-ciMcYiT1.png?tr=w-1200,h-630,fo-auto",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/PCMD/PCMD3_2inJeFLUO.png?tr=w-1200,h-630,fo-auto",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/PCMD/PCMD4_DO2vv8db2Ef.png?tr=w-1200,h-630,fo-auto",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/PCMD/PCMD5_N-tises4CZ.png?tr=w-1200,h-630,fo-auto",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/PCMD/PCMD6_ock0OzR-hp.png?tr=w-1200,h-630,fo-auto",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/PCMD/PCMD7_fa8Mbl7HuDdD.png?tr=w-1200,h-630,fo-auto",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/PCMD/PCMD8_sMkvE0re9.png?tr=w-1200,h-630,fo-auto",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/PCMD/PCMD9_uHzY0nqHVBz.png?tr=w-1200,h-630,fo-auto",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/PCMD/PCMD10_5jVPbuUtL.png?tr=w-1200,h-630,fo-auto",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/PCMD/PCMD11_xkFzGQNBqxo.png?tr=w-1200,h-630,fo-auto",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/PCMD/PCMD12_eI3gpe1de.png?tr=w-1200,h-630,fo-auto",
        ],
        description: `
            PCMD Laboratory Information System
        `,
        modal: true,
        detailedDescription: <>
            This is my final year project developed for PCMD Labs.
            <br />
            It is a laboratory information/management system built using ReactJS, NodeJS and MongoDB.
            <br />
            This system consists of the following features.
            <ul>
                <li>
                    Patient Registration
                </li>
                <li>
                    18 Different Departments
                </li>
                <li>
                    Role Based Authentication
                </li>
                <li>
                    SMS-Based Authentication for Patients
                </li>
                <li>
                    Test Additions/Deletion/Updation
                </li>
                <li>
                    Complex Test Parameters Addition based on Gender and Age of Patients
                </li>
                <li>
                    Dynamic Test Result values depending upon the Gender and Age of Patients
                </li>
                <li>
                    Panel System for Corporate Patients
                </li>
                <li>
                    Corporate and Collection Points Addition/Deletion
                </li>
                <li>
                    Complete System Wide Activity Log with Date/Time and Filteration
                </li>
                <li>
                    Complete Notification System
                </li>
                <li>
                    Complete Reporting of all 18 Departments
                </li>
                <li>
                    Dynamic User Roles
                </li>
                <li>
                    Accounts Management basic system with High Level Filteration
                </li>
                <li>
                    Online Portal for Pateints to view their Reports.
                </li>
            </ul>
            Demo Link: On Request
        </>
    },
    {
        img: "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Fatima_Portfolio/Project1_1__uKfGaY2FpSt.png",
        images: [
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Fatima_Portfolio/Project1_1__uKfGaY2FpSt.png?tr=w-1200,h-630,fo-auto",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Fatima_Portfolio/Screenshot_vbJ-WNk5j.png?tr=w-1200,h-630,fo-auto",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Fatima_Portfolio/2_twimz0de03LS.png?tr=w-1200,h-630,fo-auto",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Fatima_Portfolio/3_QWo61FK6ZJpk.png?tr=w-1200,h-630,fo-auto",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Fatima_Portfolio/4_-tLOqTThj.png?tr=w-1200,h-630,fo-auto",
        ],
        description: `
            Fatima Khalid
        `,
        detailedDescription:
            <>
                Fatima Khalid Portfolio built using ReactJS and implemented CDN for images and videos.
            </>,
        link: "https://fathymakhalid.com"
    },
    {
        img: "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Giverpays/Project2_-Bbor1XTfZ9.png",
        images: [
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Giverpays/Project2_-Bbor1XTfZ9.png?tr=w-1200,h-630,fo-auto",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Giverpays/2_1__fUrLrrLvF6ty.png?tr=w-1200,h-630,fo-auto",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Giverpays/Screenshot_1__BPn1ilzfP.png?tr=w-1200,h-630,fo-auto",
        ],
        description: `
            Giverpays Consultancy
        `,
        detailedDescription:
            <>
                Consultancy Website created for Giverpays Ltd.
                <br />
                Built Using ReactJS
            </>,
        link: "https://giverpays.com/"
    },
    {
        img: "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Computer_Store/1_R5ohGsH7SqKr.png",
        images: [
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Computer_Store/1_R5ohGsH7SqKr.png",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Computer_Store/2_AypxRijku9d.png",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Computer_Store/3_Ko9eRbX8g.png",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Computer_Store/4_xYxZRJqBELQ.png",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Computer_Store/5_FSqbGozOw.png",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Computer_Store/6_1CYY0nh8Z.png",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Computer_Store/7_NaqoF6NxRYK.png",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Computer_Store/8_NeF13Ja17n.png",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Computer_Store/9_aJtNP5Yqzy.png",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Computer_Store/10_mWEy6oHawNz.png",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Computer_Store/11_3NJPMd5Vi.png",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Computer_Store/12_bccOExKvN-Dr.png",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Computer_Store/13_jg4Y_bxnK.png",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Computer_Store/14_Fr7sESDaMX.png",
            "https://ik.imagekit.io/fathimakhalid/Hamza_Portfolio/Computer_Store/15_geTtPnRLUiLj.png",
        ],
        description: `
            Single Vendor E-Commerce Computer Store
        `,
        detailedDescription:
            <>
                This was my 6th semester's final project.
                <br />
                It's a complete E-Commerce Store with Payment Integration using Stripe. Frontend built on ReactJS and Backend on NodeJS
                <br />
                This system consists of the following features.
                <ul>
                    <li>
                        Custom Login/Signup with E*Mail verification and hashing and salting for security
                    </li>
                    <li>
                        Full catalog of items to choose from.
                    </li>
                    <li>
                        Shopping cart
                    </li>
                    <li>
                        Review system on items
                    </li>
                    <li>
                        Sophisticated search model, can search with various item name, item types and brand names
                    </li>
                    <li>
                        Full stock system on items. Will decrease with every purchase.
                    </li>
                    <li>
                        Full notification system to notify moderators and admins if product is out of stock. If product is reported. If product is missing.
                    </li>
                    <li>
                        Put an item to sell. Dynamic system no changes in code will be required.
                    </li>
                    <li>
                        Admin panel to manage products. Add products, remove products, put an item to sell, add moderators, remove false reviews, view reported products etc etc
                    </li>
                    <li>
                        Flash sales system
                    </li>
                    <li>
                        Online purchasing
                    </li>
                </ul>
            </>,
        link: "https://computer-store-264522.firebaseapp.com/",
        link2: "https://github.com/Hamza91able/computer-store",
    }
]

export default withStyles(styles)(Projects);
