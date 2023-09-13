import React, { useState } from 'react';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {


    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <header>
            <section className='head-sct-banner'>
                <p className="contact"><i class="bi bi-telephone-fill"></i> + 1234 4564 789</p>
                <p className="contact"><i class="bi bi-send-fill"></i> YOUREMAIL@EMAIL.COM</p>
                <p className="contact">3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</p>
            </section>
            <section className='head-menu'>
                <div className='logo'>VEGEFOODS</div>
                <button onClick={toggleMenu} className="toggle-button">
                    <i class="bi bi-list"></i>
                </button>
                <nav className={`menu${menuOpen ? ' open' : ''}`}>
                    <ul className='head-ul'>
                        <li className="head-li"><a href="">HOME</a></li>
                        <li className="head-li"><a href="">SHOP</a></li>
                        <li className="head-li"><a href="">ABOUT</a></li>
                        <li className="head-li"><a href="">BLOG</a></li>
                        <li className="head-li"><a href="">CONTACT</a></li>
                        <li className='head-li'><button className="btn-cart"><i class="bi bi-cart"></i></button></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}


export default Header