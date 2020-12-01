import React from 'react';

export default function Header() {
    return (
        <React.Fragment>
            <header id="home">
                <div className="header-links">
                    <ul className="links">
                        <li className="current">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#resume">Resume</a>
                        </li>
                        <li>
                            <a href="#portfolio">Works</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </header>
        </React.Fragment >
    );
}