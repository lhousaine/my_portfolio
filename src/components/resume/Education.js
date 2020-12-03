import React from 'react';

export default function Education(props) {
    let education = props.education;
    return (
        <div className="education">
            <div className="header-col">
                <h1>
                    <span>Education</span>
                </h1>
            </div>
            <div>
                {
                    education && education.map((item) => {
                        return (
                            <div className="row item">
                                <div className="twelve columns">
                                    <p><b>{item.degree}</b></p>
                                    <h3>{item.UniversityName}</h3>
                                    <p className="date">{item.DateOfIntegrating} - {item.DateOfGraduating}</p>
                                    <p className="info">
                                        {item.specialization}
                                    </p>
                                    <ul>
                                        {
                                            item.Achievements && item.Achievements.map((item) => {
                                                return (
                                                    <li>{item}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}