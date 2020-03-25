import React from 'react';


const TermsFinal = () => {

    const onDownload = e => {
        e.preventDefault();
        alert("You've clicked download button.");
    }

    return (
        <section>
            <div class="parent">
                <div class="child"></div>
                <div class="child is-page">
                    <div class="application">
                        <form>
                            <div class="application__step-title">
                                <h1>
                                    Thank you, <span>John!</span> <br />
                                    We will commence the final review of your
                                    application and be in touch shortly. 
                                </h1>
                                <p>
                                    We have received your commitment fee and will now commence due diligence
                                    on the information provided.
                                </p>
                                <p>
                                    You will receive an email receipt of payment and you can also download it below.
                                </p>
                                <p className="primary-button-container">
                                    <button 
                                        className="primary-button" 
                                        type="submit"
                                        onClick={onDownload}
                                    >
                                        
                                        download
                                    </button>
                                </p>
                                <p>
                                    If there is anything we can help with, please <span>chat </span>
                                    or <span>speak </span> with a member of our team.
                                </p>
                            </div>
                            <div class="blank"></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TermsFinal;
