import React, { Component } from 'react'
import '../../assets/ApplicationFormDocument.css'
import $ from 'jquery';

class ApplicationFormDocument extends Component {   
    
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    previous = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        const { values, handleChange, handleOnFileChange } = this.props

        const inputStyle = {
            border: "1px solid red"
        }
        setTimeout(function(){

                 $(".application [type=file]").on("change", function(){
                  // Name of file and placeholder
				   var files = this.files;
				   let fileNames = '';
				   let file = '';
				   var fileSize = 0;
				   let errorFileScan = 0;
				   
				   if (files.length > 0){
						for (var i = 0; i < files.length; i++) {
							  file = this.files[i].name;
							  fileSize = this.files[i].size; // get file size
							  if ( i == 0 ) {
								  fileNames = file;
							  } else {
								  fileNames += ", " + file;
								  
							  }
							  

						   if(fileSize > 2097152) {
								alert(this.files[i].name+' size must not be more than 2 MB');
								$(this).val('');
								errorFileScan = 1;
						   }
						}
						

				  
					}
					if ( errorFileScan == 0 ) {
						$(this).next().text(fileNames);
					}
                });

        }, 1000); 
        return (
            <section>
                <div className="parent">
                    <div className="child"></div>
                    <div className="child is-page">
                        <div className="application">
                            <form>
                                <div className="application__step-number">
                                    <h3 class="step">step 4 <small>of</small> 4</h3>
                                </div>
                                <div className="application__step-title">
                                    <h1>Document Upload</h1>
                                </div>
                                <div className="top-text">
                                    <label className="radioQuestion"> PLEASE NOTE: This is an optional step that will speed up your application.</label>
                                    <div className="text__file">We require the following documentation before final approval, but can begin the process before it is submitted. File should not exceed 2MB each.</div>
                                </div>
                                <div className="application__input">
                                    <div className="application__input__field"><span className="custom-input-file-label"></span>
                                        <div className="custom-input-file">

                                            
                                            <small htmlFor="file1" ></small>
                                        </div>
                                    </div>
                                    <div className="application__input__field"><span className="custom-input-file-label">assets <span className="lowercase">and</span> liabilities</span>
                                        <div className="text__file">Please provide official proof of ownership documentation for all assets and liabilities listed in your application. Eg rates notice and/or loan statements.</div>
                                        <div className="custom-input-file">
                                            <label htmlFor="file2"className="text-bold">Upload</label>
                                            {values.formValid === true && values.formErrorsDocument.documents_liability !== true? 
                                                <input
                                                    id="file2"
                                                    type="file" 
                                                    name="documents_liability" 
                                                    className="inputfile"
                                                    //value={values.documents_liability}
                                                    onChange={handleOnFileChange('documents_liability')}
													accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*" 
													multiple
                                                    //onChange={this.handleFileChange}
                                                    style={inputStyle}
                                                />
                                            :
                                                <input
                                                    id="file2"
                                                    type="file" 
                                                    name="documents_liability" 
                                                    className="inputfile"
													multiple
                                                    //value={values.documents_liability}
                                                    onChange={handleOnFileChange('documents_liability')}
													accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*" 
                                                
                                                    //onChange={this.handleFileChange}
                                                />
                                            }

                                              <small  htmlFor="file2" ></small>

                                        </div>
                                    </div>
                                    <div className="application__input__field"><span className="custom-input-file-label">identification</span>
                                        <div className="text__file">Please provide high resolution copies of your passport and/or drivers license.</div>
                                        <div className="custom-input-file">
                                            <label htmlFor="file3" className="text-bold">Upload</label>
                                            {values.formValid === true && values.formErrorsDocument.documents_identification !== true? 
                                                
                                                <input
                                                    id="file3"
                                                    type="file" 
                                                    name="documents_identification" 
                                                    className="inputfile"
                                                    //value={values.documents_identification}
                                                    onChange={handleOnFileChange('documents_identification')}
                                                    //onChange={this.handleFileChange}
                                                    style={inputStyle}
													multiple
													accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*" 
                                                
                                                />
                                            : 
                                                <input
                                                    id="file3"
                                                    type="file" 
                                                    name="documents_identification" 
                                                    className="inputfile"
                                                    //value={values.documents_identification}
                                                    onChange={handleOnFileChange('documents_identification')}
                                                    //onChange={this.handleFileChange}
													multiple
													accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*" 
                                                />

                                            }
                                              <small  htmlFor="file3" ></small>    

                                        </div>
                                    </div>
                                    {/* <div className="application__input__field"><span>XXXXX</span>
                                        <div className="custom-input-file">
                                            <label>upload</label>
                                            <input type="file" name="file" className="inputfile" id="file"/>
                                        </div>
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
                                            review
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

export default ApplicationFormDocument
