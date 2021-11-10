import React from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import useAllPlans from '../../../hooks/useAllPlans';

const ManageBiCycle = () => {
    const { plans, isLoading } = useAllPlans();
    if (!isLoading) {
        return <div className="text-center py-5">
            <Spinner animation="border" variant="info" />
        </div>
    }
    return (
        <div>
            <Container>
                <h1 className="mb-4 fw-bold"><span className="text-info">Manage</span> BiCycle</h1>
                <Row xs={1} md={3} lg={4} className="g-4">
                    {
                        plans.map(plan => <Col key={plan._id}>
                            <Card>
                                <Card.Img className="img-fluid rounded-0" src={plan.url} />
                                <div>
                                    <Card.Body>
                                        <Card.Title className="mb-3 fs-6">{plan.title}</Card.Title>
                                        <Button variant="outline-info" className="d-block text-end">Delete</Button>
                                    </Card.Body>
                                </div>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ManageBiCycle;