import React from 'react';
import Hero from '../global/Hero';
import homeImg from '../../images/homeBcg.jpeg';

const Header = () => {
    return (
        <Hero img={homeImg}>
            <h1>
                Hello
            </h1>
        </Hero>
    );
};

export default Header;
