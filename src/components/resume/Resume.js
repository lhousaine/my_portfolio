import React from 'react';

import Education from './Education';
import Works from './Works';
import Skills from './skills';
import ResumeLink from './ResumeLinks';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    resume: {
        backgroundColor: '#8181bb',
        backgroundImage: 'linear-gradient(160deg, #8181bb 0%, #000000 100%)',
        color: '#010101',
    },
    eduSkills: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap:'nowrap',
        padding: '0 3%'
    },
    resumeContent:{
        "& > *":{
            margin: '3% 3%'
        }
    }
});
export default function Resume(props) {
    let resumeData = props.resumeData;
    const classes= useStyles();
    return (
        <section id="resume" className={classes.resume}>
            <Box className={classes.resumeContent}>
                <Works works={resumeData.work} />
                <Box className={classes.eduSkills}>
                <Education education={resumeData.education} />
                <Skills skills={resumeData.skills} />
                </Box>
            </Box>
            <ResumeLink/>
        </section>
    );
}
