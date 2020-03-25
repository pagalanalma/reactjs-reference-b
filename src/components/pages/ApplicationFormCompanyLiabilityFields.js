import React, { Component } from 'react'

export class ApplicationFormCompanyLiabilityFields extends Component {
    render() {

        const {values, handleChange, input, keyValue, handleLiabilityChange} = this.props

        return (
            
            <div className="LiabilityContainer">
                <div className="application__input__field Liabilities">
                     
                     <p>Liability Description</p>
                    <input 
                        type="text"
                        name={input.name_description}
                         value={input.liability_description}
                        onChange={handleLiabilityChange(keyValue, 'liability_description')}
                    />  
                    
                </div>
                <div className="application__input__field Liabilities">
                    
                    <p>Liability Value</p>
                    <input 
                        type="text"
                        name={input.name_value}
                         value={input.liability_value}
						 field_type="currency"
                        onChange={handleLiabilityChange(keyValue, 'liability_value')}
                    /> 
                    
                </div>
            </div>
        )
    }
}

export default ApplicationFormCompanyLiabilityFields
