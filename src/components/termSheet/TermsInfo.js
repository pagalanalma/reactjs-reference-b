import React from 'react';
import { Next } from "./buttonNavigation";


const TermsInfo = props => {

    return (
        <section>
            <div className="parent">
                <div className="child"></div>
                <div className="child is-page">
                    <div className="application">
                        <form>
                            <div className="application__step-title">
                                <h1>Congratulations, <span>John!</span> <br />You've been conditionally approved!</h1>
                                <p>
                                    As a partner in the growth of your business and wealth, we're happy to conditionally approve you for <strong>$10,000,000.</strong>
                                </p>
                                <p>To proceed with your application, simply: </p>
                                <label className="label">Review, accept and sign terms and conditions</label><br/>
                                <label className="label">Pay commitment fee</label>
                            </div>
                            <div className="bottom">
                                <div className="application__progress-indicator" />
                                <div className="application__button">
                                    <Next nextStep={props.nextStep} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TermsInfo;
