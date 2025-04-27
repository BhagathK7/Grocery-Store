import React from 'react';
import '../assets/styles.css';

const Home = () => {
  return (
    <>
      <header className="header">
        <a href="#" className="logo"><i className="fas fa-shopping-basket"></i> BioFresh </a>

        <nav className="navbar">
          <a href="/">home</a>
          <a href="#features">features</a>
          <a href="#products">products</a>
          <a href="#categories">categories</a>
          <a href="#review">review</a>
          <a href="#blogs">blogs</a>
        </nav>

        <div className="icons">
          <div className="fas fa-bars" id="menu-btn"></div>
          <div className="fas fa-search" id="search-btn"></div>
          <div className="fas fa-shopping-cart" id="cart-btn"></div>
          <div className="fas fa-user" id="login-btn"></div>
        </div>
      </header>

      <section className="home" id="home">
        <div className="content">
          <h3>fresh and <span>organic</span> products for your</h3>
          <p>Organica is where early adopters and innovation sockers find lively, imaginative tech before it hits the mainstream.</p>
          <a href="#" className="btn">shop now</a>
        </div>
      </section>
    </>
  );
};

export default Home;
