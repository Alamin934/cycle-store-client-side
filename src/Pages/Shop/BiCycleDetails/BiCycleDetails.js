import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const BiCycleDetails = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [biCycle, setBiCycle] = useState({});

    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:5000/allBiCycles/${id}`)
            .then(res => res.json())
            .then(data => setBiCycle(data))
    }, [id]);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.status = "pending";
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Thank you for your Order.');
                    history.push('/myOrders')
                }
            })

    };

    return (
        <div>
            <Header />
            <section className="py-5">
                <Container>
                    <Row className="g-5">
                        {/* TOUR biCycle DETAILS */}
                        <Col xs={12} md={7} lg={8}>
                            <img className="img-fluid" src={biCycle.url} alt="" />

                            <div className="bg-white p-4 mt-4 shadow">
                                <h5>Description</h5>
                                <p><small>{biCycle.description}</small></p>
                            </div>
                        </Col>
                        {/* USER DETAILS */}
                        <Col xs={12} md={5} lg={4}>
                            <h3 className="mb-4">Please Give Your Info</h3>
                            {/* USER DETAILS FORM */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label>BiCycle Name</label>
                                {biCycle.biCycle_name && <input {...register("biCycle_name")} className="form-control form-control-lg mb-3" defaultValue={biCycle?.biCycle_name} />}

                                <label>Phone Number</label>
                                <input type="number" {...register("phone_number", { required: true })} className="form-control form-control-lg mb-3" />

                                <label>Address</label>
                                <input {...register("address", { required: true })} className="form-control form-control-lg mb-3" />

                                <label>Price</label>
                                {biCycle.price && <input type="number" {...register("price")} className="form-control form-control-lg mb-3" defaultValue={biCycle?.price} />}

                                <label>Image URL</label>
                                {biCycle.url && <input {...register("url")} className="form-control form-control-lg mb-3" defaultValue={biCycle?.url} />}

                                <label>Email</label>
                                <input {...register("email")} defaultValue={user?.email} className="form-control form-control-lg mb-3" placeholder="Email" />

                                <label>User Name</label>
                                <input {...register("userName")} defaultValue={user?.displayName} className="form-control form-control-lg mb-3" placeholder="User Name" />

                                <div className="text-end mt-4">
                                    <input className="btn btn-outline-info btn-lg" type="submit" value="Buy Now" />
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    );
};

export default BiCycleDetails;