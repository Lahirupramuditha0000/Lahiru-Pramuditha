import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaPython,FaAngular,FaBootstrap,FaNodeJs} from 'react-icons/fa';
import './skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3 /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Python', icon: <FaPython /> },
    { name:'Angular',icon:<FaAngular/>},
    { name:'Boostrap', icon:<FaBootstrap/>},
    { name:'Node.js',icon:<FaNodeJs/>}
  ];

  return (
    <div>
      <h1 className='skilltit'>Skills</h1>
      <div className="skill-container">
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-4">
              <div className="skill-box">
                <div className="box-content">
                  <div className="icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
