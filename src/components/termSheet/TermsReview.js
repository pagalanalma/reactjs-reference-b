import React, { useState } from 'react';
import { Next, Back } from './buttonNavigation';
import { Modal, Button } from 'react-bootstrap';
import TableForm from './TermsTable';
import SignaturePad from 'react-signature-canvas';


const TermsReview = props => {

    let sigPad = {};

    const [ showBorrower, setShowBorrower ] = useState(false);
    const [ showGuarantor, setShowGuarantor ] = useState(false);
    let [ trimmedBorrowersDataUrl, getTrimedBorrowersData ] = useState();
    let [ trimmedGuarantorsDataUrl, getTrimedGuarantorsData ] = useState();

    const handleCloseBorrower = () => setShowBorrower(false);
    const handleCloseGuarantor = () => setShowGuarantor(false);

    const showBorrowersModal = e => {
        e.preventDefault();
        setShowBorrower(true);
    };

    const showGuarantorsModal = e => {
        e.preventDefault();
        setShowGuarantor(true);
    };

    const clearCanvas = e => {
        e.preventDefault();
        sigPad.clear();
    };

    const onBorrowersSubmit = e => {
        e.preventDefault();
        getTrimedBorrowersData(sigPad.getTrimmedCanvas().toDataURL('image/png'));
        handleCloseBorrower();
    };

    const onGuarantorsSubmit = e => {
        e.preventDefault();
        getTrimedGuarantorsData(sigPad.getTrimmedCanvas().toDataURL('image/png'));
        handleCloseGuarantor();
    };

    const BorrowersModal = () => {
        return(
            <Modal show={showBorrower} onHide={handleCloseBorrower}>
                <Modal.Header closeButton>
                </Modal.Header>
                <div className="modal-content" style={modal_style}>
                    <h2 style={modal_style.h2_style}>BORROWER'S SIGNATURE:</h2>
                    <p>Use your finger or mouse to draw your signature.</p>
                </div>
                <Modal.Body>
                    <SignaturePad penColor='green'
                    canvasProps={{width: 500, height: 150, className: 'sigCanvas'}} 
                    ref={(ref) => { sigPad = ref }} />
                </Modal.Body>
                <Modal.Footer style={modal_style.modal_footer}>
                    <Button variant="default" onClick={clearCanvas}>
                        Redo
                    </Button>
                    <Button className="primary-button" onClick={onBorrowersSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }

    const GuarantorsModal = () => {
        return(
            <Modal show={showGuarantor} onHide={handleCloseGuarantor}>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">
                    </Modal.Title>
                </Modal.Header>
                <div className="modal-content" style={modal_style}>
                    <h2 style={modal_style.h2_style}>GUARANTOR'S SIGNATURE:</h2>
                    <p>Use your finger or mouse to draw your signature.</p>
                </div>
                <Modal.Body>
                    <SignaturePad penColor='green'
                    canvasProps={{width: 500, height: 150, className: 'sigCanvas'}} 
                    ref={(ref) => { sigPad = ref }} />
                </Modal.Body>
                <Modal.Footer style={modal_style.modal_footer}>
                    <Button variant="default" onClick={clearCanvas}>
                        Redo
                    </Button>
                    <Button className="primary-button" onClick={onGuarantorsSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <section>
            <div className="parent">
                <div className="child"></div>
                <div className="child is-page">
                    <div className="application">
                        <form>
                            <div className="application__step-number">
                                <h3>step 1 of 2</h3>
                            </div>
                            <div className="application__step-title">
                                <h1>Review & Accept Your Offer</h1>
                                <p>Please review and accept the following loan terms and conditions.</p>
                            </div>
                            <div className="table-container">
                                <TableForm />
                            </div>
                            <div className="application__input">
                                <div className="application__input__field">
                                    <div className="terms-and-condition"></div>
                                </div>
                                <div className="accept">
                                    <input type="checkbox" name="accpet_terms" id="accept_terms"/>
                                    <label htmlFor="accept_terms">
                                        I have read and accept the <u>terms and conditions.</u>
                                    </label>
                                </div>
                            </div>
                            <div className="btn-group-sm" style={{ marginTop: '5%' }}>
                                <p>
                                    If you wish to print and review the terms sheet, <br/>
                                    click here:
                                </p>
                                <button className="primary-button">
                                    Print A Copy
                                </button>
                            </div>
                            <div className="signature-container">
                                <div className="signature-header">
                                    <label>Acceptance of Offer</label>
                                </div>
                                <div className="signature-body">
                                    <div className="signature-holder">
                                        <button
                                            className="btn btn-link"
                                            onClick={showBorrowersModal}
                                        >
                                            Draw Borrower's signature
                                        </button>

                                        <div className="modal-container">
                                            <BorrowersModal/>
                                        </div>
                                        <div>
                                            {trimmedBorrowersDataUrl
                                                ? <img className="signature-img"
                                                    alt=""
                                                    src={trimmedBorrowersDataUrl} />
                                                : null}
                                        </div>
                                    </div>
                                    <div className="signature-holder">
                                        <button
                                            className="btn btn-link"
                                            onClick={showGuarantorsModal}
                                        >
                                            Draw Guarantor's signature
                                        </button>

                                        <div className="modal-container">
                                            <GuarantorsModal/>
                                        </div>
                                        <div>
                                            {trimmedGuarantorsDataUrl
                                                ? <img className="signature-img"
                                                    alt=""
                                                    src={trimmedGuarantorsDataUrl} />
                                                : null}
                                        </div>
                                    </div>
                                </div>
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
                                </div>
                                <div className="application__button">
                                    <Back prevStep={props.prevStep} />
                                    <Next nextStep={props.nextStep} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

const modal_style = {
    textAlign: 'center',
    h2_style: {
        fontSize: '1.75rem',
    },
    modal_footer: {
        justifyContent: 'center',
    }
}

export default TermsReview;
