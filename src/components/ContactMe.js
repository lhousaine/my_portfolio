import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 1000,
    },
});

export default function ContactMe(props) {
    const classes = useStyles();

    let resumeData = props.resumeData;
    const contactIcon = (contactName) => {
        switch (contactName) {

            case "linkedIn": return <LinkedInIcon color="secondary" fontSize="large" />;
            case "github": return <GitHubIcon color="secondary" fontSize="large" />;
            case "gmail": return <EmailIcon color="secondary" fontSize="large" />;
            case "phoneNumber": return <PhoneIcon color="secondary" fontSize="large" />;
            case "upWork": return <h4 style={{display: 'inline', color: "#ff2873"}}>UPW</h4>;
            default: return <h1> </h1>
        }
    }
    return (
        <section id="contact" className="contactMe">
            <div className={classes.root}>
                <Typography variant="h4" gutterBottom>
                    Feel free to contact me for any work or suggestions below:
                </Typography>
            </div>
            <div>
                <aside>
                    <ul className="contacts">
                        {
                            resumeData.contacts && resumeData.contacts.map(item => {
                                return (
                                    <li key={item.name}>
                                        <a className="contact" href={item.url} rel="noopener noreferrer" target="_blank">
                                        <span>  {contactIcon(item.name)}   </span>
                                            <span>{item.userId}</span>
                                        </a>
                                    </li>
                                )
                            }
                            )
                        }
                    </ul>
                </aside>
            </div>
        </section>
    );
}