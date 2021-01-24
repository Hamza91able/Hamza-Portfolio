import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';

import "./General.css";
import Logo from '../Assets/Images/Hamza Khan.png'

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
        backgroundColor: "white",
        boxShadow: "none",
        color: "#1a1a1a",
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    link: {
        textDecoration: "none",
        color: "white",
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function MobileMenu(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton onClick={handleClickOpen}>
                <MenuIcon style={{ color: "#FFFFFF" }} />
            </IconButton>
            <Dialog className="mobile-menu" fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon style={{ color: "white" }} />
                        </IconButton>
                        <img src={Logo} alt="logo" style={{
                            width: 100,
                            position: "absolute",
                            right: 30,
                        }} />
                    </Toolbar>
                </AppBar>
                <List>
                    <a href="#home" className={classes.link}>
                        <ListItem button onClick={e => { handleClose(); }}>
                            <ListItemText primary="Profile" />
                        </ListItem>
                    </a>
                    <Divider />
                    <a href="#skills" className={classes.link}>
                        <ListItem button onClick={e => { handleClose(); }}>
                            <ListItemText primary="Skills" />
                        </ListItem>
                    </a>
                    <Divider />
                    <a href="#education" className={classes.link}>
                        <ListItem button onClick={e => { handleClose(); }}>
                            <ListItemText primary="Education" />
                        </ListItem>
                    </a>
                    <Divider />
                    <a href="#experience" className={classes.link}>
                        <ListItem button onClick={e => { handleClose(); }}>
                            <ListItemText primary="Experience" />
                        </ListItem>
                    </a>
                    <Divider />
                    <a href="#proficiency" className={classes.link}>
                        <ListItem button onClick={e => { handleClose(); }}>
                            <ListItemText primary="Proficiency" />
                        </ListItem>
                    </a>
                    <Divider />
                    <a href="#projects" className={classes.link}>
                        <ListItem button onClick={e => { handleClose(); }}>
                            <ListItemText primary="Projects" />
                        </ListItem>
                    </a>
                </List>
            </Dialog>
        </div>
    );
}

export default withRouter(MobileMenu)
