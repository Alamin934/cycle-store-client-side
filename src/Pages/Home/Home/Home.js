import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import PlanTrip from '../PlanTrip/PlanTrip';
import BiCycles from '../BiCycles/BiCycles';
import WhoWeAre from '../WhoWeAre/WhoWeAre';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <BiCycles />
            <WhoWeAre />
            <PlanTrip />
            <Footer />
        </div>
    );
};

export default Home;