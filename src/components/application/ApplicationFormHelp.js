import React from 'react';
import '../../assets/hs.js';

const ApplicationFormHelp = props => {
    const next = (e) => {
        e.preventDefault();
        props.nextStep();
    }
		
	const { values, handleChange } = props;

	const inputStyle = {
		border: "1px solid red"
	}

	const inputStyleDefault = {
		border: "0px solid red"
	}
	
	let errorOnlabels_loan_type = values.formValid === true && values.formErrorsHelp.loan_type !== true ? 
		"application__input__field error-labels": "application__input__field";
	let errorOnlabels_term_loan_broker = values.formValid === true && values.formErrorsHelp.term_loan_broker  == null ? 
		"application__input__field error-labels": "application__input__field";
	let errorOnLabels_length_term = values.formValid === true && values.formErrorsHelp.length_term  == null ? 
		inputStyle: inputStyleDefault;

	return (
		<section>
			<div className="parent">
				<div className="child"></div>
				<div className="child is-page">
					<div className="application">
						<div className="application__step-number">
							<h3 className="step">step 1 <small>of</small> 4</h3>
						</div>
						<div className="application__step-title">
							<h1>How can we help?</h1>
							<p className="subtitle"></p>
						</div>
						<div className="application__input">
							<div className="form-block">
								<label className="radioQuestion">What type of loan are you after?</label>
								
								<div  className={errorOnlabels_loan_type}>
									<div className="form-group">
									
										{values.formValid === true && values.formErrorsHelp.loan_type !== true?
											<input
												type="radio"
												name="loan_type"
												id="radioTermLoan"
												value={1}
												onChange={handleChange('loan_type')}
												style={inputStyle}
											/> :
											<input
												type="radio"
												name="loan_type"
												id="radioTermLoan"
												value={1}
												onChange={handleChange('loan_type')}
												checked={(values.loan_type == 1) ? true : false}
											/>
										}
										
										{/* {values.formValid == true ? <span style={errors}> Required</span> : ""} */}
										<label htmlFor="radioTermLoan">Term Loan </label>
									</div>
									<div className="form-group">
										{values.formValid === true && values.formErrorsHelp.loan_type !== true?
											<input
												type="radio"
												name="loan_type"
												id="radioConstructionLoan"
												value={2}
												onChange={handleChange('loan_type')}
												style={inputStyle}
											/> :
											<input
												type="radio"
												name="loan_type"
												id="radioConstructionLoan"
												value={2}
												onChange={handleChange('loan_type')}
												checked={(values.loan_type == 2) ? true : false}
											/>
										}
										
										{/* {values.formValid == true ? <span style={errors}> Required</span> : ""} */}
										<label htmlFor="radioConstructionLoan">Construction Loan</label>
									</div>
									<div className="form-group"  >
										{values.formValid === true && values.formErrorsHelp.loan_type !== true?
											<input
												type="radio"
												name="loan_type"
												id="radioLineOfCredit"
												value={3}
												onChange={handleChange('loan_type')}
												style={inputStyle}
											/> :
											<input
												type="radio"
												name="loan_type"
												id="radioLineOfCredit"
												value={3}
												onChange={handleChange('loan_type')}
												checked={(values.loan_type == 3) ? true : false}
											/>
										}
										
										{/* {values.formValid == true ? <span style={errors}> Required</span> : ""} */}
										<label htmlFor="radioLineOfCredit">Line <span className="lowercase">of</span> credit</label>
									</div>
								</div>
								
							</div>

							<div className="form-block">
								<label className="radioQuestion">Are you submitting this application on someone else's behalf? </label>
								<div className={errorOnlabels_term_loan_broker}>
									<div className="form-group">
										{values.formValid === true && values.formErrorsHelp.term_loan_broker !== true?
											<input
												type="radio"
												name="type_term_loan_broker"
												id="radioTermLoanYes"
												value="1"
												onChange={handleChange('term_loan_broker')}
												style={inputStyle}
											/> :
											<input
												type="radio"
												name="type_term_loan_broker"
												id="radioTermLoanYes"
												value="1"
												onChange={handleChange('term_loan_broker')}
												checked={(values.term_loan_broker==1) ? true : false}
											/>
										}
										
										{/* {values.formValid == true ? <span style={errors}> Required</span> : ""} */}
										<label htmlFor="radioTermLoanYes">Yes</label>
									</div>
									<div className="form-group inline">
										{values.formValid === true && values.formErrorsHelp.term_loan_broker !== true?
											<input
												type="radio"
												name="type_term_loan_broker"
												id="radioTermLoanNo"
												value="2"
												onChange={handleChange('term_loan_broker')}
												style={inputStyle}
											/> :
											<input
												type="radio"
												name="type_term_loan_broker"
												id="radioTermLoanNo"
												value="2"
												onChange={handleChange('term_loan_broker')}
												checked={(values.term_loan_broker==2) ? true : false}
											/>
										}
										
										{/* {values.formValid == true ? <span style={errors}> Required</span> : ""} */}
										<label htmlFor="radioTermLoanNo">No</label>
									</div>
								</div>
								
							</div>

							{ values.term_loan_broker == 1 ?
								<div>
									<div className="application__input__field">
										<label>Your full name</label>
										{values.formValid === true && values.formErrorsPersonal.broker_name !== true?
											<input
												type="text"
												name="brokername"
												value={values.broker_name}
												onChange={handleChange('broker_name')}
												style={inputStyle}
											/> :
											<input
												type="text"
												name="brokername"
												value={values.broker_name}
												onChange={handleChange('broker_name')}
											/>
										}
										{/* {values.formValid == true ? <span style={errors}> Required</span> : ""} */}
										
									</div>
									<div className="application__input__field">
										<label>Your Company</label>
										{values.formValid === true && values.formErrorsPersonal.broker_company !== true?
											<input
												type="text"
												name="brokercompany"
												value={values.broker_company}
												onChange={handleChange('broker_company')}
												style={inputStyle}
											/> :
											<input
												type="text"
												name="brokercompany"
												value={values.broker_company}
												onChange={handleChange('broker_company')}
											/>
										}
										{/* {values.formValid == true ? <span style={errors}> Required</span> : ""} */}
										
									</div>
								</div>
							: <span></span>	
							}
							{ values.term_loan_broker == 1 ?
								<div>
									<div className="application__input__field">
										<label>Your Email address</label>
										{values.formValid === true && values.formErrorsPersonal.broker_email !== true?
											<input
												type="text"
												name="brokeremail"
												value={values.broker_email}
												onChange={handleChange('broker_email')}
												style={inputStyle}
											/> :
											<input
												type="text"
												name="brokeremail"
												value={values.broker_email}
												onChange={handleChange('broker_email')}
											/>
										}
										{/* {values.formValid == true ? <span style={errors}> Required</span> : ""} */}
										
									</div>
									<div className="application__input__field">
										<label>Your Contact Number</label>
										{values.formValid === true && values.formErrorsPersonal.broker_contact !== true?
											<input
												type="text"
												name="brokercontact"
												value={values.broker_contact}
												onChange={handleChange('broker_contact')}
												style={inputStyle}
											/> :
											<input
												type="text"
												name="brokercontact"
												value={values.broker_contact}
												onChange={handleChange('broker_contact')}
											/>
										}
										{/* {values.formValid == true ? <span style={errors}> Required</span> : ""} */}
										
									</div>
								</div>
							: <span></span>	
							}
							<div className="form__application">
								<div className="application__input__field">
									<label>Loan Amount</label>
									{values.formValid === true && values.formErrorsHelp.loan_amount !== true? 
										<input
											type="text"
											name="loanAmount"
											value={values.loan_amount}
											onChange={handleChange('loan_amount')}
											style={inputStyle}
											field_type="currency"
										/>
									:
										<input
											type="text"
											name="loanAmount"
											value={values.loan_amount}
											field_type="currency"
											onChange={handleChange('loan_amount')}
									/>
									}
								</div>
							</div>  
							<div className="application__input__field">
								<label>Length <span className="lowercase lowercase-label">of</span> term</label>
								{ /* values.formValid === true && values.formErrorsHelp.phone_number !== true? 
									<input
										type="text"
										name="phone_number"
										value={values.phone_number}
										onChange={handleChange('phone_number')}
										style={inputStyle}
									/>
								:
									<input
										type="text"
										name="phone_number"
										value={values.phone_number}
										onChange={handleChange('phone_number')}
									/>
								*/} 
								<div className="select select-fancy select-fancy-noimage" style={errorOnLabels_length_term} >
									<select name="length_term" value={values.length_term} onChange={handleChange('length_term')} >
										<option></option>
										<option value="3  months">3 months</option>
										<option value="6  months">6 months</option>
										<option value="9  months">9 months</option>
										<option value="12 months">12 months</option>
										<option value="18 months">18 months</option>
										<option value="24 months">24 months</option>
									</select>
								</div>
							</div>
						</div>
						<div className="bottom-text">
							<label className="radioQuestion"> UNSURE ON EXACTLY WHAT YOU NEED?</label>
								<div><a className="under-line" href="/contact">Chat with us today</a> to discuss the different pathways available.</div>
						</div>
						<div className="bottom">
							<div className="application__progress-indicator">
								<div className="is-done">
									<div className="circle"></div>
								</div>
								<div>
									<div className="line"></div>
									<div className="circle"></div>
								</div>
								<div>
									<div className="line"></div>
									<div className="circle"></div>
								</div>
								<div>
									<div className="line"></div>
									<div className="circle"></div>
								</div>
							</div>
							<div className="application__button">
								{/* <button 
									className="application__button__outline" 
									type="submit"
								>
									back
								</button> */}
								<button 
									className="application__button__default"
									type="submit"
									onClick={next}
								>
									next
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ApplicationFormHelp;
