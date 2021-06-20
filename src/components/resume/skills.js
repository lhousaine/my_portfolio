import React from 'react';
import { List, ListItem, ListItemText, makeStyles, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles({
    skills: {
        backgroundColor: '#FBFBFB',
        borderRadius: '20px',
        color: '201A23',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: '5px',
        margin: '2% 5%'
    },
    title: {
        color: '201A23',
        textAlign: 'center'
    },
    skill: {
        backgroundColor: '#52ACFF',
        backgroundImage: "linear-gradient('180deg', '#52ACFF 25%', '#FFE32C 100%')",
        color: '#fff',
       // backgroundColor: '#3edbf0',
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