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
        
    }
    return (
        <>
            <section className='product' >
                <div className='img' style={img}>
                    <label className={'lbl-disc-size' + (discount? ' show' : ' hide')}>{discSize +'%'}</label>
                </div>
                <div className='labels'>
                    <p className='lbl-name'>{name}</p>
                    <label style={discount ? {"marginRight" : "0.7em"} : {}} className={'lbl-old-price' + (discount ? ' show' : ' hide')}>{discount ? "$" : ""}{oldPrice}</label>
                    <label className='lbl-price'>${price}</label>
                </div>
            </section>
        </>
    )
}

export default Product