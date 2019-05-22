import React from 'react';
import Hero from '../global/Hero';
import homeImg from '../../images/homeBcg.jpeg';
import Banner from '../global/Banner';
import { PrimaryBtn } from '../global/Button';

const Header = () => {
    return (
        <Hero img={homeImg}>
            <Banner
                greeting='Hello, Welcome to '
                title='Beach Bum Nicks Resort'
                text='A vacation is having nothing to do & all day to do it in.'
            >
                <PrimaryBtn t='1rem'>
                    View Luxury
                </PrimaryBtn>
            </Banner>
        </Hero>
    );
};

export default Header;
