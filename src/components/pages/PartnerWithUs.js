import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class PartnerWithUs extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            menuContainer: false
        }

        this.toggleMenu = this.toggleMenu.bind(this)
    }
    

    toggleMenu = () => {
        this.setState({ menuContainer: !this.state.menuContainer })
    }

    render() {
        return (
            <div>
                <section className="section" id="pwuGrowth">
                    <div className="section__column section__column--image2"></div>
                    <div className="section__column section__column--content">
                    <h2>Growth for you, <br/> is good for us. <br/> We're on your team.</h2>
                    <p>You've got deals to make and we're here to help you make them.</p>
                    <p>Speak to one of our team members about partnering with us for better, faster and easier deals up to 10 million dollars.</p>
                    <Link to="/contact" className="button" onClick={this.toggleMenu}> SPEAK TO THE TEAM </Link>
                    </div>
                </section>
                <section className="section section--reverse">
                    <div className="section__column section__column--image2"></div>
                    <div className="section__column section__column--content">
                    <h2>{"It's your game. "}<br/>{" We just help you "} <br/> {" win it."}</h2>
                    <p>{"At Launchcap, we treat each deal as unique and in each we do our best to help you settle."}</p>
                    <p>{"We're have to support you by being as involved in your deal making process as necessary. Like any good partner, we're here for you when you need."}</p>
                    <p><Link className="button" to="/contact" onClick={this.toggleMenu}>Inquire now</Link></p>
                    </div>
                </section>
                <section className="section section--full" id="pwuAreYouABroker">
                    <h2>{"Are you a broker looking to increase"}<br/>
						{"your business and close more deals?"}
					</h2>
					<strong>
						<p>{"Our Business Development Managers are expert in helping you narrow in on your goals,"}<br/>
						{"and level up your business. Send us an email to arrange a conversation that will"}<br/>
						{"take your business to the next level."}<br/><br/><br/></p>
						<p><Link className="button" to="/contact"onClick={this.toggleMenu}>Inquire now</Link></p>
					</strong>
                </section>
            </div>
        )
    }
}

export default PartnerWithUs



