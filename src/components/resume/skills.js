import React from 'react';
import { List, ListItem, ListItemText, makeStyles, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles({
    skills: {
        backgroundColor: '#FBFBFB',
        borderRadius: '20px',
        color: '201A23',
        display: 'flex',
        flexDirection: 'column',
        padding: '5px'
    },
    title: {
        color: '201A23',
        textAlign: 'center'
    },
    skill: {
        color: '#fff',
        backgroundColor: '#813273',
        marginTop: `5px`,
        borderRadius: '10px',
        '&:hover': {
            background: '#fff',
            color: '#202020',
        },
    },
});

export default function Skills(props) {
    const classes = useStyles();
    let skills = props.skills;
    return (
        <Box className={classes.skills}>
            <Typography variant='h1' component='h2' className={classes.title}>
                Skills
            </Typography>
            <Box>
                <List component="nav" className={classes.root}>
                    {
                        skills && skills.map((item) => {
                            return (
                                <ListItem variant='h3' className={classes.skill}>
                                    <ListItemText primary={item.skillname} />
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Box>
        </Box>
    )
}