import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import './Review.css';

const Review = () => {
    const userImg = 'https://i.ibb.co/sQtppYT/user-img.png';
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://rocky-badlands-58533.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div>
            <section className="pt-5">
                <h1 className="fw-bold text-center mb-4"><span className="text-info">Our Clients</span> Says</h1>
                <Container className="py-5" id="carousel_banner">
                    <Row className="justify-content-center align-items-center review-row">
                        <Col xs={12} md={8}>
                            <Carousel>
                                {
                                    reviews.map(review =>
                                        <Carousel.Item key={review._id}>
                                            <Row className="g-4">
                                                <Col xs={12} md={3} className="text-center">
                                                    {review?.photoUrl ? <img className="userImg rounded-pill" src={review?.photoUrl} alt="" />
                                                        : <img className="userImg" src={userImg} alt="" />}
                                                </Col>
                                                <Col xs={12} md={9}>
                                                    <Carousel.Caption>
                                                        <ReactStars
                                                            value={parseFloat(review.rating)}
                                                            isHalf={true}
                                                            count={5}
                                                            size={26}
                                                            activeColor="#ffd700"
                                                        ></ReactStars>
                                                        <div className="fst-italic"><small>{`" ${review.description}"`}</small></div>
                                                        <h6 className="fst-italic fw-bold">{review.name}</h6>
                                                    </Carousel.Caption>
                                                </Col>
                                            </Row>
                                        </Carousel.Item>
                                    )
                                }
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Review;