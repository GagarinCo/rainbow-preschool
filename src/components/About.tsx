import React from 'react';
import { Shield, BookOpen, Home, Smile } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2>About Rainbow Preschool and Day Care</h2>
          <p>Building bright futures, one child at a time</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Our Story</h3>
            <h4>Trusted and respected by families. A state-licensed preschool and day care in business for 30+ years</h4>
            <p>
              Our philosophy is to build positive self-esteem in each child.
              <br />
              Founded with a vision to create a warm, nurturing environment where children feel safe, 
              loved, and inspired to learn. 
              <br />
              At Rainbow Preschool & Day Care, we believe every child is unique and deserves personalized attention to help them thrive.
              <br />
              We are a home away from home.
            </p>
            
            <h3>Our Mission</h3>
            <p>
              To provide exceptional early childhood education in a loving, safe environment that 
              promotes social, emotional, physical, and cognitive development through play-based learning.
            </p>
          </div>

          <div className="about-values">
            <div className="value-item">
              <div className="value-icon">
                <Shield />
              </div>
              <h4>Safety First</h4>
              <p>Secure environment with certified staff and modern safety protocols</p>
            </div>

            <div className="value-item">
              <div className="value-icon">
                <BookOpen />
              </div>
              <h4>Learning Through Play</h4>
              <p>Educational activities designed to make learning fun and engaging</p>
            </div>

            <div className="value-item">
              <div className="value-icon">
                <Home />
              </div>
              <h4>Home Away from Home</h4>
              <p>Warm, welcoming atmosphere where children feel comfortable and secure</p>
            </div>

            <div className="value-item">
              <div className="value-icon">
                <Smile />
              </div>
              <h4>Happy Children</h4>
              <p>Our priority is ensuring every child leaves with a smile every day</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

