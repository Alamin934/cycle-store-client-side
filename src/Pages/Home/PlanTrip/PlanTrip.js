import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const PlanTrip = () => {
    return (
        <div>
            <section className="py-5">
                <Container>
                    <div className="text-center mb-4">
                        <h1 className="fw-bold"><span className="text-danger">Plan Your</span> Trip Easly</h1>
                        <p className="text-muted">Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    </div>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        <Col>
                            <div className="shadow bg-light p-3 rounded">
                                <img className="img-fluid" src="https://i.ibb.co/BPvFHxM/adventure-icon-1.png" alt="" />
                                <h4 className="fw-normal mt-3
                            ">Itineraries studied in detail</h4>
                                <p className="fst-italic"><small>As you're persecuting the right, you'll come up with a nice, accurate Platonist, that's one.</small></p>
                            </div>
                        </Col>
                        <Col>
                            <div className="shadow bg-light p-3 rounded">
                                <img className="img-fluid" src="https://i.ibb.co/HrGhkHz/adventure-icon-2.png" alt="" />
                                <h4 className="fw-normal mt-3
                            ">Room and food included</h4>
                                <p className="fst-italic"><small>If you book any Tour Plans then you will get free room service and get free food for full Trip</small></p>
                            </div>
                        </Col>
                        <Col>
                            <div className="shadow bg-light p-3 rounded">
                                <img className="img-fluid" src="https://i.ibb.co/CQ50QB5/adventure-icon-3.png" alt="" />
                                <h4 className="fw-normal mt-3
                            ">Everything organized</h4>
                                <p className="fst-italic"><small>Organized as if in a practical argument, he barely realized that it wasn't a game.
                                </small></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default PlanTrip;