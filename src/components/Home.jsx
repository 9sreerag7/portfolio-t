import React from "react";
import "./Home.css";
import profileImg from "../assets/profile.jpg";
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-card">
        <div className="home-img">
          <img src={profileImg} alt="Profile" />
        </div>
        <div className="home-content">
          <h1>Hello, I'm <span>Sreerag</span></h1>
          <h2>
            <Typewriter
              words={["Full-Stack Explorer", "Creative Web Developer", "Open Source Contributor"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <p>
            From Kerala, I’m passionate about building futuristic websites, solving problems with clean code, and exploring both design and backend technologies.
            <br />Currently deep diving into JavaScript, React.js, and backend integration.
            <br />Let’s collaborate and make something awesome!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;

