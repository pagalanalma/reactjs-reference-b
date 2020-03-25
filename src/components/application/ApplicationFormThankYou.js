import React from 'react';

const ApplicationFormHelp = props => {

    const { values } = props

    let firstname = values.term_loan_broker == 1 ? values.broker_name : values.firstname ;
        firstname = firstname.replace(/ .*/, '');
    return (
        <section>
            <div className="parent">
                <div className="child"></div>
                <div className="child is-page">
                    <div className="application">
                        <div className="application__step-number">
                        </div>
                        <div className="application__step-title">
                            <h1 className="text-inherit-transform" >
                                Thank you, 
                                <span className="text-color"> {firstname}!</span>
                                <br /> 
                                Your application has been  <br />received
                            </h1>
                            <p className="subtitle"> Our team will review your application and be in touch within 24 hours
                                <br />with next step. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ApplicationFormHelp;
