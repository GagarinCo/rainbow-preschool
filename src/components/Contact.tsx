import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    programInterest: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = `New message from ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Program Interest: ${formData.programInterest}`,
      `Message: ${formData.message}`
    ].join('\n');
    
    // Create mailto link
    const mailtoLink = `mailto:rosiebabad@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client in new tab
    window.open(mailtoLink, '_blank');
    
    // Show confirmation
    alert('Thank you for your message! Your email client will open to send the message.');
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you and answer any questions</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Ready to start your child's journey with us? Contact us today!</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone />
                </div>
                <div className='contact-item-text'>
                  <h4>Phone</h4>
                  <p><a href="tel:+16503674025">&#40;650&#41; 367-4025</a> (Call)<br /><a href="tel:+16507849131">(650) 784-9131</a> (Call/Text)</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin />
                </div>
                <div className='contact-item-text'>
                  <h4>Address</h4>
                  <p>Roosevelt Elementary School (Room 33)<br /><a href="https://maps.app.goo.gl/WoKJRAJBJ2RzcVVr9" target="_blank">2434 McGarvey Ave. Redwood City, CA 94061</a></p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Clock />
                </div>
                <div className='contact-item-text'>
                  <h4>Hours</h4>
                  <p>Monday - Friday<br />7:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <select
                  name="programInterest"
                  value={formData.programInterest}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Program</option>
                  <option value="toddler class">Toddler Class (Ages 2-3)</option>
                  <option value="pre-k class">Pre-K Class (Ages 4-5)</option>
                  <option value="after-school program">After-School Program</option>
                </select>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
