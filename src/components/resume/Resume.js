import React from 'react';

import Education from './Education';
import Works from './Works';
import Skills from './skills';
import ResumeLink from './ResumeLinks';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    resume: {
        backgroundColor: '#00A5D0',
        color: '#010101',
    },
    resumeContent:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap:'nowrap'
    }
});
export default function Resume(props) {
    let resumeData = props.resumeData;
    const classes= useStyles();
    return (
        <section id="resume" className={classes.resume}>
            <Box className={classes.resumeContent}>
                <Education education={resumeData.education} />
                <Works works={resumeData.work} />
                <Skills skills={resumeData.skills} />
            </Box>
            <ResumeLink/>
        </section>
    );
}
