/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderChatBtn from './HeaderChatBtn';
import logo from '../../assets/img/logo-emblem.svg';
import logoMain from '../../assets/img/logo-main.png';
import menuIcon from '../../assets/img/ellipsis-v-solid.png';
import menuIconDark from '../../assets/img/ellipsis-v-solid-dark.png';
import closeBtn from '../../assets/img/times-solid.png';
import arrowDownImg from '../../assets/img/arrow-down.png';
import $ from 'jquery';


class HeaderNav extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            menuContainer: false,
            style: {},
            scrollTop: 0
        }

        this.navRef = React.createRef();

        this.toggleMenu = this.toggleMenu.bind(this)
        this.onScroll = this.onScroll.bind(this);

    }

    onScroll = () => {
        const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
        //const scrollTop = this.navRef.current.scrollTop
        const scrollTop = scrollY;
        //console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`)
        this.setState({ scrollTop: scrollTop })

    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    toggleMenu = () => {
		let url = window.location.pathname;
		let newstr= url.replace(/[/]/g, "");

		$('.menu__container').attr('style',"display:none");
		$('.menu-list').removeClass('active');

		if ( newstr !== "") {
			$('.menu-list[href="'+ url +'"]').addClass('active');
			
		} else {
			$('.menu-list[href="/"]').addClass('active');
		}
		this.setState({ menuContainer: !this.state.menuContainer })

		var effect = 'slide';

		// Set the options for the effect type chosen
		var options = { direction: "right", display:"flex" };

		// Set the duration (default: 400 milliseconds)
		var duration = 500;

		$('.menu__container').toggle(effect, options, duration);
		$('menu__container').toggleClass('hidden');
		//$('.menu__container').css("display","flex");
		
        //this.setState({ menuContainer: !this.state.menuContainer })

        //$('.menu').css({'display': 'block' });
      //  $('.menu__container').toggleClass('indexcity');

        
		
    } 
	activeMenu = event => {
		$('.menu-list').removeClass('active');
		$(event.currentTarget).addClass('active');
		this.setState({ menuContainer: !this.state.menuContainer })

		let url = window.location.pathname;
		let newstr = url.replace(/[/]/g, "");
		
	}

    // handleScroll = () => {
        
    //     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ) {
    //         this.state.style = {
    //             display: 'inline-block',
    //             display: 'none',
    //             backgroundColor: "rgba(23,27,44,.5)"
    //         }
    //     } else {
    //         this.state.style = {
    //             display: 'none',
    //             display: 'inline',
    //             backgroundColor: "transparent"
    //         }
    //     }

    //     if ( window.screen.width <= 768 ) {
    //         this.state.style = {
    //             display: 'inline-block',
    //             display: 'none',
    //         }
    //     }
    // }

    render() {

		
        const displayBlock = {
            visibility: "visible"
        }

        const displayNone = {
            display: "hidden"
        }

        const { scrollTop } = this.state
        let styling = {} 

		let arrowDown = {}
		let callNow = {}
		let menuIconDisplay = menuIcon;
	

        if(scrollTop > 100) {
            styling = {
                baseNav: {
                    //backgroundColor: "rgba(23,27,44,.5)"
                },
                baseText: {
                    display: 'none'
                },
                baseLogo: {
                    display: 'inline-block'
                },
				baseLogoMain: {
                    display: 'none'
				}
            }
        } else {

            styling = {
                baseNav: {
                    backgroundColor: "transparent"
                },
                baseText: {
                    display: 'inline'
                },
                baseLogo: {
                    display: 'none'
                },
				baseLogoMain: {
                    display: 'inline-block'
				}
            }
        }
	
		let url = window.location.pathname;
		let newstr= url.replace(/[/]/g, "");

		if(scrollTop > 2124 ||  newstr == "apply-now" ||  newstr == "contact") {
			arrowDown = {
				style: {
					display: 'none'
				}
			}

		} else {
			arrowDown = {
				style: {
					display: 'block'
				}
			}
		}

		// CALL NOW
		if( newstr == "apply-now" ) {
			callNow = {
				style: {
					display: 'none'
				}
			}
			menuIconDisplay = menuIconDark;

		} else {
			callNow = {
				style: {
					display: 'block'
				}
			}
		}
        

        return (
            <div 
                ref={this.navRef} 
                className="navbar" 
                id="navbar" 
                style={styling.baseNav}
                onScroll={this.onScroll}
            >
                <a className="navbar__brand" href="./">
                    <img className="navbar__brand__logo" src={logo} alt="" style={styling.baseLogo}/>
					<img className="navbar__brand__logo_main" src={logoMain} style={styling.baseLogoMain} alt="" />
                </a>
				
                <a className="button" href="tel:+61434134595"  >call now</a>
                <a className="button call-now-mobile" href="tel:+61434134595" >call now</a>
                <a className="vertical-ellipsis" href="#" id="menu" onClick={this.toggleMenu}>
                    <img src={menuIconDisplay} alt=""/>
                </a>

                <div className="menu" style={!this.state.menuContainer ? displayNone : displayBlock }>

                    <HeaderChatBtn
                        displayBlock={displayBlock}
                        displayNone={displayNone}
                    />

                    <div className="menu__container" >
                        <a className="close-menu" id="closeMenu" onClick={this.toggleMenu} >
                            <img src={closeBtn} alt=""/>
                        </a>
                        <nav>
                            <ul>
							<li><Link className="menu-list" to="/" onClick={this.activeMenu}>home</Link></li>
                                <li><Link className="menu-list" to="/apply-now" onClick={this.activeMenu}>apply now</Link></li>
                                <li><Link className="menu-list" to="/pathways" onClick={this.activeMenu}>growth pathways</Link></li>
                                <li><Link className="menu-list" to="/partner" onClick={this.activeMenu}>partner with us</Link></li>
                                <li><Link className="menu-list" to="/contact" onClick={this.activeMenu}>contact us</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
				<div className="downArrow bounce" style={arrowDown.style} >
                    <img  alt="" src={arrowDownImg} />
				</div>
            </div>
        )
    }
}

export default HeaderNav;

 //<li><Link to="/blog" onClick={this.toggleMenu}>the launchpad</Link></li>
