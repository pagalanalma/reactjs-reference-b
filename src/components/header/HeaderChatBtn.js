/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import timesBtn from '../../assets/img/times-solid-light.svg';
import ChatLogo from '../../assets/img/Chat.svg';
import $ from 'jquery';

class HeaderChatBtn extends Component {

    state = {
        chatContainer: false
    }

    toggleChat = () => {
        this.setState({ chatContainer: !this.state.chatContainer })
		
		if ( !this.state.chatContainer ) {
			$('.menu__container #closeMenu.close-menu img').click();
		}
    }

    render() {
        const { displayBlock, displayNone } = this.props

        return (
            <div className="webchat"> 
				
                <a className="webchat__button" href="#" id="webchat__button" onClick={this.toggleChat}>
                    <img src={ChatLogo} alt=""/>
                </a>
                <div className="webchat__popup" id="webchat__popup" style={!this.state.chatContainer ? displayNone : displayBlock}>
                    <div className="webchat__popup__close" id="webchat__popup__close">
                    <a href="#" onClick={this.toggleChat}>
                        <img src={timesBtn} alt=""/>
                    </a>
                    </div>
                    <div className="webchat__popup__messages">
                        <span>Hi! Welcome to Launchcap.</span>
                        <span>We hope you're finding the website nice and easy to navigate. Feel free to let us know if we can help you out.</span>
                        <span>The team typically replies within a few minutes.</span>
                    </div>
                    <div className="webchat__popup__textbox">
                        <textarea name="" cols="30" rows="1" placeholder="Ask us anything..."></textarea>
                    </div>
                    <input type="submit" value="Submit"/>
                </div>
            </div>
        )
    }
}

export default HeaderChatBtn;
