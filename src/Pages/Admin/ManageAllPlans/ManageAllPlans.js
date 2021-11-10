import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Table } from 'react-bootstrap';

const ManageAllPlans = () => {
    const [userPlans, setUserPlans] = useState([]);

    useEffect(() => {
        fetch('https://limitless-beyond-03016.herokuapp.com/userPlans')
            .then(res => res.json())
            .then(data => setUserPlans(data))
    }, []);
    const handleDeletePlan = (id) => {
        const proceed = window.confirm('Are you sure, You want to Delete this Plan?');
        if (proceed) {
            fetch(`https://limitless-beyond-03016.herokuapp.com/myPlans/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully');
                        const remainingPlans = userPlans.filter(userPlan => userPlan._id !== id);
                        setUserPlans(remainingPlans);
                    }
                })
        }
    };
    return (
        <div className="py-5">
            <Container>
                <Row>
                    <Col>
                        <h2 className="mb-3">All Booking Plans List</h2>
                        <Table responsive="xl">
                            <thead>
                                <tr>
                                    <th>User Name</th>
                                    <th>Email Id</th>
                                    <th>Booking Date</th>
                                    <th>Plans Title</th>
                                    <th>Location</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userPlans.map(userPlan =>
                                        <tr key={userPlan._id}>
                                            <td>{userPlan.userName}</td>
                                            <td>{userPlan.email}</td>
                                            <td>{userPlan.date}</td>
                                            <td>{userPlan.title}</td>
                                            <td>{userPlan.location}</td>
                                            <td>
                                                <Form.Select aria-label="Default select example">
                                                    <option value="pending">{userPlan.status}</option>
                                                    <option value="Approved">Approved</option>
                                                    <option value="Complete">Complete</option>
                                                </Form.Select>
                                            </td>
                                            <td>
                                                <button onClick={() => handleDeletePlan(userPlan._id)} className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>)
                                }


                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ManageAllPlans;