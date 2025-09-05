import React from 'react';
import { Heart, Star, Users } from 'lucide-react';
import './Hero.css';
import happyKids from '../images/happy_kids.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">Rainbow Preschool & Day Care</span>
          </h1>
          <p className="hero-subtitle">
            Where every child's journey begins with love, learning, and laughter.
            We provide a nurturing environment where children can grow, explore, and discover their unique potential through play-based learning and caring guidance.
          </p>
          
          <div className="hero-features">
            <div className="feature">
              <Heart className="feature-icon" />
              <span>Loving Care</span>
            </div>
            <div className="feature">
              <Star className="feature-icon" />
              <span>Quality Education</span>
            </div>
            <div className="feature">
              <Users className="feature-icon" />
              <span>Small Groups</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Contact us to schedule a visit</a>
          </div>
        </div>
        
        <div className="hero-image">
          <img 
            src={happyKids} 
            alt="Happy children at Rainbow Preschool & Day Care" 
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
