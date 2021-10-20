import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import aboutPic from '../../images/item_4.jpg';
import about from '../../images/item_3.jpg';

const About = () => {
    return (
        <div className="details about_us">
            <div className="row aboutOverlay ">
                <h2 className="">We Are Caring Your Eye Health
                </h2>
            </div>
            <div className="row">
                <nav className=" about" aria-label="breadcrumb ">
                    <div className="container px-5 py-5">
                        <h3 className="text-start">About Us</h3>
                        <ol className="breadcrumb p-1">

                            <Link to="/home" className="breadcrumb-item ">Home</Link>
                            <Link to="/about" className="breadcrumb-item active" aria-current="page">About Us</Link>
                        </ol>
                    </div>
                </nav>
            </div>
            <div className="row container py-3 my-5 ps-5">
                <div className="col-12 col-md-6 col-lg-6 pt-5">
                    <img src={aboutPic} alt="" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 col-lg-6 text-start ps-5">
                    <h4 className=" about_text fw-bolder pb-3">About Us
                    </h4>
                    <h2 className="text-dark  fw-bolder">We Are Caring For Your Eye Health Hospital</h2>
                    <p className="pt-4 pb-3">
                        An eye care professional is an individual who provides a service related to the eyes or vision. It is any healthcare worker involved in eye care, from one with a small amount of post-secondary training to practitioners with a doctoral level of education.
                    </p>

                    <div className="row">
                        <div className="col-lg-6">
                            <p>
                                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i><span className="ps-3">Conducts eye checkups</span>
                            </p>

                            <p>
                                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i><span className="ps-3">Contact lens service</span>
                            </p>

                            <p>
                                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i><span className="ps-3">Best lasik treatment</span>
                            </p>

                        </div>
                        <div className="col-lg-6">
                            <p>
                                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i> <span className="ps-3">Treats minor illnesses</span>
                            </p>

                            <p>
                                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i> <span className="ps-3">Special eye exam</span>
                            </p>

                            <p><i className="fa fa-arrow-circle-right" aria-hidden="true"></i><span className="ps-3">Special Retina exam</span>
                            </p>

                        </div>

                    </div>
                    <Link to="/home">
                        <button type="button" className="btn btn-info mt-3 p-2 text-white">More About Us</button>
                    </Link>
                </div>
            </div>
            <div className="container">
                <hr />
            </div>

            <div className="row container  ps-5 about_color why_us ">
                <div className="col-md-6 col-sm-6">
                    <h2 className="choose_headline py-3">Why Choose Us</h2>
                    <p>Your eyes are an important part of your health. Most people rely on their eyes to see and make sense of the world around them. But some eye diseases can lead to vision loss </p>

                    <div className="row py-4 ps-5">

                        <div className="col-12 col-md-2 col-lg-2">
                            <p>
                                <i className="fa fa-book choose_us" aria-hidden="true"></i>
                            </p>

                        </div>
                        <div className="col-12 col-md-10 col-lg-10 text-start">
                            <h5> Best System</h5>
                            <p>  Providing Care For The Sickest</p>

                        </div>
                    </div>
                    <div className="row ps-5">

                        <div className="col-12 col-md-2 col-lg-2">
                            <p>
                                <i className="fa fa-file-text choose_us" aria-hidden="true"></i>
                            </p>

                        </div>
                        <div className=" col-12 col-md-10 col-lg-10 text-start">
                            <h5>Best Optometrist</h5>
                            <p> Eye Care That You Can Trust</p>

                        </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <img src={about} alt="" className="img-fluid" />
                </div>
            </div>

        </div>
    );
};

export default About;