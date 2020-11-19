import React, { Component } from 'react';

export default class About extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="about" className="about">
                    <div>
                        <img className="profile-pic" src={process.env.PUBLIC_URL+'/imgs/profile.jpg'} alt="My Profile Images" />
                    </div>
                    <div className="main-col">
                        <h2>About Me</h2>
                        <p>
                            {
                                resumeData.aboutme
                            }
                        </p>
                        <div className="row">
                            <div className="contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{resumeData.name}</span>
                                    <br></br>
                                    <span>
                                        {resumeData.address}
                                    </span>
                                    <br></br>
                                    <span>{resumeData.website}</span>
                                </p>
                            </div>
                        </div>
                    </div>
            </section>
        );
    }
}