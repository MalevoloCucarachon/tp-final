import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        //foot-sct-display === Sección desplegable del footer 
        <>
            <button className='btn-display'></button>
            <section className='foot-sct-display show hide'>

                <div className='div-about-us-desc'>
                    <h4>Vegefoods</h4>
                    <p>
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia.
                    </p>
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
                    <img src="" alt="GPS icon" />
                    <p>203 Fake st. Mountain View, San Francisco, California, USA</p>
                    <img src="" alt="Telephone icon" />
                    <p>+12 345 678 900</p>
                    <img src="" alt="E-Mail icon" />
                    <p>info@domain.com</p>

                </div>

                <div className='div-social-media'>
                    <img src="" alt="twitter" />
                    <img src="" alt="facebook" />
                    <img src="" alt="instagram" />
                </div>
            </section>

            <h5>Copyright ©2023 All right reserverd | this template is made with love by Matias Carini | @Malevolo.Cucarachon_ </h5>
        </>
    )
}

export default Footer