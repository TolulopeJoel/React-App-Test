import React from 'react';
import Navbar from "../components/Navbar";


export default function Home() {
    return (
        <>
            <Navbar />
            <div className="banner bg-light text-center">
                <div className="container">
                    <h1 className="fw-bold py-3">Collaborate and Meet up With<br />Deadlines in Realtime.</h1>
                    <h6 className="text-muted pb-3">RemoteCollaborate keeps your team more organized. And meet up with task deadlines. </h6>
                    <div>
                        <a href="/signup" className="btn opacity-75 mx-1 btn-success rounded-0 px-3">Get started</a>
                        <a href="/login" className="btn opacity-75 mx-1 border border-danger rounded-0 px-3">Sign In</a>
                    </div>
                    <img src={require('../assets/images/hero-image.svg')} alt="" className="img-fluid" />
                </div>
            </div>

            <div className="container my-5">
                <section className="my-5">
                    <div className="text-center">
                        <h2>How does it work?</h2>
                        <h6 className="text-muted">Avoid messy deadlines. Track tasks progress and<br />meet customer's needs.</h6>
                    </div>

                    <div className="d-md-flex justify-content-between my-5">
                        <div className="d-flex justify-content-start">
                            <div className='w-50'>
                                <img src={require('../assets/images/Group12.svg')} alt="" />
                                <h5 className="py-3">Work in<br />Teams</h5>
                                <p className="text-muted">Collaboration made easy by working in various teams.</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className='w-50'>
                                <img src={require('../assets/images/Group7.svg')} alt="" />
                                <h5 className="py-3">Realtime Progress</h5>
                                <p className="text-muted">Get updates on task and teamates progress in realtime.</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <div className='w-50'>
                                <img src={require('../assets/images/Group5.svg')} alt="" />
                                <h5 className="py-3">Track Tasks<br />Progress</h5>
                                <p className="text-muted">View tasks progress and know if you are ahead or behind schedule.</p>
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