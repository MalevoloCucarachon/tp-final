import React from 'react';

const Contact = () => {
    return (
        <>
        <section className='contact'>
            <h1>Subcribe to our Newsletter</h1>
            <h5>Get e-mail updates about our latets shops and special offers</h5>
            <div>
                <input type="text" name="email" value='Enter email addres' />
                <button>Subscribe</button>
            </div>
        </section>
        </>
    )
}

export default Contact