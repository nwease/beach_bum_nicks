import React from 'react';
import Hero from '../global/Hero';
import aboutImg from '../../images/aboutBcg.jpeg';

const Header = () => {
    return (
        <Hero img={aboutImg}>
            <h1>
                Hello
            </h1>
        </Hero>
    );
};

export default Header;
