import React, { Component } from 'react'
// import styled from 'styled-components';
import closeBtn from '../../assets/img/times-solid.png';
import axios from 'axios'
 import $ from 'jquery';
class ApplicationFormPersonal extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    previous = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
	
	
	
    render() {

        const { values, handleChange } = this.props

        const errors = {
            color: 'red'
        }

        const inputStyle = {
            border: "1px solid red"
        }


		const showBankStatementModal = (e) => {
			$('.modal-form').css('display','block');
			
		}
		const closeBankStatementModal = (e) => {
			$('.modal-form').css('display','none');
			
		}
		const submitBankStatementModal = (e) => {
			e.preventDefault();
			let BSName = $('#BSName').val();
			let BSClient = $('#BSClient').val();
			let BSPass = $('#BSPass').val();
			
            // .catch((err)=>console.log(err))
			const formData = new FormData();
			const formDataCredentials = {
				'institution' : BSName,
				'username': BSClient,
				'password': BSPass
				
				
			}

			
			formData.append('credentials', JSON.stringify(formDataCredentials) );
			console.log('submmit', BSName);
			 axios.post( "https://test.bankstatements.com.au/api/v1/", formData,{
				mode: 'no-cors',
				headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': 'YO4ONYORIUB17401YYOL4U2F5KGTUYZTXAZ4LFSM',
                    'Accept':	'application/json'
				}
			})
			.then(res => {
				alert('Success!');
				$('.modal-form').css('display','none');
			}).catch(err => {
				console.log(err);
				alert('Error Found upon submitting, please Please check your bank details and try it again');
			})			
			
		}
		
        return (
            <section>
                <div className="parent">
                    <div className="child"></div>
                    <div className="child is-page">
                        <div className="application">
                        
                            <div className="application__step-number">
                                <h3 className="step">step 2 <small>of</small> 4</h3>
                            </div>
                            <div className="application__step-title">
                                <h1>personal information</h1>
                            </div>


                            <div className="application__input">

                                <div className="top-text">
                                    <div>Please enter the personal information for the individual seeking the loan.</div>
                                </div>
                                    <div>
                                        <div className="application__input__field">
                                            <label>first name</label>
                                            {values.formValid === true && values.formErrorsPersonal.firstname !== true?
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
                                            {values.formValid === true && values.formErrorsPersonal.lastname !== true?
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
                                    <div className="application__input__field">
                                        <label>email address</label>
                                        {values.formValid === true && values.formErrorsPersonal.email !== true? 
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
                                    <div className="application__input__field">
                                        <label>phone number</label>
                                        {values.formValid === true && values.formErrorsPersonal.phone_number !== true? 
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
                                        }
                                        
                                    </div>
                                    <div className="application__input__field">
                                        <label>address</label>
                                        {values.formValid === true && values.formErrorsPersonal.address !== true? 
                                            <input
                                                type="text"
                                                name="address"
                                                value={values.address}
                                                onChange={handleChange('address')}
                                                style={inputStyle}
                                            />
                                        :
                                            <input
                                                type="text"
                                                name="address"
                                                value={values.address}
                                                onChange={handleChange('address')}
                                            />
                                        }
                                        
                                    </div>
                                     <div className="application__input__field">
                                        <label>comment</label>
                                        {values.formValid === true && values.formErrorsPersonal.comments !== true? 
                                            <input
                                                type="text"
                                                name="comments"
                                                value={values.comments}
                                                onChange={handleChange('comments')}
                                               // style={inputStyle}
                                            />
                                        :
                                            <input
                                                type="text"
                                                name="comments"
                                                value={values.comments}
                                                onChange={handleChange('comments')}
                                            />
                                        }
                                        
                                    </div>
                                     <div className="application__input__field">
										
										 <button
                                            className="btn btn-link bank-statements-button"
                                             onClick={showBankStatementModal}
                                        >
                                           Connect your Bank Statements
                                        </button>
                                        
                                    </div>
                                </div>
                                
                                <div className="bottom">
                                    <div className="application__progress-indicator">
                                        <div className="is-done">
                                            <div className="circle"></div>
                                        </div>
                                        <div className="is-done">
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
                                        <button 
                                            className="application__button__outline" 
                                            type="submit"
                                            onClick={this.previous}
                                        >
                                            back
                                        </button>
                                        <button 
                                            className="application__button__default"
                                            type="submit"
                                            onClick={this.continue}
                                        >
                                            next
                                        </button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
				<div className="modal-bank-statement">
					<div id="myModal" className="modal-form">
					  <div >
					  
							<div className="modal-dialog" role="document">
							  <div className="modal-content">
								<div className="modal-header text-center">
								  <h4 className="modal-title w-100 font-weight-bold">Bank Statements </h4>
								  <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeBankStatementModal}>
								
									<img src={closeBtn}/>
								  </button>
								</div>
								<div className="modal-body mx-3">

								  <div className="md-form mb-4">
									<p>Bank</p>
									<input type="text"  id="BSName" className="form-control validate" />
								  </div>

								  <div className="md-form mb-4">
									<p>{"Client Number"}</p>
									<input type="text" id="BSClient"className="form-control validate" />
								  </div>

								  <div className="md-form mb-4">
									<p>{"Password"}</p>
									<input type="password" id="BSPass" className="form-control validate" />
								  </div>

								</div>
								<div className="modal-footer d-flex justify-content-center">
								  <button className="btn btn-default waves-effect waves-light" onClick={submitBankStatementModal}>Submit</button>
								</div>
							  </div>
							</div>

					  </div>

					</div>
				</div>
            </section>
        )
    }
}

export default ApplicationFormPersonal
