import React from 'react';
import InfoCard from './InfoCard';
import './Information.css'

const Information = () => {
    return (
        <>
            <section className='sct-info-cards'>
                <InfoCard className="bi bi-truck"
                    title='FREE SHIPPING'
                    desc='on order over $100'
                    backgroundColor='#E6B4D7'
                />
                <InfoCard className="bi bi-wind"
                    title='ALWAYS FRESH'
                    desc='product well package'
                    backgroundColor='#DFC499'

                />
                <InfoCard className="bi bi-award"
                    title='SUPERIOR QUALITY'
                    desc='quality products'
                    backgroundColor='#A3D1DF'
                />
                <InfoCard className="bi bi-wechat"
                    title='SUPPORT'
                    desc='24/7 support'
                    backgroundColor='#DDD89A'
                />

            </section>
        </>
    )
}

export default Information