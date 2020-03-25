import React from 'react'

const ContactUsForm = props => {
    const onsubmit = (e) => {
        e.preventDefault();
        props.nextStep();
    }

    const { values, handleChange, buttonValue } = props;

    const inputStyle = {
        border: "1px solid red"
    }

    return (
        <section className="section" id="contact-us-main-form">
            <div className="section__column section__column--image2"></div>
            <div className="section__column section__column--content">
                <h2>Speak with one  <br/>of our team today</h2> <br/>
                <div className="contact-form">
                    <h3>{"To begin your application, and for all other general inquiries, contact us at (02) 8277 4544"}<br/>{"or info@launchcap.com.au"}</h3>
                    <br/>
                        <div className="application__input">
                            <div>
                                <div className="application__input__field">
                                    <label>first name</label>
                                    {values.formValid === true && values.formErrorsContact.firstname !== true?
                                        <input
                                            type="text"
                                            name="firstname"
                                            value={values.firstname}
                                            onChange={handleChange('firstname')}
                                            style={inputStyle}
                                        /> :
                                        <input
                                            type="text"
                                            name="firstname"
                                            value={values.firstname}
                                            onChange={handleChange('firstname')}
                                        />
                                    }
                                    {/* {values.formValid == true ? <span style={errors}> Required</span> : ""} */}
                                    
                                </div>
                                <div className="application__input__field">
                                    <label>last name</label>
                                    {values.formValid === true && values.formErrorsContact.lastname !== true?
                                        <input 
                                            type="text"
                                            name="lastname"
                                            value={values.lastname}
                                            onChange={handleChange('lastname')}
                                            style={inputStyle}
                                        />
                                        : 
                                        <input 
                                            type="text"
                                            name="lastname"
                                            value={values.lastname}
                                            onChange={handleChange('lastname')}
                                        />
                                    }
                                    
                                    {/* {values.formValid == true ? <span style={errors}> Required</span> : ""} */}
                                </div>
                                
                            </div>
                            <div className="application__input__field"><br/>
                                <label>email address</label>
                                {values.formValid === true && values.formErrorsContact.email !== true? 
                                    <input
                                        type="text"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange('email')}
                                        style={inputStyle}
                                    />
                                :
                                    <input
                                        type="text"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange('email')}
                                    />
                                }
                                
                            </div> 
                            <div className="application__input__field"><br/>
                                <label>Message</label>
                                {values.formValid === true && values.formErrorsContact.phone_number !== true? 
                                    <textarea
                                        type="text"
                                        name="phone_number"
                                        value={values.phone_number}
                                        onChange={handleChange('phone_number')}
                                        style={inputStyle}
                                    >
                                        {values.phone_number}
                                    </textarea>
                                :
                                    <textarea
                                        type="text"
                                        name="phone_number"
                                        value={values.phone_number}
                                        onChange={handleChange('phone_number')}
                                    >
                                        {values.phone_number}
                                    </textarea>
                                }
                                
                            </div>
                        </div><br/><br/><br/><br/>
                        
                        <div className="bottom">
                            <div className="application__progress-indicator">
                            </div>
                            <div className="application__button">
                                {/* <button 
                                    className="application__button__outline" 
                                    type="submit"
                                >
                                    back
                                </button> */}
                                {buttonValue === true ? 
                                    <button 
                                        className="application__button__default"
                                        type="button"
                                        disabled
                                    >
                                        Creating...
                                    </button>
                                : 
                                    <button 
                                        className="application__button__default"
                                        type="button"
                                        onClick={onsubmit}
                                    >
                                        Submit
                                    </button>
                                }
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsForm;
