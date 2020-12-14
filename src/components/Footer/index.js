import React from 'react';
import linkedinLogo from "../../assets/img/linkedin_logo.png";
import githubLogo from "../../assets/img/git-hub_logo.png";


function Footer() {

    return (
< section >
        <div className="logos">

            <a style={{ width: "25%" }} href="https://www.linkedin.com/in/gautam-tankha-b248751/" target="_blank"> <img src={linkedinLogo} style={{ width: "25%" }} alt="logo" /></a>
            <a style={{ width: "25%" }} href="https://github.com/gtankha" target="_blank"> <img src={githubLogo} style={{ width: "25%" }} alt="logo" /></a>
        </div>

 </section >

    )
}


export default Footer; 