import Button from 'react-bootstrap/Button';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const WhoWeAre = () => {
    return (
        <div>
            <section className="py-5">
                <Container>
                    <h1 className="text-center mb-4 fw-bold">Who <span className="text-danger">We Are?</span></h1>
                    <Row className="g-4">
                        <Col xs={12} md={6}>
                            <img className="img-fluid" src="https://i.ibb.co/7CkTN4L/charles-deluvio-Lks7vei-e-Ag-unsplash-1.jpg" alt="" />
                        </Col>
                        <Col xs={12} md={6}>
                            <h2 className="fw-normal
                            ">We Are Travel Experts</h2>
                            <p className="text-muted fst-italic"><small>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</small></p>
                            <Button variant="danger" className="rounded-pill px-4 py-2">Read More</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default WhoWeAre;