import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import { Grid, Link, List, ListItem } from '@material-ui/core';

const useStyles = makeStyles({
    contactMe: {
        backgroundColor: '#203040',
        color: 'white'
    },
    title: {
        textAlign: 'center'
    },
    contactContents: {
        padding: '0 40%'
    },
    contacts: {
        listStyleType: 'none'
    },
    contact: {
        textDecoration: 'solid',
        textDecorationLine: 'none',
        color: '#ffffff',
        fontSize: 'medium',
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
        fontStyle: 'inherit',
        display: 'flex',
        flexDirection: 'row'
    },
    icon: {
        color: "#ff2873",
        textAlign: 'center',
    },
    contactText:{
        marginLeft:'10%'
    }
});

export default function ContactMe(props) {
    const classes = useStyles();
    let resumeData = props.resumeData;
    const contactIcon = (contactName) => {
        switch (contactName) {
            case "linkedIn": return <LinkedInIcon className={classes.icon} color="secondary" fontSize="large" />;
            case "github": return <GitHubIcon className={classes.icon} color="secondary" fontSize="large" />;
            case "gmail": return <EmailIcon className={classes.icon} color="secondary" fontSize="large" />;
            case "phoneNumber": return <PhoneIcon className={classes.icon} color="secondary" fontSize="large" />;
            case "upWork": return <Typography className={classes.icon} variant="h3" component="h1" fontSize="large">uPw</Typography>;
            default: return <Typography> </Typography>
        }
    }
    return (
        <section id="contact" className={classes.contactMe}>
            <Grid className={classes.title}>
                <Typography variant="h3" gutterBottom>
                    Feel free to contact me for any work or suggestions below:
                </Typography>
            </Grid>
            <Grid className={classes.contactContents}>
                <List className={classes.contacts}>
                    {
                        resumeData.contacts && resumeData.contacts.map(item => {
                            return (
                                <ListItem key={item.name}>
                                    <Link className={classes.contact} href={item.url} rel="noopener noreferrer" target="_blank">
                                        {contactIcon(item.name)}
                                        <Typography className={classes.contactText} variant="h4" component="p">{item.userId}</Typography>
                                    </Link>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Grid>
        </section>
    );
}