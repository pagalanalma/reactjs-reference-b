import React, { Component } from 'react'
import FormContactUs from './ContactUsForm';
import contactService from '../../_services/contactService';
import '../../assets/hs.js';

class ContactUs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            phone_number: "",
            address: "",
            formValid: false,
            buttonValue: false,

            formErrorsContact: {
                firstname: null,
                lastname: null,
                email: null,
                phone_number: null,
                address: null,                
            },
        }

        this.handleChange = this.handleChange.bind(this);
        this.sendMail = this.sendMail.bind(this);
    }

    nextStep = () => {
        const { formErrorsContact } = this.state;
        if (formErrorsContact.firstname != null && formErrorsContact.lastname != null 
            && formErrorsContact.email != null && formErrorsContact.phone_number != null) 
        {
            this.setState({ formValid: false })
            this.sendMail();
        } else {
            this.setState({ formValid: true });
        }
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => e => {
        e.preventDefault();
        const { value } = e.target;
        let formErrorsContact = this.state.formErrorsContact;
        let valid = true;
        
        switch(input) {
            // Form Personal
            case 'firstname':
                formErrorsContact.firstname = value.length > 0 && value.length < 3 ? "minimum 3 characters required" : valid;            
                break;
            case 'lastname':
                formErrorsContact.lastname = value.length > 0 && value.length < 3 ? "minimum 3 characters required" : valid;  
                break;
            case 'email':
                formErrorsContact.email = value.length > 0 && value.length < 3 ? "minimum 3 characters required" : valid;
                break;
            case 'phone_number':
                formErrorsContact.phone_number = value.length > 0 && value.length < 3 ? "minimum 3 characters required" : valid;
                break;
            case 'address':
                formErrorsContact.address = value.length > 0 && value.length < 3 ? "minimum 3 characters required" : valid;
                break;
        }

        this.setState({ [input] : value });
    }

    sendMail = async () => {
		const now = new Date;
		const utc_timestamp = Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() , 
			now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
        const current_page = window.location.href;
        const { firstname, lastname, email, phone_number } = this.state;
        const data = { firstname, lastname, email, "message" : phone_number, utc_timestamp, current_page }
        
        // Send mail using contact service
        contactService.SendMail(data);
        this.setState({ buttonValue: true })
    }

    render() {        
        const {  firstname, lastname, email, phone_number, address, formErrorsContact, formValid, buttonValue } = this.state
        const values = {  firstname, lastname, email, phone_number, address, formErrorsContact, formValid, buttonValue };
        
		return (
			<FormContactUs
				nextStep={this.nextStep}
				prevStep={this.prevStep}
				handleChange={this.handleChange}
                values={values}
			/>
		)
    }
}

export default ContactUs;
