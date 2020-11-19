import React, { Component } from 'react';
export default class Resume extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="resume" className="resume">
                <div className="education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {
                            resumeData.education && resumeData.education.map((item) => {
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
                <div className="works">
                    <div className="three columns header-col">
                        <h1><span>Work and Experinces</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {
                            resumeData.work && resumeData.work.map((item) => {
                                return (
                                    <div className="row item">
                                        <div className="twelve columns">
                                            <h3>{item.CompanyName}</h3>
                                            <p className="info">
                                                {item.specialization}
                                                <span>&bull;</span> <em className="date">{item.MonthOfLeaving} - {item.YearOfLeaving}</em></p>
                                            <p>
                                                <h4>{item.theme}</h4>
                                                <ul className="achievements">
                                                    {
                                                        item.Achievements && item.Achievements.map((item) => {
                                                            return (
                                                                <li>{item}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                                {item.Tools?<h4>Tools :</h4>:""}
                                                <ul className="tools">
                                                    {
                                                        item.Tools && item.Tools.map((item) => {
                                                            return (
                                                                <li>{item}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="skills">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="bars">
                            <ul className="skills">
                                {
                                    resumeData.skills && resumeData.skills.map((item) => {
                                        return (
                                            <li>
                                                <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                                                </span><em>{item.skillname}</em>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}