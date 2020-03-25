import React from 'react';
import Navbar from '../header/HeaderNav';
import TermsRouter from './TermsRouter';
import './static/sass/term.scss';

const Terms = () => {
    return (
        <div>
            <Navbar />
            <main className="pages">
                <TermsRouter />
            </main>
        </div>
    )
}

export default Terms;
