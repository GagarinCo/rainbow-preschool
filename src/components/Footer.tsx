import React from 'react';
import { Heart } from 'lucide-react';
import './Footer.css';
import yelpLogo from '../images/yelp_logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🌈 Rainbow Preschool & Day Care</h3>
            <p>Nurturing young minds with love, care, and quality education since 1995.</p>
            <div className="social-links">
              <a href="https://www.yelp.com/biz/rainbow-preschool-and-day-care-redwood-city" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src={yelpLogo} alt="Yelp" width="60" height="60" />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Programs</h4>
            <ul>
              <li><a href="#programs">Toddler Class</a></li>
              <li><a href="#programs">Pre-K Class</a></li>
              <li><a href="#programs">After-School Program</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <p><b>Roosevelt Elementary School(Room 33)</b></p>
            <p><b>Address: </b> 
              <a href="https://maps.app.goo.gl/WoKJRAJBJ2RzcVVr9" target="_blank">2434 McGarvey Ave.<br />Redwood City, CA 94061</a>
            </p>
            <p><b>Phone: </b> 
              <a href="tel:+16503674025">&#40;650&#41;367-4025</a>
              (Call)
            </p>
            <p><b>Cell: </b>
              <a href="tel:+16507849131">&#40;650&#41;784-9131</a>
              (Call/Text)
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Rainbow Preschool & Day Care. All rights reserved.</p>
          <p>Made with <Heart size={16} className="heart-icon" /> for happy children by <a href="https://gagarinco.github.io/kalynovsky/" target="_blank" rel="noopener noreferrer">Kalynovsky</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
