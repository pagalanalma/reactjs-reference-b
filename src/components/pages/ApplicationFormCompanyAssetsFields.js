import React, { Component } from 'react'

export class ApplicationFormCompanyAssetsFields extends Component {

    render() {

        const {values, handleChange, input, handleAssetsChange, keyValue} = this.props

        return (
            <div className="AssetsContainer">
                                        
                <div className="application__input__field Assets">
                    
                    <p>Asset Description</p>
                    <input 
                        type="text"
                        name={input.name_description}
                        value={input.asset_description}
                        onChange={handleAssetsChange(keyValue, 'asset_description')}
                    />
                </div>
                <div className="application__input__field Assets">
                        
                        <p>Asset Value</p>
                    <input 
                        type="text"
                        name={input.name_value}
                         value={input.asset_value}
						field_type="currency"
                        onChange={handleAssetsChange(keyValue, 'asset_value')}
                    /> 
                    
                </div>                                        
            </div>
        )
    }
}

export default ApplicationFormCompanyAssetsFields
