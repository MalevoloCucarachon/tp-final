import React from 'react';
import Title from './title/Title';
import Information from './information/Information.jsx';
import BestPrice from './bestprice/BestPrice.jsx';
import Shop from './shop/Shop';
import Featured from './featured/Featured';
import Contact from './contact/Contact';
import Testimony from './testimony/Testimony';
import Sponsors from './sponsors/Sponsors'

const Section = () => {
    return(
        <>
        <Title/>
        <Information/>
        <Shop/>
        <Featured/>
        <BestPrice/>
        <Testimony/>
        <Sponsors/>
        <Contact/>
        </>
    )
}

export default Section