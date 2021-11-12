import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import useAllBiCycles from '../../../hooks/useAllBiCycles';

const ManageBiCycle = () => {
    const { biCycles, setBiCycles } = useAllBiCycles();

    const handleDeleteBiCycle = (id) => {
        const proceed = window.confirm('Are you sure, You want to Delete your Product?');
        if (proceed) {
            fetch(`https://rocky-badlands-58533.herokuapp.com/allBiCycles/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully');
                        const remainingOrders = biCycles.filter(order => order._id !== id);
                        setBiCycles(remainingOrders);
                    }
                })
        }
    };

    return (
        <div>
            <Container>
                <h1 className="mb-4 fw-bold"><span className="text-info">Manage</span> BiCycle</h1>
                <Row xs={1} md={3} lg={4} className="g-4">
                    {
                        biCycles.map(biCycle => <Col key={biCycle._id}>
                            <Card>
                                <Card.Img className="img-fluid rounded-0" src={biCycle.url} />
                                <div>
                                    <Card.Body>
                                        <Card.Title className="mb-3 fs-6">{biCycle.biCycle_name}</Card.Title>
                                        <Button onClick={() => handleDeleteBiCycle(biCycle._id)} variant="outline-info" className="d-block text-end">Delete</Button>
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