import React from 'react';
import '../assets/styles.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <h3>Grocery Store</h3>
      <div className="social-icons">
        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
      </div>
      <div className="contact-info">
        <p>Email: support@grocerystore.com</p>
        <p>Phone: +1 234 567 890</p>
      </div>
      <div className="footer-nav">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Sitemap</a>
      </div>
    </footer>
  );
};

export default Footer;
