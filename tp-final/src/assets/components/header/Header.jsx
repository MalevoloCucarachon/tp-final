import React from 'react';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    return (
        <>
            <section className='head-sct-banner'>
                <p className="contact"><i class="bi bi-telephone-fill"></i> + 1234 4564 789</p>
                <p className="contact"><i class="bi bi-send-fill"></i> YOUREMAIL@EMAIL.COM</p>
                <p className="contact">3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</p>
            </section>
            <section className='head-menu'>
                <h1 className='tittle'>VEGEFOODS</h1>
                <nav className='head-nav'>
                    <ul className='head-ul'>
                        <li className="head-li"><a href="">HOME</a></li>
                        <li className="head-li"><a href="">SHOP</a>
                            <select name="shop" id="shop">
                                <option value="fruits">Fruits</option>
                                <option value="vegetables">Vegetables</option>
                                <option value="juices">Juices</option>
                                <option value="dried">Dried</option>
                            </select></li>
                        <li className="head-li"><a href="">ABOUT</a></li>
                        <li className="head-li"><a href="">BLOG</a></li>
                        <li className="head-li"><a href="">CONTACT</a></li>
                        <li className='head-li'><button className="btn-cart"><i class="bi bi-cart"></i></button></li>
                    </ul>
                </nav>
            </section>
        </>
    )
}

export default Header