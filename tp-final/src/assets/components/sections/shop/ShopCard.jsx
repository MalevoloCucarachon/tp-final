import React from 'react';
import './ShopCard.css';


const ShopCard = ({ category = '', imgPath = '' }) => {

  const imgSrc = {

    backgroundImage: `url("${imgPath}")`
  };

  return (
    <>
      <section className='shop-card' style= {imgSrc}>
        <label>{category}</label>
      </section>
    </>
  )
}

export default ShopCard