import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    skills: {
        backgroundColor: '#7B17E5',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
    },
});

export default function Skills(props) {
    let skills = props.skills;
    return (
        <div className="skills">
            <div className="columns">
                <h1><span>Skills</span></h1>
            </div>
            <div>
                <div className="bars">
                    <ul className="skills">
                        {
                            skills && skills.map((item) => {
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
    )
}