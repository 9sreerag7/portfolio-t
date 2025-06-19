import React from 'react';
import './About.css';
import profilePic from '../assets/profile.jpg'; // Make sure this path is correct

const About = () => {
  return (
    <section id="about">
      <div className="about-card">
        <img src={profilePic} alt="Profile" className="about-img" />
        <div className="about-content">
          <h2 className="about-name">Sundara Siva Sreerag</h2>
          <p className="about-title">Tech Enthusiast | Developer | Creative Mind</p>
          <p className="about-desc">
            I’m a passionate developer from Kerala, exploring web development, UI/UX, and technology. 
            I love building creative projects and collaborating with enthusiastic teams! 
            Interested in modern technologies, exploring in React.js, JavaScript, and creative design, 
            actively participating in tech communities, open source, and student tech events.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;