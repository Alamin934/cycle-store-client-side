import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddBiCycle = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
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

                            <input {...register("biCycle_name", { required: true })} className="form-control form-control-lg mb-3" placeholder="BiCycle Name" />
                            <p>{errors.biCycle_name && "BiCycle Name is required"}</p>

                            <input type="number" {...register("price", { required: true })} className="form-control form-control-lg mb-3" placeholder="Price" />
                            <p>{errors.price && "Price is required"}</p>

                            <input {...register("rating", { required: true, min: 0, max: 5 })} className="form-control form-control-lg mb-3" placeholder="Rating: Out of 5" />
                            <p>{errors.rating && "Rating is required & Max rating is 5"}</p>

                            <textarea rows="4" {...register("description", { required: true })} className="form-control form-control-lg mb-3" placeholder="Description"></textarea>
                            <p>{errors.description && "Description is required"}</p>

                            <input {...register("url", { required: true })} className="form-control form-control-lg mb-3" placeholder="Insert Image URL" />
                            <p>{errors.url && "Photo is required"}</p>

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