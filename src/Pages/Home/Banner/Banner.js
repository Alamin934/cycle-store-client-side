import Button from 'react-bootstrap/Button';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <section id="home-banner" className="bg-light pt-5">
                <Container>
                    <Row className="g-4">
                        <Col xs={12} md={5}>
                            <h1 className="fw-bold display-3 mb-3">Largest Bycycle Manufacture</h1>
                            <p>Check Out our exclusive collection of mountain bikes. City bikes, girls cycles and more</p>
                            <Link to='/allBiCycles'><Button size="lg" variant="info" className=" px-5 rounded-pill fw-bold text-white">Shop Now</Button></Link>
                        </Col>
                        <Col xs={12} md={7}>
                            <img src="https://i.ibb.co/GQzjqzR/bike.png" alt="" className="w-100" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Banner;