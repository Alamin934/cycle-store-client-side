import React from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAllBiCycles from '../../hooks/useAllBiCycles';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import ReactStars from 'react-rating-stars-component';

const AllBiCycles = () => {
    const { biCycles, isLoading } = useAllBiCycles();
    const history = useHistory();
    const handlebiCycleDetail = (id) => {
        const url = `/biCycleDetails/${id}`;
        history.push(url);
    }
    if (!isLoading) {
        return <div className="text-center py-5">
            <Spinner animation="border" variant="info" />
        </div>
    }
    return (
        <div>
            <Header />
            <section className="py-5">
                <Container>
                    <h1 className="text-center mb-4 fw-bold">Our All<span className="text-info"> BiCycles</span></h1>
                    <Row xs={1} md={2} lg={3} className="g-5">
                        {
                            biCycles.map(biCycle => <Col key={biCycle._id}>
                                <Card className="border-0">
                                    <Card.Img className="img-fluid rounded-0" src={biCycle.url} />

                                    <div>
                                        <Card.Body className="px-0">
                                            <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
                                                <Card.Text className="mb-0">
                                                    <ReactStars
                                                        value={4.5}
                                                        isHalf={true}
                                                        count={5}
                                                        size={26}
                                                        activeColor="#ffd700"
                                                    />
                                                </Card.Text>
                                                <h5 className="fw-bold mb-0 text-info">${biCycle.price}</h5>
                                            </div>
                                            <Card.Title className="mt-2">{biCycle.biCycle_name}</Card.Title>
                                            <Card.Text>
                                                <small className="text-muted">{biCycle.description.slice(0, 80)}</small>
                                            </Card.Text>
                                        </Card.Body>
                                        <Button onClick={() => handlebiCycleDetail(biCycle._id)} variant="outline-info" className="d-block">Buy Now</Button>
                                    </div>
                                </Card>
                            </Col>)
                        }
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    );
};

export default AllBiCycles;