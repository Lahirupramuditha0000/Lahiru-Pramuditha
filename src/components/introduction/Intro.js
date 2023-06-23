// intro.js
import React from 'react';
import './intro.css';
import introPhoto from '../../assets/1.jpg';

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-photo">
        <img src={introPhoto} alt="" />
      </div>
      <div className="intro-text">
        <h1>Hi! I am Lahiru Pramuditha</h1>
        <p>
          I'm a skilled full-stack developer with expertise in HTML, CSS, JavaScript, Python, React, Angular, and more. With a strong passion for front-end development, I create engaging and responsive web applications that deliver exceptional user experiences.
          My proficiency in HTML, CSS, and JavaScript allows me to craft beautiful and interactive websites. I pay great attention to detail, ensuring that the design is visually appealing, user-friendly, and optimized for various devices and screen sizes.
          In addition to my front-end skills, I have extensive experience working with Python for backend development. I have built robust and scalable web applications using frameworks like Django and Flask, implementing server-side functionalities, and managing databases.
          I am also well-versed in React and Angular, two powerful JavaScript frameworks widely used in the industry. I leverage these frameworks to develop dynamic and efficient web applications, making use of their component-based architecture and rich ecosystem of libraries and tools.
          Throughout my career, I have successfully delivered numerous projects, collaborating with cross-functional teams and clients to bring their visions to life. My strong problem-solving abilities and dedication to delivering high-quality code ensure that I consistently meet project deadlines and exceed expectations.
          I'm always eager to expand my knowledge and stay up-to-date with the latest technologies and best practices in the field. I strive for continuous improvement, embracing new challenges and learning opportunities that come my way.
          Feel free to explore my portfolio and get in touch with me for any web development needs. I'm excited to work on new projects and contribute to creating exceptional online experiences.
          Thank you for visiting my website!"<br/>
        </p>
      </div>
    </div>
  );
};

export default Intro;
