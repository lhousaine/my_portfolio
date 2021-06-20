import React from 'react';
import { List, ListItem, ListItemText, makeStyles, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    workExperiences: {
        backgroundColor: '#FBFBFB',
        borderRadius: '20px',
        color: '201A23',
        padding: '5px'
    },
    works: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    work: {
        margin: 10+'px',
        width: '40%',
        padding: '3%',
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
        fontSize: '25px',
        padding: 0,
    },
    tool: {
        color: '#fff',
        backgroundColor: '#52ACFF',
        backgroundImage: "linear-gradient('180deg', '#52ACFF 25%', '#FFE32C 100%')",
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
        <Box className={classes.workExperiences}>
            <Typography variant='h1' component='h2' className={classes.title}>
                Work and Experiences
            </Typography>
            <Box className={classes.works}>
                {
                    works && works.map((item) => {
                        return (
                                <Box className={classes.work}>
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
                        )
                    })
                }
            </Box>
        </Box>
    )
}