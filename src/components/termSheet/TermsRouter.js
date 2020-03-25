/* eslint-disable default-case */
import React, { useState} from 'react'
import TermsInfo from './TermsInfo'
import TermsReview from './TermsReview'
import TermsCommitmentFee from './TermsCommitmentFee'
import TermsFinal from './TermsFinal'


const TermsRouter = () => {

    const [step, incrementStep] = useState(1);

    const nextStep = () => {
        incrementStep(step + 1);
    }

    const prevStep = () => {
        incrementStep(step -1);
    }

    switch(step) {
        case 1:
            return (
                <TermsInfo 
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            )
        case 2:
            return (
                <TermsReview 
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            )
        case 3:
            return (
                <TermsCommitmentFee 
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            )
        case 4:
            return (
                <TermsFinal 
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            )
        default:
            return (
                <TermsInfo 
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            )
    }
}

export default TermsRouter;