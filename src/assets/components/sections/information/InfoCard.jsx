import React from 'react';
import './InfoCard.css'
const InfoCard = ({className='', title = '', desc = '', backgroundColor =''}) => {

    const cardStyle = {
        backgroundColor: backgroundColor
    };
    return(
        <>
            <section className='card'>
                <div className='image' style={cardStyle}>
                    <i class={className}></i>
                </div>
                    <p className='p1'>{title}</p>
                    <p className='p2'>{desc}</p>
            </section>
        </>
    )
}

export default InfoCard