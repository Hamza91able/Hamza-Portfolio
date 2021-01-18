import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 20,
        borderRadius: 15,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#00BBF9',
    },
}))(LinearProgress);

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function CustomizedProgress(props) {
    const { level } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <BorderLinearProgress variant="determinate" value={level} />
        </div>
    );
}