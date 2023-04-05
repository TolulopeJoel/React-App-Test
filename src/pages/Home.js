import React from 'react';
import Navbar from "../components/Navbar";


export default function Home() {
    return (
        <>
            <Navbar />
            <div className="banner bg-light text-center">
                <div className="container">
                    <h1 className="fw-bold py-3">Search engine optimisation &<br />Marketing.</h1>
                    <h6 className="text-muted pb-3">Simple is a simple template with a creative design that solves all your marketing and SEO queries.</h6>
                    <div>
                        <button className="btn opacity-75 mx-1 btn-success rounded-0">Get started</button>
                        <button className="btn opacity-75 mx-1 btn-danger rounded-0">Learn more</button>
                    </div>
                    <img src={require('../assets/images/hero-image.svg')} alt="" className="img-fluid" />
                </div>
            </div>

            <div className="container">
                <section>
                    <div className="text-center">
                        <h2>How does it works</h2>
                        <h6 className="text-muted">One theme that serves as an easy-to-use operational toolkit<br />that meets customer's needs.</h6>
                    </div>

                    <div className="d-md-flex justify-content-between">
                        <div className="d-flex justify-content-start">
                            <div className="features-width">
                                <img src="images/Group12.svg" alt="" className="img-icons" />
                                <h5 className="py-3">Speed<br />Optimisation</h5>
                                <p className="text-muted">Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.</p>
                                <a href="#"><p className="readmore-link">Readmore</p></a>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="features-width">
                                <img src="images/Group7.svg" alt="" className="img-icons" />
                                <h5 className="py-3">SEO and<br />Backlinks</h5>
                                <p className="text-muted">Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.</p>
                                <a href="#"><p className="readmore-link">Readmore</p></a>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <div className="features-width">
                                <img src="images/Group5.svg" alt="" className="img-icons" />
                                <h5 className="py-3">Content<br />Marketing</h5>
                                <p className="text-muted">Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.</p>
                                <a href="#"><p className="readmore-link">Readmore</p></a>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="border-top">
                    <p className="text-center text-muted pt-4">Copyright © {new Date().getFullYear()}<a href="https://www.tolulopejoel.substack.com/" className="px-1">Tolulope Joel</a>All rights reserved.</p>
                </footer>
            </div>
        </>
    );
}