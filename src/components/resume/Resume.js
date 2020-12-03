import React from 'react';

import Education from './Education';
import Works from './Works';
import Skills from './skills';
import ResumeLink from './ResumeLinks';

export default function Resume(props) {
    let resumeData = props.resumeData;
    return (
        <section id="resume" className="resume">
            <div className="resume-content">
                <Education education={resumeData.education} />
                <Works works={resumeData.work} />
                <Skills skills={resumeData.skills}/>
            </div>
            <ResumeLink/>
        </section>
    );
}
