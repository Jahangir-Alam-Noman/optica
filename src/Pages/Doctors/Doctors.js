import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Doctor from '../Doctor/Doctor/Doctor';

import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div>

            <div className="row parallex">
                <p>
                    <Link to="/home"> <span className="text-custom pe-2"> Home </span></Link>
                    <span className="text-custom">Doctors</span>
                </p>
            </div>

            <div className="services  container  mb-4 pb-5">
                <h4 className="doctors fw-bolder">Doctors</h4>
                <h2 className="text-dark fw-bolder pb-5">Optica Eye Care Specialist</h2>
                <Row xs={1} md={2} lg={3} className="g-4">

                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                    }

                </Row>

            </div>
        </div>
    );
};

export default Doctors;