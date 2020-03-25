import React from 'react'

export function Next(props) {
    const next = (e) => {
        e.preventDefault();
        props.nextStep();
    }

    return (
        <div className="application__button">
            <button 
                className="application__button__default" 
                type="submit"
                onClick={next}    
            >
                next
            </button>
        </div>
    )
}

export function Back(props) {
    const previous = (e) => {
        e.preventDefault();
        props.prevStep();
    }

    return (
        <div className="application__button">
            <button 
                className="application__button__outline" 
                type="submit"
                onClick={previous}
            >
                back
            </button>
        </div>
    )
}
