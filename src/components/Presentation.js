import React, { Component } from 'react';

export default class Presentation extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
             <section id="presentation" className="presentation">
                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">I am {resumeData.name}.</h1>
                            <h3 style={{ color: '#fff', fontFamily: 'sans-serif' }}>I am a {resumeData.role}.{resumeData.roleDescription}
                            </h3>
                            <ul className="social">
                                {
                                    resumeData.socialLinks && resumeData.socialLinks.map(item => {
                                        return (
                                            <li key={item.name}>
                                                <a href={item.url} target="">
                                                    <i className={item.className}>{item.name}:   </i>
                                                    <i className={item.className}>{  item.url  }</i>
                                                </a>
                                            </li>
                                        )
                                    }
                                    )
                                }
                            </ul>
                        </div>
                    </div>
            </section>
        );
    }
}