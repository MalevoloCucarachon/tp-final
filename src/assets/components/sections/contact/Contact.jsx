import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <>
            <section className='ctc-contact'>
                <div className='ctc-text'>
                    <h1>Subcribe to our Newsletter</h1>
                    <h5>Get e-mail updates about our latets shops and special offers</h5>

                </div>
                <div className='inputs'>
                    <input type="text" name="email" value='Enter email addres' />
                    <button>Subscribe</button>
                </div>
            </section>
        </>
    )
}

export default Contact