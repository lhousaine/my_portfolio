import React from 'react';

export default function Footer(props) {
    let resumeData = this.props.resumeData;
    return (
        <footer className="footer">
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        {
                            resumeData.socialLinks && resumeData.socialLinks.map((item) => {
                                return (
                                    <li>
                                        <a href={item.url}>
                                            <i className={item.className}>
                                                {item.name}
                                            </i>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div id="go-top">
                    <a title="Back to Top" href="#home">
                </a></div>
            </div>
        </footer>
    );
}