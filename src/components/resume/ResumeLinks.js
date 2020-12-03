import React from 'react';
import Typography from '@material-ui/core/Typography';


export default function ResumeLink() {
    return (
        <div className="resume-links">
            <a href={process.env.PUBLIC_URL + '/resume_LhoussaineOUARHOU.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className="inactiveLink">
                <Typography variant="h3" gutterBottom>
                    Download Resume :
                    </Typography>
            </a>

            <a href={process.env.PUBLIC_URL + '/cv_LhoussaineOUARHOU.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className="activeLink">
                <Typography variant="h4" gutterBottom>
                    French Version
                    </Typography>
            </a>
            <a href={process.env.PUBLIC_URL + '/resume_LhoussaineOUARHOU.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className="activeLink">
                <Typography variant="h4" gutterBottom>
                    English Version
                    </Typography>
            </a>
        </div>
    )
}