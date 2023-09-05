import React from 'react';
import './Product.css'
const Product = ({ imgPath = '', name = '', price = '', discount, discSize }) => {

    var oldPrice;
    if (discount == true) {
        var oldPrice = price;
        price -=Math.floor(price * (discSize / 100));
    }
    const img = {
        backgroundImage: `url("${imgPath}")`,
        height: '200px', 
        maxWidth: '100%',
        backgroundSize: '110%',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '60%',
        backgroundPositionY: '90%',
    }
    return (
        <>
            <section className='product' >
                <div style={img}>
                    <label className={'lbl-disc-size' + (discount? ' show' : ' hide')}>{discSize +'%'}</label>
                </div>
                <div className='labels'>
                    <p className='lbl-name'>{name}</p>
                    <label className={'lbl-old-price' + (discount ? ' show' : ' hide')}>${oldPrice}</label>
                    <label className='lbl-price'>${price}</label>
                </div>
            </section>
        </>
    )
}

export default Product