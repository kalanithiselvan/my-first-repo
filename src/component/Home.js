import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.fade-in-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Little Lemon</h1>
            <h2 className="hero-subtitle">Chicago</h2>
            <p className="hero-description">
              We are a family owned Mediterranean restaurant, 
              focused on traditional recipes served with a modern 
              twist.
            </p>
            <Link to="/booking" className="reserve-btn">
              Reserve a Table
            </Link>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop" 
              alt="Mediterranean cuisine" 
              className="hero-img"
            />
          </div>
        </div>
      </section>

      {/* Specials Section */}
      <section className="specials-section fade-in-on-scroll">
        <div className="specials-header">
          <h2 className="specials-title">This week's specials!</h2>
          <button className="online-menu-btn">Online Menu</button>
        </div>
        
        <div className="specials-grid">
          <div className="special-card">
            <img 
              src="https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
              alt="Greek salad" 
              className="special-image"
            />
            <div className="special-content">
              <div className="special-header">
                <h3 className="special-name">Greek Salad</h3>
                <span className="special-price">$12.99</span>
              </div>
              <p className="special-description">
                The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
              </p>
              <button className="order-btn">Order a delivery</button>
            </div>
          </div>

          <div className="special-card">
            <img 
              src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
              alt="Bruchetta" 
              className="special-image"
            />
            <div className="special-content">
              <div className="special-header">
                <h3 className="special-name">Bruchetta</h3>
                <span className="special-price">$5.99</span>
              </div>
              <p className="special-description">
                Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
              </p>
              <button className="order-btn">Order a delivery</button>
            </div>
          </div>

          <div className="special-card">
            <img 
              src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
              alt="Lemon Dessert" 
              className="special-image"
            />
            <div className="special-content">
              <div className="special-header">
                <h3 className="special-name">Lemon Dessert</h3>
                <span className="special-price">$5.00</span>
              </div>
              <p className="special-description">
                This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
              </p>
              <button className="order-btn">Order a delivery</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section fade-in-on-scroll">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">Little Lemon</h2>
            <h3 className="about-subtitle">Chicago</h3>
            <p className="about-description">
              Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
              Despite the city's diversity, the two brothers recognized the lack of 
              authentic Mediterranean cuisine in Chicago, and were inspired to bring 
              the flavors of their hometown in Italy to the people of Chicago.
            </p>
            <p className="about-description">
              The restaurant focuses on traditional recipes served with a modern twist. 
              The chefs use only the freshest ingredients and traditional cooking methods 
              to create dishes that are both authentic and innovative.
            </p>
          </div>
          <div className="about-images">
            <img 
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop" 
              alt="Restaurant interior" 
              className="about-img-1"
            />
            <img 
              src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop" 
              alt="Chef cooking" 
              className="about-img-2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;