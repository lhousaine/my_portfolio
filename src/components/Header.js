import { Grid, Link, List, ListItem, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    header: {
        width: '100%',
        backgroundColor: '#203040',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem'
    },
    links:{
        display:'flex',
        flexDirection: 'row',
    },
    link:{
        display: 'inline-block',
        justifyContent: 'space-between',
        color: '#ffffff',
        textDecoration: 'none',
        padding: '1rem',
        '&:hover': {
            color:  '#f1951c',
            textDecoration: 'none'
        },
    },
});

export default function Header() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <header className={classes.header} id="home">
                <Grid>
                    <List className={classes.links}>
                        <ListItem className="current">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */} 
                            <Link className={classes.link} href="#">Home</Link>
                        </ListItem>
                        <ListItem>
                            <Link className={classes.link} href="#about">About</Link>
                        </ListItem>
                        <ListItem>
                            <Link className={classes.link} href="#resume">Resume</Link>
                        </ListItem>
                        <ListItem>
                            <Link className={classes.link} href="#portfolio">Works</Link>
                        </ListItem>
                        <ListItem>
                            <Link className={classes.link} href="#contact">Contact</Link>
                        </ListItem>
                    </List>
                </Grid>
            </header>
        </React.Fragment >
    );
}