import React from 'react';
import linkedinLogo from "../../assets/img/linkedin_logo.png";
import githubLogo from "../../assets/img/git-hub_logo.png";
import selfImage from "../../assets/img/gtimage.jpg";

function About() {
  return (
    <section className="aboutme">
    <h1 id="about">About Me</h1>
    <img src={selfImage} className="my-1" style={{ width: "10%" }} alt="cover" />
    <div className= "aboutme_desc">
        <p>
        Everything about technology excites me. My passion is the world of products. Over the years, I have overseen development of several cutting edge global payment products.  In the recent past, I have taken a keen interest in web technologies and development. This website presents some of the web development work over the years. Most of the front-end development work has been done in HTML, CSS and Javascript. Overtime, I will continue to add my latest projects on this website.<br></br><br></br>

        Outside of my technical pursuits, I enjoy playing tennis, reading books and spending time with family.
      </p>
      </div>
      <div className= "logos">
      <a href="https://www.linkedin.com/in/gautam-tankha-b248751/" target="_blank"> <img src={linkedinLogo} style={{ width: "25%" }} alt="logo"/></a>
      <a href="https://github.com/gtankha" target="_blank"> <img src={githubLogo} style={{ width: "25%" }} alt="logo"/></a>
      </div>

  </section>

  );
}

export default About;