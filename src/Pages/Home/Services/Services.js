import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="services container py-5 mt-4 mb-4">
            <h4 className="pt-4 fw-bolder">Services</h4>
            <h2 className="text-dark fw-bolder pb-5">Optica Eye Care Services</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </Row>

        </div>
    );
};

export default Services;