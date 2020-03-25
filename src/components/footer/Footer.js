import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="columns">
                    <h2>Get started</h2>
                    <div className="line"></div>
                    <div className="inner-columns">
                        <div className="inner-column">
                            <div className="circle"></div>
                            <span>Identify how much you need to lend OR talk to our team of friendly advisors</span>
                        </div>
                        <div className="inner-column">
                            <div className="circle"></div>
                            <span>Be conditionally approved in minutes with our 4-step application form</span>
                        </div>
                        <div className="inner-column">
                            <div className="circle"></div>
                            <span>Receive approval within 24hrs, and your money within 5 business days</span>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <a className="button" href="/contact">speak to our team</a>
                    <Link className="button" to="/apply-now">apply now</Link>
                </div>
            </div>         

    </footer>
    )
}

export default Footer;
