import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Box, makeStyles, Link } from '@material-ui/core';

const useStyles = makeStyles({
    resumeLinks: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        '& a': {
            display: 'block',
            width: '100%',
            textDecoration: 'none',
            textlign: 'center',
            color: '#a19a7b',
        }
    },
    inactiveLink: {
        pointerEvents: 'none',
        cursor: 'default',
        color: '#ffffff',
    },
    "@keyframes animateLink": {
        '0%': { color: '#ff8800' },
        '25%': { color: 'red' },
        '50%': { color: 'blue' },
        '75%': { color: '#103610' },
        '100%': { color: '#ffffff' },
    },
    activeLink: {
        animationName: '$animateLink',
        animationDuration: '5s',
        animationIterationCount: 'infinite'
    },
});

export default function ResumeLink() {
    const classes = useStyles();
    return (
        <Box className={classes.resumeLinks}>

            <Link href={process.env.PUBLIC_URL + '/resume_LhoussaineOUARHOU.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.inactiveLink}>
                <Typography variant="h3" gutterBottom>
                    Download Resume :
                </Typography>
            </Link>

            <Link href={process.env.PUBLIC_URL + '/cv_LhoussaineOUARHOU.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.activeLink}>
                <Typography variant="h4" gutterBottom>
                    French Version
                </Typography>
            </Link>

            <Link href={process.env.PUBLIC_URL + '/resume_LhoussaineOUARHOU.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.activeLink}>
                <Typography variant="h4" gutterBottom>
                    English Version
                </Typography>
            </Link>
        </Box>
    )
}