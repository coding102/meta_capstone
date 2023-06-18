import React from 'react';
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";

const Footer = () => {
  return (
    <div>
        <div className="footer-background">
            <div className="footer-container">
                <img src={ Logo } alt="Little Lemon logo" />
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <div className="footer-content">
                    <div className="locations">
                        <h5>LOCATIONS</h5>
                        <ul>
                            <li>ipsum</li>
                            <li>Lorem</li>
                            <li>amet</li>
                        </ul>
                    </div>
                    <div className="opening-times">
                        <h5>OPENING TIMES</h5>
                        <ul>
                            <li>Mon - Wed: 8:00AM - 1:00PM</li>
                            <li>Fri: 8:00AM - 1:00PM</li>
                            <li>Sat - Sun: 10:30AM - 12:00AM</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h5>CONTACT US</h5>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                            <li>Tel: 111 1111 1111</li>
                            <li>Email: minim@gmail.com</li>
                        </ul>
                    </div>
            </div>
            <div className="copyright">
                <p>© 2023 Little Lemon</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
