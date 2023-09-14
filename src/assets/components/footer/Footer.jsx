import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        //foot-sct-display === Sección desplegable del footer 
        <>
            <section className='foot-sct-display'>

                <div className='div-about-us-desc'>
                    <h4>Vegefoods</h4>
                    <p>
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia.
                    </p>

                    <div className='div-social-media'>
                        <i className="bi bi-twitter"></i>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-instagram"></i>
                    </div>
                </div>

                <div className='div-menu'>
                    <h4>Menu</h4>
                    <nav className='menu-nav'>
                        <ul className='menu-nav-list'>
                            <li><a href="">Shop</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Journal</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>

                <div className='div-help'>
                    <h4>Help</h4>
                    <nav>
                        <ul className='help-nav-list'>
                            <li><a href="">Shipping Info</a></li>
                            <li><a href="">Returns & Exchange</a></li>
                            <li><a href="">Terms & Conditions</a></li>
                            <li><a href="">Privacy Police</a></li>
                            <li><a href="">FAQs</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </nav>
                </div>

                <div className='div-questions'>
                    <h4>Have a Questions?</h4>
                    <p><i class="bi bi-geo-alt-fill"></i> 203 Fake st. Mountain View, San Francisco, California, USA</p>
                    <p><i class="bi bi-telephone-fill"></i> +12 345 678 900</p>
                    <p><i class="bi bi-envelope-fill"></i> info@domain.com</p>

                </div>

            </section>

            <h5 className='sign'>Copyright ©2023 All right reserverd | this template is made with love by Matias Carini | @Malevolo.Cucarachon_ </h5>
        </>
    )
}

export default Footer