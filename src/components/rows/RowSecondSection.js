/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const RowSecondSection = () => {
    return (
        <section className="landingpage">
            <div className="image"> </div>
            <div className="content">
                <h2>Get the money you need, <br/> pronto</h2>
                <p>As your partner in growth, we seek to understand your unique situation and create a solution tailored for you.</p>
                <p>Fill out our 4 step application form and be conditionally approved for your loan within minutes.</p>
                <Link className="button" to="/apply-now">apply now</Link>
            </div>
        </section>
    )
}

export default RowSecondSection;
