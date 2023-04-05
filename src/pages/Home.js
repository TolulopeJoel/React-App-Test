import React from 'react';
import Navbar from "../components/Navbar";


export default function Home() {
    return (
        <>
            <Navbar />
            <header id="header-section">
                <nav class="navbar navbar-expand-lg pl-3 pl-sm-0" id="navbar">
                    <div class="container">
                        <div class="navbar-brand-wrapper d-flex w-100">
                            <img src="images/Group2.svg" alt="" />
                                <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="mdi mdi-menu navbar-toggler-icon"></span>
                                </button>
                        </div>
                        <div class="collapse navbar-collapse navbar-menu-wrapper" id="navbarSupportedContent">
                            <ul class="navbar-nav align-items-lg-center align-items-start ml-auto">
                                <li class="d-flex align-items-center justify-content-between pl-4 pl-lg-0">
                                    <div class="navbar-collapse-logo">
                                        <img src="images/Group2.svg" alt="" />
                                    </div>
                                    <button class="navbar-toggler close-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="mdi mdi-close navbar-toggler-icon pl-5"></span>
                                    </button>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#header-section">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#features-section">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#digital-marketing-section">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#feedback-section">Testimonials</a>
                                </li>
                                <li class="nav-item btn-contact-us pl-4 pl-lg-0">
                                    <button class="btn btn-info" data-toggle="modal" data-target="#exampleModal">Contact Us</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div class="banner" >
                <div class="container">
                    <h1 class="font-weight-semibold">Search engine optimisation &<br />Marketing.</h1>
                    <h6 class="font-weight-normal text-muted pb-3">Simple is a simple template with a creative design that solves all your marketing and SEO queries.</h6>
                    <div>
                        <button class="btn btn-opacity-light mr-1">Get started</button>
                        <button class="btn btn-opacity-success ml-1">Learn more</button>
                    </div>
                    <img src="images/Group171.svg" alt="" class="img-fluid" />
                </div>
            </div>
            <div class="content-wrapper">
                <div class="container">
                    <section class="features-overview" id="features-section" >
                        <div class="content-header">
                            <h2>How does it works</h2>
                            <h6 class="section-subtitle text-muted">One theme that serves as an easy-to-use operational toolkit<br />that meets customer's needs.</h6>
                        </div>
                        <div class="d-md-flex justify-content-between">
                            <div class="grid-margin d-flex justify-content-start">
                                <div class="features-width">
                                    <img src="images/Group12.svg" alt="" class="img-icons" />
                                        <h5 class="py-3">Speed<br />Optimisation</h5>
                                        <p class="text-muted">Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.</p>
                                        <a href="#"><p class="readmore-link">Readmore</p></a>
                                </div>
                            </div>
                            <div class="grid-margin d-flex justify-content-center">
                                <div class="features-width">
                                    <img src="images/Group7.svg" alt="" class="img-icons" />
                                        <h5 class="py-3">SEO and<br />Backlinks</h5>
                                        <p class="text-muted">Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.</p>
                                        <a href="#"><p class="readmore-link">Readmore</p></a>
                                </div>
                            </div>
                            <div class="grid-margin d-flex justify-content-end">
                                <div class="features-width">
                                    <img src="images/Group5.svg" alt="" class="img-icons" />
                                        <h5 class="py-3">Content<br />Marketing</h5>
                                        <p class="text-muted">Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.</p>
                                        <a href="#"><p class="readmore-link">Readmore</p></a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer class="border-top">
                        <p class="text-center text-muted pt-4">Copyright © 2019<a href="https://www.bootstrapdash.com/" class="px-1">Bootstrapdash.</a>All rights reserved.</p>
                    </footer>
                </div>
            </div>
        </>
    );
}