/* eslint-disable no-unused-expressions */
/* eslint-disable default-case */
import React, { Component } from 'react';
import FormHelp from '../application/ApplicationFormHelp';
import FormPersonal from './ApplicationFormPersonal';
import FormCompany from './ApplicationFormCompany';
import FormDocument from './ApplicationFormDocument';
import FormSummary from '../application/ApplicationFormSummary';
import FormThankYou from '../application/ApplicationFormThankYou';
import axios from 'axios';
import $ from 'jquery';
import '../../assets/hs.js';

// const formValidation = formErrors => {
//     let valid = true

//     Object.values(formErrors).forEach(val => {
//         val.length > 0 && (valid = false);
//     });

//     return valid;
// } 

class ApplicationForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            step: 1,
			loan_type: "",
			term_loan_broker: "",
			broker_name: "",
			broker_company: "",
			broker_email: "",
			broker_contact: "",
			loan_amount: "",
			length_term: "",

            firstname: "",
            lastname: "",
            email: "",
            phone_number: "",
            address: "",
			comments: "",
            company_name: "",
            company_acn: "",
            company_address: "",
            company_asset: "",
            company_liability: "",
            documents_asset: "",
            documents_liability: "",
            documents_identification: "",
            title: "",
            //dealID: 0,
            buttonValue: false,
            loading: false,
            images: [],

            assets: [
                {
                    asset_description: "",
                    asset_value: ""
                }
            ],

            liabilities: [
                {
                    liability_description: "",
                    liability_value: ""
                }
            ],

            formErrorsHelp: {
                loan_type: null,
				term_loan_broker: null,
				broker_name: null,
				broker_company: null,
				broker_email: null,
				broker_contact: null,
				loan_amount: null,
				length_term: null,         
            },

            formErrorsPersonal: {
                firstname: null,
                lastname: null,
                email: null,
                phone_number: null,
                address: null,  
                comments: null, 
            },

            formErrorsCompany: {
                company_name: null,
                company_acn: null,
                company_address: null,
                company_asset: null,
                company_liability: null
            },
            
            formErrorsDocument: {
                documents_asset: null,
                documents_liability: null,
                documents_identification: null,
            },

            formErrorsSummary: {
                title: null
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleOnFileChange = this.handleOnFileChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.createHubspotDeal = this.createHubspotDeal.bind(this)
        this.dealsFileUpload = this.dealsFileUpload.bind(this)
        
    }
    nextStep = (e) => {
        const { 
            step, formErrorsHelp, formErrorsPersonal, formErrorsCompany, formErrorsDocument, formErrorsSummary
        } = this.state

        switch(step) {
            case 1:
				
				let validation_proceed = 0;
				if (formErrorsHelp.term_loan_broker == null) {
					
					validation_proceed = 0;
				}
				if ( formErrorsHelp.term_loan_broker == 2 ) 
				{
					validation_proceed = 1;
				} else {
					
					if ( formErrorsHelp.broker_name !== null && formErrorsHelp.broker_company !== null && formErrorsHelp.broker_email !== null 
					&& formErrorsPersonal.broker_email !== false  && formErrorsHelp.broker_contact !== null ){
					
						validation_proceed = 1;
					}
				}
				
				
                if (validation_proceed == 1 && formErrorsHelp.loan_type !== null && formErrorsHelp.loan_amount !== null && formErrorsHelp.length_term !== null ) 
                {
					validation_proceed = 1;
                }else {
					validation_proceed = 0;
				}
				if (validation_proceed == 1) {
					this.setState({ step: step + 1, formValid: false })
				} else {
					this.setState({ formValid: true });
				}
				
                break;

            case 2:
                if (formErrorsPersonal.firstname != null  && formErrorsPersonal.email != null &&
				formErrorsPersonal.email !== false 
                && formErrorsPersonal.phone_number != null && formErrorsPersonal.address != null ) 
                {
                    this.setState({ step: step + 1, formValid: false })
                } else {
                    this.setState({ formValid: true });
                }
                break;
            case 3:
                if (formErrorsCompany.company_name != null && 
				formErrorsPersonal.company_acn !== false  &&
                formErrorsCompany.company_acn != null && formErrorsCompany.company_address != null) 
                // formErrorsCompany.company_asset != null && formErrorsCompany.company_liability != null
                {
                    this.setState({ step: step + 1, formValid: false })
                } else {
                    this.setState({formValid: true});
                    console.log('else 2');
                }
                break;
            case 4: 
                if (formErrorsDocument.documents_asset != null, formErrorsDocument.documents_identification != null &&
                    formErrorsDocument.documents_liability != null) 
                {
                    this.setState({ step: step + 1, formValid: false })
                } else {
                    this.setState({formValid: true});
                }
				    this.setState({ step: step + 1, formValid: false })
                break;
            case 5:
				//this.setState({ step: step + 1, formValid: false })
				    this.handleSubmit();
				/*
                if (formErrorsSummary.title != null) {
                    this.setState({ formValid: false })
                    this.handleSubmit();
                } else {
                    this.setState({formValid: true});
                }
				*/
				
				//this.setState({ step: step + 1, formValid: false })
				//this.handleSubmit();
            case 6: 
                this.setState({ formValid: false })
				
                break;
        }
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    stepCompanyDetails = () => {
        const { step } = this.state
        this.setState({
            step: step - 2
        })
    }

	stepPersonalDetails = () => {
        const { step } = this.state
        this.setState({
            step: step - 3
        })
    }

	stepHelpDetails = () => {
        const { step } = this.state
        this.setState({
            step: step - 4
        })
    }

    handleChange = input => e => {
        //e.preventDefault();
        const { value } = e.target
		let formErrorsHelp = this.state.formErrorsHelp
        let formErrorsPersonal = this.state.formErrorsPersonal
        let formErrorsCompany = this.state.formErrorsCompany
        let formErrorsSummary = this.state.formErrorsSummary
        let valid = true;
        switch(input) {
            // Form Help
			case 'loan_type':
                formErrorsHelp.loan_type = value == "" ? "minimum 3 characters required" : valid;            
                break;
			case 'term_loan_broker':
				formErrorsHelp.term_loan_broker = value == 1 ? 1 : 2;
				break; 
				
			
            case 'broker_name':
                formErrorsHelp.broker_name = value.length >= 0 && value.length < 3 ? "minimum 3 characters required" : valid;
                break;
            case 'broker_company':
                formErrorsHelp.broker_company = value.length >= 0 && value.length < 3 ? "minimum 3 characters required" : valid;
                break;
            case 'broker_email':
                formErrorsHelp.broker_email = value.length >= 0 && value.length < 3 ? "minimum 3 characters required" : valid;
                if ( value.length > 1 ) {
					formErrorsPersonal.broker_email = isEmailAddress(value)== true ?  valid : false;
					
				}
				break;
            case 'broker_contact':
                formErrorsHelp.broker_contact = value.length >= 0 && value.length < 3 ? "minimum 3 characters required" : valid;
                break;
		
			case 'loan_amount':
				formErrorsHelp.loan_amount = value.length >= 0 && value.length < 3 ? "minimum 3 characters required" : valid;
				break; 
            case 'length_term':
                formErrorsHelp.length_term = value.length >= 0 && value.length < 3 ? "minimum 3 characters required" : valid;
                break;
			
            /*
            case 'lastname':
                formErrorsHelp.lastname = value.length >= 0 && value.length < 3 ? "minimum 3 characters required" : valid;
                break;
            case 'email':
                formErrorsHelp.email = value.length >= 0 && value.length < 3 ? "minimum 3 characters required" : valid;
                break;
            case 'phone_number':
                formErrorsHelp.phone_number = value.length >= 0 && value.length < 3 ? "minimum 3 characters required" : valid;
                break;
            case 'address':
                formErrorsHelp.address = value.length >= 0 && value.length < 3 ? "minimum 3 characters required" : valid;
                break;
			*/

            // Form Personal
            case 'firstname':
                formErrorsPersonal.firstname = value.length >= 0 && value.length < 3 ? "minimum 3 characters required" : valid;            

                break;
            case 'lastname':
                formErrorsPersonal.lastname = value.length >= 0 && value.length < 3 ? "minimum 3 characters required" : valid;
                break;
            case 'email':
                formErrorsPersonal.email = value.length >= 0 && value.length < 3 ? "minimum 3 characters required" : valid;
				if ( value.length > 1 ) {
				
					formErrorsPersonal.email = isEmailAddress(value)== true ?  valid : false;
				}
                break;
            case 'phone_number':
                formErrorsPersonal.phone_number = value.length >= 0 && value.length < 3 ? "minimum 3 characters required" : valid;
                break;
            case 'address':
                formErrorsPersonal.address = value.length >= 0 && value.length < 3 ? "minimum 3 characters required" : valid;
                break;
            case 'comments':
                formErrorsPersonal.comments =  valid;
                break;

            //Form Company

            case 'company_name':
                formErrorsCompany.company_name = value.length >= 0 && value.length < 3 ? "minimum 3 characters required" : valid;
                break;

            case 'company_acn':
                formErrorsCompany.company_acn = value.length >= 0 && value.length < 3 ? false : valid;
				if ( value.length > 1 ) {
				
					formErrorsPersonal.company_acn = isValidACN(value)== true ?  valid : false;
				}
                break;
            case 'company_address':
                formErrorsCompany.company_address = value.length >= 0 && value.length < 3 ? "minimum 3 characters required" : valid;
                break;

            case 'company_asset':
                formErrorsCompany.company_asset = value.length >= 0 && value.length < 3 ? "minimum 3 characters required" : valid;
                break;

            case 'company_liability':
                formErrorsCompany.company_liability = value.length >= 0 && value.length < 3 ? "minimum 3 characters required" : valid;
                break;

            //Form Summary
            case 'title':
                formErrorsSummary.title = value.length >= 0 && value.length < 3 ? "minimum 3 characters required" : valid;
                break;
        }
		
        this.setState({ [input] : value });
		
    }

    handleOnFileChange = input => e => {
        //let file = e.target.files[0];
		let file = e.target.files;
        const {value} = this.state;

       // let filesize = file.size / 1024 / 1024;

        let formErrorsDocument = this.state.formErrorsDocument;
        let valid = true;
		/*
        switch(input) {
            //Form Document
            case 'documents_asset':
                formErrorsDocument.documents_asset = filesize > 2 ? "filesize must be under 2mb" : valid;
                break;

            case 'documents_identification':
                formErrorsDocument.documents_identification = filesize > 2 ? "filesize must be under 2mb" : valid;
                break;

            case 'documents_liability':
                formErrorsDocument.documents_liability = filesize > 2 ? "filesize must be under 2mb" : valid;
                break;
        }
		*/
        this.setState({
            [input] : file
        })                
    }

    handleAssetsChange = (idx, input) => e => {
        const { assets } = this.state
        console.log(idx);
        console.log(input);
        const newAssets = assets.map((asset, sidx) => {
            if (idx !== sidx) return asset;
            if (input === 'asset_description') {
                return { ...asset, asset_description: e.target.value };
            } else {
                return { ...asset, asset_value: e.target.value };
            }
        });
    
        this.setState({ assets: newAssets });
    };

    handleLiabilityChange = (idx, input) => e => {
        const { liabilities } = this.state
        console.log(idx);
        console.log(input);
        const newLiabilities = liabilities.map((liability, sidx) => {
            if (idx !== sidx) return liability;
            if (input === 'liability_description') {
                return { ...liability, liability_description: e.target.value };
            } else {
                return { ...liability, liability_value: e.target.value };
            }
        });
    
        this.setState({ liabilities: newLiabilities });
    };

    handleSubmit = (e) => {
        //e.preventDefault();

        // this.createHubspotDeal();
        // this.dealsFileUpload();
        this.sendMail();
		//alert('sss');
        // this.setState({buttonValue: true, loading: true});

        // setTimeout(() => {
        //     this.setState({buttonValue: false, loading: false});
        //     window.location.reload();
        // }, 3000)
    }

    createHubspotDeal = async () =>{  
        
        const url = "http://server.launchcap.com/deals.php"
        // const headers =  {
        //     'Access-Control-Allow-Origin': '*',
        //     //'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        //     'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
        //     'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, X-Requested-With',
        //     'Access-Control-Max-Age': '86400' 
        // }

        const data = {
            dealname : this.state.title
        }

        await axios.post(url, data)
        .then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    dealsFileUpload = async () => {
        var file;
        let files = [this.state.documents_asset, this.state.documents_liability, this.state.documents_identification];

        let reader = new FileReader();

        for(var i = 0; i < files.length; ++i) {            
            (function(file) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    const file_url = "//www.launchcap.com.au/server/FileUpload.php";
                    const file_data = {
                        file: e.target.result
                    };
    
                    return axios.post(file_url, file_data)
                    .then(res => {
                        console.log(res);
                        
                    }).catch(err => {
                        console.log(err);
                    })
                };
                // Read in the image file as a data URL.
                reader.readAsDataURL(file);
              })(files[i]);
        }
        
    }

    sendMail = async (e) => {
		$('body').addClass('loading');
		$('.modal-spinner').css('display','block');
        const { 
            loan_type, term_loan_broker, broker_name, broker_company, broker_email, broker_contact, loan_amount, length_term, firstname, lastname, comments, email, phone_number, address ,
            company_name, company_acn, company_address, documents_asset, documents_liability, documents_identification,
            title, assets, liabilities
			
			
        } = this.state
		
		const { 
            step, formErrorsHelp, formErrorsPersonal, formErrorsCompany, formErrorsDocument, formErrorsSummary
        } = this.state

        var file;
        let files = [this.state.documents_asset, this.state.documents_liability, this.state.documents_identification];
        let filenames = {
            asset : this.state.documents_asset.name,
            liability: this.state.documents_liability.name,
            identification: this.state.documents_identification.name
        }

        const data = { 
            loan_type, term_loan_broker, broker_name, broker_company, broker_email, broker_contact, loan_amount, length_term,
			firstname, lastname, email, phone_number, address, comments,
            company_name, company_acn, company_address,
            title, assets, liabilities
        }; 
		let filesdata ={};
		let filesdataArray =[];
		let testA ={}
		
		/*
        for(var i = 0; i < files.length; ++i) {            
            (function(file) {
                var reader = new FileReader();
                
                reader.onload = function(e) {                    
                    let countFilesdata =  Object.keys(filesdata).length;
					let blob = base64ToBlob(e.target.result);
					blob.name = getFilename(e.target.result);
                    filesdata[countFilesdata] = blob; 
                    testA = blob; 
    
                };
                // Read in the image file as a data URL.
                reader.readAsDataURL(file);
            })(files[i]);
            //testA = atob(filesdata);
        }
		*/


		let filesData = {}
		/*
        for(var i = 0; i < filesdata.length; ++i) {   
			filesData[i] = filesdata[i];
        }
		*/
		console.log('filesdata',  testA );
        const file_url = "//www.launchcap.com.au/server/apply-now-mail.php"
        const file_data = {
            // file: e.target.result,
            data,
            filenames
        };




        const formData = new FormData();

		let documents_liability_attached = [];
		let filesAttachLiability = this.state.documents_liability;
		let documents_liability_limit = 0;
		for (let i = 0; i < filesAttachLiability.length; i++) {
			//documents_liability_attached.push(filesAttachLiability[i]);
			 formData.append('documents_liability_'+i, filesAttachLiability[i] )
			 documents_liability_limit++;
		}
	
		formData.append('documents_liability_limit',documents_liability_limit )
		
		let documents_identification_attached = [];
		let filesAttachIdentification = this.state.documents_identification;
		let documents_identification_limit = 0;
		for (let i = 0; i < filesAttachIdentification.length; i++) {
			 formData.append('documents_identification_'+i, filesAttachIdentification[i] )
			 documents_identification_limit++;
		}
	
		formData.append('documents_identification_limit',documents_identification_limit )		
		

        //formData.append('documents_asset',this.state.documents_asset)
        
        //formData.append('documents_liability',documents_liability_attached)
        
        //formData.append('documents_identification',this.state.documents_identification)
        
        formData.append('file_data',JSON.stringify(file_data) )
        
        await axios.post( "//www.launchcap.com.au/server/apply-now-mail.php", formData,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        .then(res => {
			console.log(res);
           if ( res['status']  == 200) {
				$('.modal-spinner').css('display','none');		
				$('body').removeClass('loading');
				//alert('Your message has been successfully sent. We will contact you very soon!');
				//window.location.reload();
				this.setState({ step: step + 1, formValid: false })
			} else {
				alert('Error Found upon submitting, please reload your browser, or check your email and try it again');
			}
        }).catch(err => {
            console.log(err);
				alert('Error Found upon submitting, please reload your browser, or check your email and try it again');
        })

        //=========================================================================
        // const file_url = "http://server.launchcap.com/apply-now-mail.php"
        // const formData = new FormData()

        // console.log("data" + files)

        // for (let i = 0; i < files.length; i++) {
        //     let file = files[i]
        
        //     formData.append('files[]', file)
        //     console.log("inside" + files[i])
        // }

        // // formData.append('data', data)

        // console.log(formData);

        // console.log("outside" + files)
        //=========================================================================
        // return await axios.post(file_url, formData)
        // .then(res => {
        //     console.log(res);
        // }).catch(err => {
        //     console.log(err);
        // })
    }
    render() {        

        const { step } = this.state
        const { 
            loan_type, term_loan_broker, broker_name, broker_company, broker_email, broker_contact, loan_amount, length_term, firstname, lastname, comments, email, phone_number, address ,
            company_name, company_acn, company_address, company_asset, company_liability,
            documents_asset, documents_liability, documents_identification, title, dealID, files, 
            formErrorsHelp, formErrorsPersonal, formErrorsCompany, formErrorsDocument, formErrorsSummary, formValid,
            assets, liabilities
        } = this.state

        const values = { 
            loan_type, term_loan_broker, broker_name, broker_company, broker_email, broker_contact, loan_amount, length_term, firstname, lastname, comments, email, phone_number, address,
            company_name, company_acn, company_address, company_asset, company_liability,
            documents_asset, documents_liability, documents_identification, title, dealID, files,
            formErrorsHelp, formErrorsPersonal, formErrorsCompany, formErrorsDocument, formErrorsSummary, formValid,
            assets, liabilities
        }

        switch(step) {
            case 1:
                return (
                    <FormHelp                        
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormPersonal                        
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3: 
                return (
                    <FormCompany
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        handleAssetsChange={this.handleAssetsChange}
                        handleLiabilityChange={this.handleLiabilityChange}
                    />
                )
            case 4: 
                return (
                    <FormDocument                        
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        handleOnFileChange={this.handleOnFileChange}                                               
                        values={values}
                    />
                    
                )
            case 5: 
                return (
                    <FormSummary
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
						stepCompanyDetails={this.stepCompanyDetails}
						stepPersonalDetails = {this.stepPersonalDetails}
						stepHelpDetails = {this.stepHelpDetails}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        buttonValue={this.state.buttonValue}
                        values={values}
                        loading={this.state.loading}
                        // context={this.state.context}
                    />
                )
            case 6: 
                return (
                    <FormThankYou                        
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        handleOnFileChange={this.handleOnFileChange}                                               
                        values={values}
                    />
                    
                )

        }
    }
}


    const base64ToBlob = (dataurl) => {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1]
    const sliceSize = 1024;
    const byteChars = window.atob(arr[1]);
    const byteArrays = [];

    for (let offset = 0, len = byteChars.length; offset < len; offset += sliceSize) {
        let slice = byteChars.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
        }

        return new Blob(byteArrays, {type: mime});
    }
	
	const isEmailAddress = (str) => {
	    var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	    return pattern.test(str);  // returns a boolean 
	}
	const isValidACN = (str) => {
        var valid = (str.length == 9) ? true : false;
        return valid;  // returns a boolean 
	}	

    const getFilename = (dataUrl) => {
        const arr = dataUrl.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];

        return Math.round(+new Date()/1000) + '.' + mime.split('/').pop();
    }

export default ApplicationForm;
