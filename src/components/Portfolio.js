import React, { Component } from 'react';

export default class Porfolio extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="portfolio" className="portfolio">
                <div className="row">
                    <div className="title">Check Out Some of My Works.</div>
                    <div className="portfolio_works">
                        {
                            resumeData.portfolio && resumeData.portfolio.map((item) => {
                                return (
                                    <div className="portfolio-work">
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>{item.name}</h5>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                        <img src={process.env.PUBLIC_URL + item.imgurl} className="work_img" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        );
    }
}