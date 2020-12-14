import React from 'react';
import linkedinLogo from "../../assets/img/linkedin_logo.png";
import githubLogo from "../../assets/img/git-hub_logo.png";


function Footer() {
// footer with the linked and github logos
    return (
< section >
        <div className="logos">

            <a style={{ width: "20%" }} href="https://www.linkedin.com/in/gautam-tankha-b248751/" target="_blank"> <img src={linkedinLogo} style={{ width: "18%" }} alt="logo" /></a>
            <a style={{ width: "20%" }} href="https://github.com/gtankha" target="_blank"> <img src={githubLogo} style={{ width: "18%" }} alt="logo" /></a>
        </div>

 </section >

    )
}


export default Footer; 