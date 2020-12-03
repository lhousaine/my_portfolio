import React from 'react';

export default function Works(props) {
    let works = props.works;
    return (
        <div className="works">
            <div>
                <h1><span>Work and Experinces</span></h1>
            </div>
            <div className="nine columns main-col">
                {
                    works && works.map((item) => {
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
                                        {item.Tools ? <h4>Tools :</h4> : ""}
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
    )
}