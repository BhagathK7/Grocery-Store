import React, { useState } from 'react';
import ProductCard from '../components/ProductCard.js';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar.js';
import '../assets/styles.css'; // <- NEW STYLES for better UI

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const features = [
    {
      id: 'fresh',
      title: 'Fresh and Organic',
      image: '/images/feature-img-1.png',
      short: 'Freshness guaranteed, always.',
      details: [
        'Locally sourced produce delivered daily.',
        'No chemicals or preservatives.',
        'Picked and packed within 24 hours.',
        'Certified organic products for a healthier you.',
        '100% customer satisfaction guaranteed.'
      ]
    },
    {
      id: 'delivery',
      title: 'Free Delivery',
      image: '/images/feature-img-2.png',
      short: 'On all your orders, no minimum.',
      details: [
        'Available across major cities.',
        'Real-time delivery tracking.',
        'Contactless delivery options.',
        'Free returns and exchanges.',
        'Fast and reliable delivery partners.'
      ]
    },
    {
      id: 'payments',
      title: 'Easy Payments',
      image: '/images/feature-img-3.png',
      short: 'Multiple secure payment options.',
      details: [
        'Credit/Debit cards, UPI, Netbanking.',
        'Fully encrypted & secure gateway.',
        'Instant refunds and easy returns.',
        'Payment plans available for select items.',
        'No hidden fees or charges.'
      ]
    }
  ];

  return (
    <>
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      {sidebarOpen && <Sidebar />}

      <section className="home section-hero" id="home">
        <div className="content">
          <h3>Fresh and <span>Organic</span> Products</h3>
          <p>Organica is where early adopters and innovation seekers find lively, imaginative tech before it hits the mainstream.</p>
          <Link to="/products" className="btn btn-primary">Shop Now</Link>
        </div>
      </section>

      <section className="features section-light" id="features">
        <h1 className="heading">Our <span>Features</span></h1>
        <div className="box-container">
          {features.map(feature => (
            <div
              key={feature.id}
              className="box feature-box"
              onClick={() => setActiveFeature(feature.id)}
              style={{ cursor: 'pointer' }}
            >
              <img src={feature.image} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.short}</p>
            </div>
          ))}
        </div>

        {/* Feature Details Pop-up */}
        {activeFeature && (
          <div className="feature-popup">
            <div className="popup-content">
              <button className="popup-close" onClick={() => setActiveFeature(null)}>×</button>
              <h2>{features.find(f => f.id === activeFeature).title} - Details</h2>
              <ul className="feature-details">
                {features.find(f => f.id === activeFeature).details.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>

      <section className="products section-dark" id="products">
        <h1 className="heading">Our <span>Products</span></h1>
        <div className="row">
          <ProductCard image="/images/Apples.jpg" name="Fresh Apples" price="Rs.2.99 / kg" />
          <ProductCard image="/images/bananas.jpg" name="Organic Bananas" price="Rs.0.99 / kg" />
          <ProductCard image="/images/carrots1.jpg" name="Fresh Carrots" price="Rs.1.49 / kg" />
        </div>
      </section>

      <section className="categories section-light" id="categories">
        <h1 className="heading">Product <span>Categories</span></h1>
        <div className="box-container">
          <div className="box category-box">
            <img src="/images/cat-1.png" alt="Category 1" />
            <h3>Vegetables</h3>
            <p>Up to 45% off</p>
            <Link to="/products/vegetables" className="btn btn-secondary">Shop Now</Link>
          </div>
          <div className="box category-box">
            <img src="/images/cat-2.png" alt="Category 2" />
            <h3>Fruits</h3>
            <p>Up to 30% off</p>
            <Link to="/products" className="btn btn-secondary">Shop Now</Link>
          </div>
          <div className="box category-box">
            <img src="/images/cat-3.png" alt="Category 3" />
            <h3>Dairy</h3>
            <p>Up to 20% off</p>
            <Link to="/products" className="btn btn-secondary">Shop Now</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
