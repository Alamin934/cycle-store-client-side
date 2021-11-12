import React, { useEffect, useState } from 'react';
import { Col, Form, Row, Table, Spinner } from 'react-bootstrap';
import useAllBiCycles from '../../../hooks/useAllBiCycles';

const ManageAllOrders = () => {
    const { isLoading } = useAllBiCycles();
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState("");

    useEffect(() => {
        fetch('https://rocky-badlands-58533.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const handleStatus = (e) => {
        setStatus(e.target.value);
    }

    const handleUpdateStatus = (id) => {

        fetch(`https://rocky-badlands-58533.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert(`Update Status ${status} Successfully`);
                }
            })
    }

    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you sure, You want to Delete?');
        if (proceed) {
            fetch(`https://rocky-badlands-58533.herokuapp.com/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }
    };
    if (!isLoading) {
        return <div className="text-center py-5">
            <Spinner animation="border" variant="info" />
        </div>
    }
    return (
        <div>
            <Row className="px-3">
                <Col>
                    <h2 className="mb-3">All Booking Plans List</h2>
                    <Table responsive="xl">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Email Id</th>
                                <th>BiCycle Name</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order =>
                                    <tr key={order._id}>
                                        <td>{order.userName}</td>
                                        <td>{order.email}</td>
                                        <td>{order.biCycle_name}</td>
                                        <td>
                                            <Form.Select onChange={handleStatus} aria-label="Default select example">
                                                <option value="pending">{order.status}</option>
                                                <option value="approved">Approved</option>
                                                <option value="shipped">Shipped</option>
                                            </Form.Select>
                                        </td>
                                        <td>
                                            <button onClick={() => handleUpdateStatus(order._id)} className="btn btn-warning me-2">Update</button>
                                            <button onClick={() => handleDeleteOrder(order._id)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>)
                            }


                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    );
};

export default ManageAllOrders;