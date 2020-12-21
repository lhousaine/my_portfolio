import { Box, List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    education: {
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
    formationDetails: {
        paddingLeft: '10px',
        '& .university':{
            fontWeight: 'bold',
            fontSize:'20px',
        }
    },
    achievement: {
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
});

export default function Education(props) {
    let education = props.education;
    const classes = useStyles();

    return (
        <Box className={classes.education}>
            <Typography variant='h1' component='h2' className={classes.title}>
                Education
            </Typography>
            <Box>
                {
                    education && education.map((item) => {
                        return (
                            <Box>
                                <Typography variant='h4' component='h4' color='primary'>
                                    {item.degree}
                                </Typography>
                                <Box className={classes.formationDetails}>
                                    <Typography className='university'>{item.UniversityName}</Typography>
                                    <Typography variant='h4' component='h4' className="date">{item.DateOfIntegrating} - {item.DateOfGraduating}</Typography>
                                    <Typography variant='h4' component='h4' className="info">
                                        {item.specialization}
                                    </Typography>

                                    <List>
                                        {
                                            item.Achievements && item.Achievements.map((item) => {
                                                return (
                                                    <ListItem variant='h2' className={classes.achievement}>
                                                        <ListItemText primary={item} />
                                                    </ListItem>
                                                )
                                            })
                                        }
                                    </List>
                                </Box>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}