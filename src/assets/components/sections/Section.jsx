import React from 'react';
import Title from './title/Title';
import Information from './information/Information.jsx';
import BestPrice from './bestprice/BestPrice.jsx';
import Shop from './shop/Shop';
import Featured from './featured/Featured';

const Section = () => {
    return(
        <>
        <Title/>
        <Information/>
        <Shop/>
        <Featured/>
        <BestPrice/>
        </>
    )
}

export default Section