import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import logo from '../../../images/logo4.png';

const Footer = () => {
    return (
        <div className="bg_color">
            <div className="container pt-5">
                <div className="row py-4">
                    <div className="col-12 col-md-6 col-lg-3 text-start">
                        <img src={logo} className="img-fluid py-2" alt="" />
                        <p>Senior Eye Surgeon For All Eye Conditions, Specializing In Cataract Treatment. Call Now. Female Senior Doctor With Over 20 Years Experience.
                        </p>
                        <div className="footer_icon">
                            <a href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="https://ads.twitter.com/login"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="https://www.linkedin.com/signup"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                            <a href="https://play.google.com/store/apps/details?id=net.sourceforge.opencamera&hl=en&gl=US"><i className="fa fa-camera" aria-hidden="true"></i></a>
                            <a href="https://www.globe.gov/"><i className="fa fa-globe" aria-hidden="true"></i></a>

                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 ">
                        <div className="explore text-start px-5">
                            <h3 className="pb-3">About</h3>
                            <p> <NavLink to="/doctors">Doctors</NavLink></p>
                            <p> <NavLink to="/about">About</NavLink></p>
                            <p> <NavLink to="/services">Services</NavLink></p>
                            <p> <NavLink to="/about">Department</NavLink></p>
                            <p> <NavLink to="/home">Home</NavLink></p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3  ">
                        <div className="explore text-start px-5">
                            <h3 className="pb-3">Explore</h3>
                            <p> <NavLink to="/home">Blog</NavLink></p>
                            <p> <NavLink to="/about">Appointment</NavLink></p>
                            <p> <NavLink to="/login">Register</NavLink></p>
                            <p> <NavLink to="/login">Login</NavLink></p>
                            <p> <NavLink to="/login">Support</NavLink></p>

                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 ">
                        <div className="explore text-start px-5">
                            <h3 className="pb-3">Support</h3>
                            <p> <NavLink to="/about">Online Support</NavLink></p>
                            <p> <NavLink to="/about">Free Consultancy</NavLink></p>
                            <p> <NavLink to="/home">24/7 Service</NavLink></p>
                            <p> <NavLink to="/about">Make call</NavLink></p>
                            <p> <NavLink to="/about">Contact Support</NavLink></p>

                        </div>
                    </div>

                </div>
                <hr />
                <div className="row text-center py-3">
                    <p>&copy; 2021 Optica. All rights reserved.</p>
                </div>
            </div>


        </div>
    );
};

export default Footer;