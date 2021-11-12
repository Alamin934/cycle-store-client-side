import React, { useEffect, useState } from 'react';
import { Card, CardImg, Col, Container, Row, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const email = user.email;

    const [userOrders, setUserOrders] = useState([]);

    useEffect(() => {
        fetch(`https://rocky-badlands-58533.herokuapp.com/orders/${email}`)
            .then(res => res.json())
            .then(data => setUserOrders(data))
    }, [email]);

    const handleCancelMyOrders = (id) => {
        const proceed = window.confirm('Are you sure, You want to Cancel this Order?');
        if (proceed) {
            fetch(`https://rocky-badlands-58533.herokuapp.com/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Cancel Successfully');
                        const remainingOrders = userOrders.filter(userOrder => userOrder._id !== id);
                        setUserOrders(remainingOrders);
                    }
                })
        }
    };

    if (userOrders.length === 0) {
        return <h2 className="text-center pb-5 fw-bold">No Orders Found</h2>
    }

    return (
        <>
            <div>
                <Container>
                    <h2 className="fw-bold">My <span className="text-info">Orders</span></h2>
                    <Row className="g-5 d-flex justify-content-center mt-3" xs={1} md={2} lg={3}>
                        {
                            userOrders.map(userOrder => <Col key={userOrder._id}>
                                <Card>
                                    <CardImg src={userOrder.url} alt="" />
                                    <Card.Body className="rounded-3">
                                        <Card.Title className="mb-0 fs-4">{userOrder.biCycle_name}</Card.Title>

                                        <Card.Text className="my-1"><span className="fw-bold">Phone:</span> {userOrder.phone_number}</Card.Text>

                                        <Card.Text className="my-1"><span className="fw-bold">Address:</span> {userOrder.address}</Card.Text>

                                        <Card.Text className="my-1"><span className="fw-bold">Price:</span> ${userOrder.price}</Card.Text>

                                        <Card.Text className="my-1"><span className="fw-bold">Status:</span> {userOrder.status}</Card.Text>

                                        <Button onClick={() => handleCancelMyOrders(userOrder._id)} variant="info" className="d-block mt-3">Cancel</Button>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        }

                    </Row>
                </Container>
            </div>
        </>
    );
};

export default MyOrders;