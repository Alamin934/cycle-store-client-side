import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="pb-3">
            <Container>
                <Row>
                    <Col>
                        {/* 404  */}
                        <div>
                            <img className="w-75 mx-auto d-block" src="https://i.ibb.co/fkCmY6Q/404.jpg" alt="" />
                        </div>
                        {/* Back to Home Button */}
                        <Link to="/home" className="nav-link d-block text-center">
                            <button className="btn btn-danger mx-auto">Back to Home</button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;