import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddBiCycle = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/allBiCycles', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('New BiCycle Information Added Successfully');
                    reset();
                }
            })

    }
    return (
        <div>
            <Container>
                <h1 className="fw-bold mb-4">Add New <span className="text-info">Tour Plans</span></h1>
                <Row className="d-flex">
                    <Col md={8}>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input {...register("biCycle_name")} className="form-control form-control-lg mb-3" placeholder="BiCycle Name" />

                            <input type="number" {...register("price")} className="form-control form-control-lg mb-3" placeholder="Price" />

                            <input {...register("rating")} className="form-control form-control-lg mb-3" placeholder="Rating: Out of 5" />

                            <textarea rows="4" {...register("description")} className="form-control form-control-lg mb-3" placeholder="Description"></textarea>

                            <input {...register("url")} className="form-control form-control-lg mb-3" placeholder="Insert Image URL" />

                            <div className="text-end mt-4">
                                <input className="btn btn-info btn-lg text-white" type="submit" value="Add New BiCycle" />
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddBiCycle;