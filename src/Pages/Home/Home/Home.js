import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import BiCycles from '../BiCycles/BiCycles';
import ContactUs from '../ContactUs/ContactUs';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <BiCycles />
            <Review />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;