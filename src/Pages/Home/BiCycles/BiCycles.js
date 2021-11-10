import React from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAllPlans from '../../../hooks/useAllPlans';
import './BiCycles.css';

const BiCycles = () => {
    const { plans, isLoading } = useAllPlans();
    const history = useHistory();
    const handlePlanDetail = (id) => {
        const url = `/singlePlanDetail/${id}`;
        history.push(url);
    }
    if (!isLoading) {
        return <div className="text-center py-5">
            <Spinner animation="border" variant="danger" />
        </div>
    }
    return (

        <div>
            <section className="py-5">
                <Container>
                    <h1 className="text-center mb-4 fw-bold"><span className="text-info">Our Tour</span> Plans</h1>
                    <Row xs={1} md={2} lg={3} className="g-5">
                        {
                            plans.map(plan => <Col key={plan._id}>
                                <Card className="border-0">
                                    <Card.Img className="img-fluid rounded-0" src={plan.url} />

                                    <div>
                                        <Card.Body className="px-0">
                                            <div className="d-flex justify-content-between border-bottom pb-2">
                                                <Card.Text className="mb-0">
                                                    <small className="text-muted">Rating</small>
                                                </Card.Text>
                                                <h5 className="fw-bold mb-0 text-info">${plan.price}</h5>
                                            </div>
                                            <Card.Title className="mt-2">{plan.title.slice(0, 30)}</Card.Title>
                                            <Card.Text>
                                                <small className="text-muted">{plan.description.slice(0, 80)}</small>
                                            </Card.Text>
                                        </Card.Body>
                                        <Button onClick={() => handlePlanDetail(plan._id)} variant="outline-info" className="d-block">Book Now</Button>
                                    </div>
                                </Card>
                            </Col>)
                        }
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default BiCycles;