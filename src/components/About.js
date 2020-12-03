import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    aboutme: {
        fontFamily: "Times New Roman , Times, serif",
        paddingLeft: "20px",
    },
    childElement: {
        paddingLeft: "20px",
    }
});

export default function About(props) {
    const { aboutme, childElement } = useStyles();
    let resumeData = props.resumeData;

    return (
        <section id="about" className="about">
            <div>
                <img className="profile-pic" src={process.env.PUBLIC_URL + '/imgs/profile.jpg'} alt="My Profile Images" />
            </div>
            <div>
                <Typography color="inherit" variant="h3" component="h2">
                    About Me
                </Typography>
                <Typography className={aboutme} color="inherit" variant="h4" component="p">
                    {
                        resumeData.aboutme
                    }
                </Typography>

                <Typography color="inherit" variant="h3" component="h2">
                    Contact Details
                    </Typography>
                <div className={childElement}>
                    <Typography variant="h5" component="p">
                        {resumeData.name}
                    </Typography>
                    <Typography variant="h5" component="p">
                        {resumeData.address}
                    </Typography>

                    <Typography variant="h5" component="p">
                        {resumeData.phone_number}
                    </Typography>
                    <Typography variant="h5" component="p">
                        {resumeData.email}
                    </Typography>
                </div>
            </div>
        </section>
    );
}