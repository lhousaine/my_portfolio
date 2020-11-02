import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                <header id="home">
                    <div className="header-links">
                        <ul className="links">
                            <li className="current">
                                <a className="smoothscroll" href="#presentation">Home</a>
                            </li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#resume">Resume</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                            
                            <li><a className="smoothscroll" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </header>
            </React.Fragment >
        );
    }
}