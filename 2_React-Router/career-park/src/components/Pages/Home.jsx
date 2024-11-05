import React from 'react';
import Hero from '../others/Hero/Hero';
import Categories from '../others/Categories/Categories';
import FeaturedJobs from '../others/FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Hero />
            <Categories />
            <FeaturedJobs/>
        </div>
    );
};

export default Home;