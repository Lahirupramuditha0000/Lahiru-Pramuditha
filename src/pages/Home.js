import React from 'react';
import Intro from '../components/introduction/Intro';
import Skill from '../components/skills/Skill';
import Certficates from '../components/certficategaller/Certficates';
import Footer from '../components/footer/Footer';
import './home.css'

export default function Home() {
  return (
    <div>
      
      {/* Content of the home page */}
      <Intro/>
     {/*skills*/}<br/>
     <Skill/><br/>

     {/* certficates gallery*/}
     <Certficates/>
    



    {/*footer*/}
    <Footer/>
    </div>
  );
}
