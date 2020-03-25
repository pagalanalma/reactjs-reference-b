import React from 'react';
import HeaderBanner from './HeaderBanner';
import HeaderNav from './HeaderNav';


const Header = () => {

    const style = {
        width: '100%',
    }

    return (
        <div>
            <HeaderNav />
            <header style={style}>
                <HeaderBanner />
            </header>
        </div>

        
    )
}

export default Header;
