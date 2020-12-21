import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    about: {
        backgroundColor: '#0F58F4',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
    },
    aboutChilds: {
        paddingRight: '10px'
    },
    aboutme: {
        fontFamily: "Times New Roman , Times, serif",
        paddingLeft: "20px",
        color:'#c9c9c9'
    },
    childElement: {
        paddingLeft: "20px",
        color:'#c9c9c9'
    } 
});

export default function About(props) {
    const {about, aboutChilds, aboutme, childElement } = useStyles();
    let resumeData = props.resumeData;

    return (
        <section id="about" className={about}>
            <Grid className={aboutChilds}>
                <img className="profile-pic" src={process.env.PUBLIC_URL + '/imgs/profile.jpg'} alt="My Profile Images" />
            </Grid>
            <Grid className={aboutChilds}>
                <Typography color="inherit" variant="h3" component="h2">
                    About Me
                </Typography>
                <Typography className={aboutme} variant="h4" component="p">
                    {
                        resumeData.aboutme
                    }
                </Typography>

                <Typography color="inherit" variant="h3" component="h2">
                    Contact Details
                </Typography>
                <Grid className={childElement}>
                    <Typography variant="h4" component="p">
                        {resumeData.name}
                    </Typography>
                    <Typography variant="h4" component="p">
                        {resumeData.address}
                    </Typography>

                    <Typography variant="h4" component="p">
                        {resumeData.phone_number}
                    </Typography>
                    <Typography variant="h4" component="p">
                        {resumeData.email}
                    </Typography>
                </Grid>
            </Grid>
        </section>
    );
}