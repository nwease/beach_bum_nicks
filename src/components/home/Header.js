import React from 'react';
import Hero from '../global/Hero';
import homeImg from '../../images/homeBcg.jpeg';
import Banner from '../global/Banner';

const Header = () => {
    return (
        <Hero img={homeImg}>
            <h1>
                <Banner
                    greeting='Hello, Welcome to '
                    title='Beach Bum Nicks Resort'
                    text='A vacation is having nothing to do & all day to do it in.'
                />
            </h1>
        </Hero>
    );
};

export default Header;
