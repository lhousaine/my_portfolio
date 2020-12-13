import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
   footer: {
    width: '100%',
    backgroundColor: '#203040',
    color: '#ffffff',
  },
});

export default function Footer(props) {
    const classes = useStyles;
    let resumeData = this.props.resumeData;
    return (
        <footer className={classes.footer}>
            <div>
                <div>
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