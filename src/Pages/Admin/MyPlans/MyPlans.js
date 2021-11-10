import React, { useEffect, useState } from 'react';
import { Card, CardImg, Col, Container, Row, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyPlans = () => {
    const { user } = useAuth();
    const email = user.email;

    const [userPlans, setUserPlans] = useState([]);
    useEffect(() => {
        fetch(`https://limitless-beyond-03016.herokuapp.com/myPlans/${email}`)
            .then(res => res.json())
            .then(data => setUserPlans(data))
    }, [email]);

    const handleCancelMyPlans = (id) => {
        const proceed = window.confirm('Are you sure, You want to Cancel this Plan?');
        if (proceed) {
            fetch(`https://limitless-beyond-03016.herokuapp.com/myPlans/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Cancel Successfully');
                        const remainingPlans = userPlans.filter(userPlan => userPlan._id !== id);
                        setUserPlans(remainingPlans);
                    }
                })
        }
    };

    if (userPlans.length === 0) {
        return <h2 className="text-center py-5 fw-bold">No Booking Plans Found</h2>
    }

    return (
        <div className="py-5">
            <Container>
                <Row className="g-5 d-flex justify-content-center" xs={1} md={2} lg={3}>
                    {
                        userPlans.map(userPlan => <Col key={userPlan._id}>
                            <Card>
                                <CardImg src={userPlan.url} alt="" />
                                <Card.Body className="rounded-3">
                                    <Card.Title className="mb-0 fs-4">{userPlan.title}</Card.Title>
                                    <Card.Text className="my-1"><span className="fw-bold">Location:</span> {userPlan.location}</Card.Text>
                                    <Card.Text className="my-1"><span className="fw-bold">From:</span> {userPlan.date}</Card.Text>
                                    <div className="d-flex justify-content-between">
                                        <Card.Text className="my-1"><span className="fw-bold">Price:</span> ${userPlan.price}</Card.Text>
                                        <Card.Text className="my-1"><span className="fw-bold">Total:</span> {userPlan.totalPeople} People</Card.Text>
                                        <Card.Text className="my-1"><span className="fw-bold">Duration:</span> {userPlan.days} Days</Card.Text>
                                    </div>
                                    <Card.Text className="my-1"><span className="fw-bold">Status:</span> {userPlan.status}</Card.Text>
                                    <Button onClick={() => handleCancelMyPlans(userPlan._id)} variant="danger" className="d-block mt-3">Cancel</Button>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default MyPlans;