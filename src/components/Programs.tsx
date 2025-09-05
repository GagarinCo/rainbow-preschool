import React from 'react';
import './Programs.css';
import toddlerClass from '../images/toddler_class.jpeg';
import preKClass from '../images/pre_k_class.jpeg';
import afterschoolClass from '../images/afterschool_class.jpeg';

const Programs: React.FC = () => {
  const programs = [
    {
      id: 1,
      title: "Toddler Class",
      age: "Ages 2-3",
      image: toddlerClass,
      description: "Active learning through play, exploration, and social interaction in a structured environment.",
      features: ["Potty training support", "Language development", "Gross motor skills", "Social skills building", "Shapes and colors", "Numbers 1-10", "Socialization", "Art"]
    },
    {
      id: 2,
      title: "Pre-K Class",
      age: "3 - 5 years",
      image: preKClass,
      description: "School readiness program focusing on academic foundations and life skills.",
      features: ["Letter & number recognition", "Science experiments", "Art & creativity", "Kindergarten prep", "Alphabet", "Numbers 0-20", "Creative Expression", "Science and Art", "Socialization", "Language Development"]
    },
    {
      id: 3,
      title: "After-School",
      age: "All ages",
      image: afterschoolClass,
      description: "Extra-curricular activities to enhance learning and development.",
      features: ["Music & movement", "Art & crafts", "Outdoor play", "Field trips", "Snacks", "Outdoor Play", "Cooking", "Arts and Crafts", "Science", "Music and Dance"]
    }
  ];

  return (
    <section id="programs" className="programs">
      <div className="programs-container">
        <div className="programs-header">
          <h2>Our Programs</h2>
          <p>Age-appropriate learning experiences designed for every stage of development</p>
        </div>

        <div className="programs-grid">
          {programs.map((program) => (
            <div key={program.id} className="program-card">
              <div className="program-image">
                <img src={program.image} alt={program.title} />
              </div>
              <h2>{program.title}</h2>
              <p className="program-age">{program.age}</p>
              <p className="program-description">{program.description}</p>
              
              <ul className="program-features">
                {program.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="programs-cta">
          <h3>Ready to Start Your Child's Journey?</h3>
          <p>Contact us today to learn more about our programs and schedule a tour.</p>
          <a href="#contact" className="btn btn-primary">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Programs;
