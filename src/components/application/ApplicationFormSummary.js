import React, { Component } from 'react';
import { ScaleLoader } from "react-spinners";
import { css } from "@emotion/core";

class ApplicationFormSummary extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    previous = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    backCompanyDetails = (e) => {
        e.preventDefault();
        this.props.stepCompanyDetails();
    }

	backPersonalDetails = (e) => {
        e.preventDefault();
        this.props.stepPersonalDetails();
    }
	

	backHelpDetails = (e) => {
        e.preventDefault();
        this.props.stepHelpDetails();
    }
	
    render() {
		var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
		});
        const loaderStyle = {
            width: "100%",
            height: "100%",
            top: "0",
            padding: "0",
            margin: "0",
            background: "#00000075",
            display: "block",
            position: "fixed",
            zIndex: "9999"
        }

        const override = css`
            position: absolute;
            top: 40%;
            left: 50%;
        `;
        const { values, buttonValue, loading  } = this.props

        let createButton  = "",
            backButton = "";
        let loadingState = "";

        if(buttonValue === true) {
            loadingState = <div style={loaderStyle}>
                                <div className="sweet-loading">
                                    <ScaleLoader
                                        css={override}
                                        //size={80}
                                        height={70}
                                        margin={3}
                                        color={"#beeadf"}
                                        loading={loading}
                                    />
                                </div>
                            </div>
            createButton = <button 
                            type="button"
                            className="application__button__default"
                            disabled
                        >
                            {/* Creating <i className="fa fa-refresh fa-spin"></i> */}
                            Creating 
                        </button>
            backButton = <button 
                            className="application__button__outline" 
                            type="submit"
                            disabled
                        >
                            back
                        </button>
        } else {
            createButton = <button 
                            type="button"
                            className="application__button__default"
                            onClick={this.continue}
                        >
                            SUBMIT
                        </button>

            backButton = <button 
                            className="application__button__outline" 
                            type="submit"
                            onClick={this.previous}
                            >
                            back
                        </button>
        }
		let rows_assetname = [];
		let RowAssetNameData = values.assets;
		let RowAssetNameDataChecker= 0;
		let asset_value=0;
		for (var i = 0; i < RowAssetNameData.length ; i++) {
			if  ( RowAssetNameData[i]['asset_description'] !== "" ) {
					asset_value = RowAssetNameData[i]['asset_value'];
					asset_value = asset_value.replace(/[`~!$@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi, '');
					asset_value =  formatter.format(asset_value);
				rows_assetname.push(<p key={i}>
						{RowAssetNameData[i]['asset_description']}, valued at {asset_value}
						</p>)
				RowAssetNameDataChecker++;
			}
		} 
		if ( RowAssetNameDataChecker == 0) {
			rows_assetname.push(<p> ---No Data--- </p>)
		}
		let rows_liabilityname = [];
		
		let RowLiabilityNameDataChecker= 0;
		
		let RowLiabilityNameData = values.liabilities;
		let liability_value =0;
		for (var i = 0; i < RowLiabilityNameData.length ; i++) {
				
			if  ( RowLiabilityNameData[i]['liability_description'] !== "" ) {
					liability_value = RowLiabilityNameData[i]['liability_value'];
					liability_value = liability_value.replace(/[`~!$@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi, '');
					liability_value =  formatter.format(liability_value);
				rows_liabilityname.push(<p key={i}>
					
						{RowLiabilityNameData[i]['liability_description']}, valued at {liability_value}
						</p>)
				RowLiabilityNameDataChecker++;
			}
		} 

		if ( RowLiabilityNameDataChecker == 0) {
			rows_liabilityname.push(<p> ---No Data--- </p>)
		}
		
		let loan_amount = values.loan_amount;
			loan_amount = loan_amount.replace(/[`~!$@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi, '');
			loan_amount =  formatter.format(loan_amount);

        return (
            <section>
                <div className="parent">
                <div className="child"></div>
                <div className="child is-page">
                    <div className="application application-form-summary">
                        <form>
                            <div className="application__step-number">
                                
                            </div>
                            <div className="application__step-title">
                                <h1>Application summary</h1>
                            </div>
                            <div className="application__input" id="info">   
                            <div className="application__input__field">
                                    <h4>Application Details</h4>    
                                        <div className="application__button">
                                            <span className="summary-edit" onClick={this.backHelpDetails} >Edit</span>
                                        </div>
                                        <div className="content-field">
                                            <p>Term Loan of {loan_amount} over {values.length_term}</p>
											{ values.term_loan_broker == 1 ?
												<p>Applied for by {values.broker_name} on behalf of {values.firstname} {values.lastname}</p>
											: <span></span>
											}
                                        </div>       
                                    </div>  
                                <div className="application__input__field">
                                    <h4>Personal Information</h4>    
										<div className="application__button">
											<span className="summary-edit"  onClick={this.backPersonalDetails} >Edit</span>
										</div>
                                        <div className="content-field">
                                            <p>{values.firstname} {values.lastname}</p>
                                            <p>{values.email}</p>
                                            <p>{values.phone}</p>
                                            <p>{values.address} </p>
                                        </div>       
                                    </div>        
                                <div className="application__input__field">         
                                    <h4>Company Details</h4>   
										<div className="application__button">
											<span className="summary-edit"   onClick={this.backCompanyDetails} > Edit</span>
										</div>
                                        <div className="content-field">
                                            <p>{values.company_name}</p>
                                            <p>ACN {values.company_acn}</p>
                                        </div> 
                                </div>            
                                <div className="application__input__field">            
                                    <h4>Assets</h4>     
										<div className="application__button">
											<span className="summary-edit" onClick={this.backCompanyDetails} >Edit</span>
										</div> 
                                        <div className="content-field">
											{rows_assetname}
                                        </div> 
                                </div>            
                                <div className="application__input__field">          
                                    <h4>Liabilities</h4>     
										<div className="application__button">
											<span className="summary-edit" onClick={this.backCompanyDetails} >Edit</span>
										</div> 
                                        <div className="content-field">
											{rows_liabilityname}
                                        </div>    
                                </div>                            
                                {/* <div className="application__input__field"> <p>XXXXXXXXXXX,valued at $xx,xx,xxx</p>
                                    <label for="">personal information</label>
                                    <textarea name="" cols="30" rows="5"></textarea>
                                </div>
                                <div className="application__input__field">
                                    <label for="">company address</label>
                                    <textarea name="" cols="30" rows="5"></textarea>
                                </div>
                                <div className="application__input__field">
                                    <label for="">assets</label>
                                    <textarea name="" cols="30" rows="5"></textarea>
                                </div> */}
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
                                    <div className="is-done">
                                        <div className="line"></div>
                                        <div className="circle"></div>
                                    </div>
                                    <div className="is-done">
                                        <div className="line"></div>
                                        <div className="circle"></div>
                                    </div>
                                </div>
                                <div className="application__button">                                    
                                    {backButton}
                                    {createButton}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
                {loadingState}
				<div className="modal-spinner"></div>
            </section>
        )
    }
}

export default ApplicationFormSummary;
