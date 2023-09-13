import React from 'react';
import ShopCard from './ShopCard';
import './Shop.css';

const Shop = () => {
    const shopImg = {
        backgroundImage: `url('https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')`
    }
    return (
        <>
            <section className='shop'>
                <div className='categories'>
                    <ShopCard category='Fruits'
                        imgPath='https://images.unsplash.com/photo-1623227866882-c005c26dfe41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1665&q=80'
                        alt='strawberry'
                    />
                    <ShopCard category='Vegetables'
                        imgPath='https://images.unsplash.com/photo-1509622905150-fa66d3906e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80'
                        alt='pumpkins'
                    />
                </div>
                <div className='categories'>
                    <div className='shop-center' style={shopImg} >
                        <p className='vegetables'>Vegetables</p>
                        <p className='text'>Protect the health of every home</p>
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className='categories'>
                    <ShopCard category='Juices'
                        imgPath='https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80'
                        alt='juices'
                    />
                    <ShopCard category='Drieds'
                        imgPath='https://images.unsplash.com/photo-1556216583-cb1ac9559189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80'
                        alt='seeds'
                    />
                </div>
            </section>
        </>
    )
}

export default Shop