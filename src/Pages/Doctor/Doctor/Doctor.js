import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Doctor.css';

const Doctor = ({ doctor }) => {
    const { name, img, specialty } = doctor;
    return (
        <div className="service custom_doctor text-center">
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="doctor_name  fw-bolder">{name}</Card.Title>
                        <Card.Title className="text-dark"> <small>{specialty}</small> </Card.Title>
                        <Card.Text>
                            <p className="doctor_icon">
                                <a href="https://www.linkedin.com/signup"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                <a href="https://ads.twitter.com/login"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Doctor;