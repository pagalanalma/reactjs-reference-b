import React, { Component } from 'react';
import FormAssetFields from './ApplicationFormCompanyAssetsFields';
import FormLiabilityFields from './ApplicationFormCompanyLiabilityFields';

class ApplicationFormCompany extends Component {

    constructor(props) {
        super(props)
    
        this.AssetRef = React.createRef();
    }
    
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    previous = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    cloneAssetsElement = (e) => {
        const { assets } = this.props.values
        let newObj = assets.push({asset_description: "", asset_value: ""});
        this.setState({ assets: newObj});
    }

    cloneLiabilityElement = () => {
        const { liabilities } = this.props.values
        let newObj = liabilities.push({liability_description: "", liability_value: ""});
        this.setState({ liabilities: newObj});
    }

    render() {
        const { values, handleChange } = this.props

        const inputStyle = {
            border: "1px solid red"
        }

        return (
            <section>
                <div className="parent">
                    <div className="child"></div>
                    <div className="child is-page">
                        <div className="application">
                            <form>
                                <div className="application__step-number">
                                    <h3 className="step">step 3 <small>of</small> 4</h3>
                                </div>
                                <div className="application__step-title">
                                    <h1>company details</h1>
                                </div>
                                <div className="top-text">
                                    <div>Please enter the company details and asset/liability information for the individual seeking the loan.</div>
                                </div>
                                <div className="application__input">
                                    <div>
                                        <div className="application__input__field">
                                            <label>company name</label>
                                            {values.formValid === true && values.formErrorsCompany.company_name !== true? 
                                                <input 
                                                    type="text"
                                                    value={values.company_name}
                                                    onChange={handleChange('company_name')}
                                                    style={inputStyle}
                                                />  
                                            : 
                                                <input 
                                                    type="text"
                                                    value={values.company_name}
                                                    onChange={handleChange('company_name')}
                                                />  
                                            }
                                            
                                        </div>
                                        <div className="application__input__field">
                                            <label>ACN</label>
                                            {values.formValid === true && values.formErrorsCompany.company_acn !== true? 
                                                <input 
                                                    type="text"
                                                    value={values.company_acn}
                                                    onChange={handleChange('company_acn')}
                                                    style={inputStyle}
                                                />
                                            :
                                                <input 
                                                    type="text"
                                                    value={values.company_acn}
                                                    onChange={handleChange('company_acn')}
                                                />
                                            }
                                            
                                        </div>
                                    </div>
                                    <div className="application__input__field">
                                        <label>company address</label>
                                        {values.formValid === true && values.formErrorsCompany.company_address !== true? 
                                            <input 
                                                type="text"
                                                value={values.company_address}
                                                onChange={handleChange('company_address')}
                                                style={inputStyle}
                                            />
                                        : 
                                            <input 
                                                type="text"
                                                value={values.company_address}
                                                onChange={handleChange('company_address')}
                                            />
                                        }

                                        
                                    </div>
                                    <br/><h3>Assets</h3>
                                    
                                    
                                    {   
                                        values.assets.map((input, key) => (
                                            <FormAssetFields key={key} keyValue={key} input={input} {...this.props} />
                                        ))
                                        
                                    }

                                    <div className="application__button__field">
                                        <span className="auto-currency" onClick={this.cloneAssetsElement}>+ Add another asset</span>
                                    </div>
                                    <br/>
                                    <h3>Liabilities</h3>
                                    {   
                                        values.liabilities.map((input, key) => (
                                            <FormLiabilityFields key={key} keyValue={key} input={input} {...this.props} />
                                        ))
                                        
                                    }
                                    <div className="application__button__field">
                                        <span className="auto-currency" onClick={this.cloneLiabilityElement}>+ Add another liability</span>
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
                                        <div className="is-done">
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
                            </form>
                        </div>
                    </div>
                    </div>
            </section>
        )
    }
}

export default ApplicationFormCompany;
