import React from 'react';
import { Back } from './buttonNavigation';


const TermsCommitmentFee = props => {

    const onSubmit = e => {
        e.preventDefault();
        props.nextStep();
    }

    return (
        <section>
            <div class="parent">
                <div class="child"></div>
                <div class="child is-page">
                    <div class="application">
                        <form>
                            <div class="application__step-number">
                                <h3>step 2 of 2</h3>
                            </div>
                            <div class="application__step-title">
                                <h1>Pay Commitment Fee</h1>
                                <p>
                                    Complete your payment of <span>$7,000 </span>
                                    to commence due diligence.
                                </p>
                            </div>
                            <div class="blank"></div>
                            <div class="bottom">
                                <div class="application__progress-indicator">
                                    <div class="is-done">
                                        <div class="circle"></div>
                                    </div>
                                    <div class="is-done">
                                        <div class="line"></div>
                                        <div class="circle"></div>
                                    </div>
                                </div>
                                <div className="application__button">
                                    <Back prevStep={props.prevStep} />
                                    <div className="application__button">
                                        <button 
                                            className="application__button__default" 
                                            type="submit"
                                            onClick={onSubmit}    
                                        >
                                            pay & submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TermsCommitmentFee;
