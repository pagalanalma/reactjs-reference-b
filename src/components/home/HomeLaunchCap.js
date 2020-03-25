/* eslint-disable no-dupe-keys */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from '../header/Header';
import Navbar from '../header/HeaderNav';
import RowFirstSection from '../rows/RowFirstSection';
import RowSecondSection from '../rows/RowSecondSection';
import RowThirdSection from '../rows/RowThirdSection';
import RowForthSection from '../rows/RowForthSection';
import AppForm from '../pages/ApplicationForm';
import '../../assets/styles.css';
import Footer from '../footer/Footer';
import ContactUs from '../contact/ContactUs';
import Blog from '../blog/Blog';
import PartnerWithUs from '../pages/PartnerWithUs';
import Pathway from '../pages/Pathway';
import Terms from '../termSheet/Terms';

function HomeLaunchCap() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <main>
                            <RowFirstSection />
                            <RowSecondSection />
                            <RowThirdSection />
                            <RowForthSection />
                        </main>
                        <Footer />
                    </Route>
                    <Route path="/apply-now">
                        {/* <ApplyNow /> */}
                        <Navbar />
                        <main className="pages">
                            <AppForm />
                        </main>
                    </Route>
                    <Route path="/pathways">
                        <Navbar />
                        <header>
                            <div className="columns">
                                <div className="img-column img-column--image1"></div>
                                <div className="headline">
                                <h2>Forge your own path, starting with one of ours</h2>
                                <ul className="solution-links">
                                    <li><a href="#termLoad">Term Loan ></a></li>
                                    <li><a href="#constructionLoan">Construction Loan ></a></li>
                                    <li><a href="#lineCredit">Line of credit ></a></li>
                                </ul>
                                </div>
                            </div>
                        </header>
                        <main>
                            <Pathway />
                        </main>                            
                    </Route>
                    <Route path="/blog"> 
                        <Navbar />
                        <main className="pages">
                            <Blog />
                        </main>
                    </Route>
                    <Route path="/partner" component={PartnerWithUs} >
                        <Navbar />
                        <main className="pages">
                            <PartnerWithUs />
                        </main>
                    </Route>
                    <Route path="/contact" component={ContactUs}>
                        {/* <ApplyNow /> */}
                        <Navbar />
                        <main className="pages">
                            <ContactUs />
                        </main>
                    </Route>
                    <Route path="/terms" component={Terms}>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default HomeLaunchCap;
