import React, { Component } from 'react';

export default class ContactMe extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="contact" className="contactMe">
                <div className="row">
                    <div>
                        <p className="lead">
                            Feel free to contact me for any work or suggestions below
</p>
                    </div>
                </div>
                <div className="row">
                    <aside>
                        <div>
                               {
                                    resumeData.contacts && resumeData.contacts.map(item => {
                                        return (
                                            <li key={item.name}>
                                                <span>{item.name}: </span>
                                                <a href={item.url} target="">
                                                    <span>{  item.userId }</span>
                                                </a>
                                            </li>
                                        )
                                    }
                                    )
                                }
                        </div>
                    </aside>
                </div>
            </section>
        );
    }
}