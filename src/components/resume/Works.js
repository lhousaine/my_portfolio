import React from 'react';
import { List, ListItem, ListItemText, makeStyles, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    works: {
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
    specialization: {
        fontWeight: 'bold',
        fontSize: '20px',
    },
    achievement: {
        color: '#000',
        margin: '0 20px',
        fontWeight: 'bold',
        fontSize: '20px',
        padding: 0,
    },
    tool: {
        color: '#fff',
        backgroundColor: '#813273',
        marginTop: `5px`,
        fontWeight: 'bold',
        borderRadius: '10px',
        '&:hover': {
            background: '#fff',
            color: '#202020',
        },
    },
}));

export default function Works(props) {
    let works = props.works;
    const classes = useStyles();
    return (
        <Box className={classes.works}>
            <Typography variant='h1' component='h2' className={classes.title}>
                Work and Experiences
            </Typography>
            <Box>
                {
                    works && works.map((item) => {
                        return (
                            <Box>
                                <Box>
                                    <Typography variant='h3' component='h4' color='primary'>{item.CompanyName}</Typography>
                                    <Typography variant='p' className={classes.specialization}>
                                        {item.specialization}
                                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} - {item.YearOfLeaving}</em>
                                    </Typography>
                                    <Box>
                                        <Typography variant='h4' component='h4'><i>{item.theme}</i></Typography>
                                        <List component="nav" className={classes.list}>
                                            {
                                                item.Achievements && item.Achievements.map((item) => {
                                                    return (
                                                        <ListItem className={classes.achievement}>
                                                            <ListItemText primary={item} />
                                                        </ListItem>
                                                    )
                                                })
                                            }
                                        </List>
                                        {item.Tools ? <Typography variant='h3'><b>Tools :</b></Typography> : ""}
                                        <ul className="tools">
                                            {
                                                item.Tools && item.Tools.map((item) => {
                                                    return (
                                                        <ListItem variant='h3' className={classes.tool}>
                                                            <ListItemText primary={item} />
                                                        </ListItem>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </Box>
                                </Box>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}