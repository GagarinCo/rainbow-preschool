import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Reviews.css';

const Reviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: "Simone B.",
      rating: 5,
      text: "This is a truly wonderful place for young children and I can't recommend it enough. Our daughter was there for about 8 months before starting TK and I only wish I had found it sooner.",
    },
    {
      id: 2,
      name: "Alejandra V.",
      rating: 5,
      text: "Mrs. Rosanne and Cesar are amazing with the kids. Everyday they have new activities and the kids learn so much. Art, cutting, letters, brain teasers, dancing/ PE. They do it all! Highly recommend!",
    },
    {
      id: 3,
      name: "Iryna S.",
      rating: 5,
      text: "I can't say how much we all love this business. Ms Roseanne and Caesar are simply awesome. They truly care for kids. My daughter really thrived going to them.",
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={index < rating ? 'star filled' : 'star'}
        fill={index < rating ? '#ffd700' : 'none'}
      />
    ));
  };

  return (
    <section id="reviews" className="reviews">
      <div className="reviews-container">
        <div className="reviews-header">
          <h2>What Parents Say</h2>
          <p>Hear from families who trust us with their children's care and education</p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="review-info">
                  <h4>{review.name}</h4>
                  <div className="review-rating">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <div className="review-quote">
                  <Quote size={24} />
                </div>
              </div>
              
              <div className="review-content">
                <p>{review.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <a 
            href="https://www.yelp.com/biz/rainbow-preschool-and-day-care-redwood-city" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Read More Reviews on Yelp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

