/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Pathway extends Component {

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
                <section className="section section--reverse" id="termLoad">
                    <div className="section__column section__column--image2"></div>
                    <div className="section__column section__column--content">
                    <h2>Term Loan</h2> <br/><br/>
                    <p>&bull; {"Receive approvals within 24 hours"}</p>
                    <p>&bull; {"3 - 24 month terms"}</p>
                    <p>&bull; {"$100,000 - $10,000,000"}</p>
                    <p>&bull; {"Fast Setup process"}</p>
					<Link to="/apply-now" className="button" onClick={this.toggleMenu}> apply now </Link>
                    </div>
                </section>
                <section className="section" id="constructionLoan">
                    <div className="section__column section__column--image2"></div>
                    <div className="section__column section__column--content">
                    <h2>Construction Loan</h2> <br/><br/>
                    <p>&bull; {"Projects up to $50M"}</p>
                    <p>&bull; {"Simple Conditions for approval"}</p>
                    <p>&bull; {"Term 6 - 24 month terms(Interest capitalization available)"}</p>
                    <p>&bull; {"Project partners, not just a lender"}</p>
                    <Link to="/apply-now" className="button" onClick={this.toggleMenu}> apply now </Link>
                    </div>
                </section>
                <section className="section section--reverse" id="lineCredit">
                    <div className="section__column section__column--image2"></div>
                    <div className="section__column section__column--content">
                    <h2>Line of Credit</h2> <br/><br/>
                    <p>&bull; {"Receive approvals within 24 hours"}</p>
                    <p>&bull; {"3 - 12 month terms"}</p>
                    <p>&bull; {"$25,000 - $250,000"}</p>
                    <p>&bull; {"Only pay interest on the funds you use"}</p>
                    <p>&bull; {"Access your funds anytime easily"}</p>
					<Link to="/apply-now" className="button" onClick={this.toggleMenu}> apply now </Link>
                    </div>
                </section>
                <section className="section section--full">
                    <h2>{"Not sure where to start?"} <br/> {"Our team gets that, and we're here to help"}</h2>
                    {/* <a className="button" href="./blog.html">Explore</a> */}
                    <Link to="/contact" className="button" onClick={this.toggleMenu}> INQUIRE NOW </Link>
                </section>
            </div>
        )
    }
}

export default Pathway
