import React, { useEffect, useState, useRef } from 'react';
import './BestPrice.css'
import productsData from '../../../resources/products.json'

const BestPrice = () => {
    const [days, setTimerDays] = useState('00');
    const [hours, setTimerHours] = useState('00');
    const [min, setTimerMin] = useState('00');
    const [sec, setTimerSec] = useState('00');
    var interval = useRef();

    const calculateRemainingTime = () => {

        var targetDate = new Date('2023-12-31T00:00:00');

        interval = setInterval(() => {
            const now = new Date();
            const timeDifference = targetDate - now;
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            if (timeDifference < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMin(minutes);
                setTimerSec(seconds);

            }
        }, 1000);
    };

    useEffect(() => {
        calculateRemainingTime();
        return () => {
            clearInterval(interval.current);
        }
    })

    var product = 
    {
        name: "Spinach",
        category: "Vegetables",
        imgPath: "https://image.posttoday.com/media/content/2019/11/05/48EB20AB4757443E95748CABF9D32BB7.jpg",
        price: "150",
        discount: true,
        discountSize: "50"
    }
    const bgndImg = {
        backgroundImage: `url('${product.imgPath}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    var oldPrice = 0;
    var price = product.price;
    if (product.discount === true) {
        oldPrice = product.price;
        price -= Math.floor(product.price * (product.discountSize / 100));
    }
    return (
        <>
            <section className='sct-best-price' style={bgndImg}>
                <h4 className='bp-subtitle'>Best Price For You</h4>
                <h1 className='bp-title'>Deal Of the day</h1>

                <p className='bp-p'>
                    Far far away, behind the world mountains, far from the countries Vokalia and Consonantia.
                </p>

                <h2 className='bp-item'>Spinach</h2>
                <label className='bp-old-price'>${oldPrice}</label>
                <label className='bp-price'>${price}</label>


                <ul className='bp-calendar'>
                    <li className='bp-li'>
                        <p className='bp-number'>{days}</p>
                        <p className='bp-text'> días</p>
                    </li>
                    <li className='bp-li'>
                        <p className='bp-number'>{hours}</p>
                        <p className='bp-text'> horas</p>
                    </li>
                    <li className='bp-li'>
                        <p className='bp-number'>{min}</p>
                        <p className='bp-text'> minutos</p>
                    </li>
                    <li className='bp-li'>
                        <p className='bp-number'>{sec}</p>
                        <p className='bp-text'> segundos</p>
                    </li>
                </ul>

            </section>
        </>
    )
}

export default BestPrice
