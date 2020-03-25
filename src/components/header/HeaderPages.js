import React from 'react';
import { Link } from 'react-router-dom';
import HeaderChatBtn from './HeaderChatBtn';
import ellipsis from '../assets/img/ellipsis-v-solid-dark.svg';
import closeBtn from '../assets/img/times-solid.svg';


const HeaderPages = () => {
    // const style= {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignContent: 'space-around'
    // }

    return (
        <header>
            <div className="navbar">
                <a className="logo" href="./">
                    <strong>launch<span>cap.</span></strong>
                </a>
                <a className="vertical-ellipsis" href="#menu">
                    <img src={ellipsis} alt="ellipsis"/>
                </a>
                <div className="menu" id="menu">
                    <a className="close-menu" href="!#">
                        <img src={closeBtn} alt="close button" />
                    </a>
                    <nav>
                        <ul>
                            <li><Link to="/apply-now">apply now</Link></li>
                            <li><Link to="/launchpad">the launchpad</Link></li>
                            <li><Link to="/partner">partner with us</Link></li>
                            <li><a href="!#">the calculator</a></li>
                            <li><Link to="/contact">contact us</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <HeaderChatBtn />
        </header>
    )
}

export default HeaderPages;
