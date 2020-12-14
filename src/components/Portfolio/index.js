import React from 'react';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import photo1 from "../../assets/img/Zoo_Keeper.png";
import photo2 from "../../assets/img/Password_Generator.png";
import photo3 from "../../assets/img/flights-animation.gif";
import photo4 from "../../assets/img/Run_Website_Website.png";
import photo5 from "../../assets/img/Pizza_Hunt.png";
import photo6 from "../../assets/img/employerapp.png";
import githubLogo from "../../assets/img/git-hub_logo.png";

const currentWebsite = [{
    name: "Zoo Keeper",
    github:
        "https://github.com/gtankha/zookeepr",
    url:
        "https://damp-refuge-76341.herokuapp.com/",
    photo: photo1
},
{
    name: "Password Generator",
    github:
        "https://github.com/gtankha/passwordgenerator",
    url:
        "https://gtankha.github.io/passwordgenerator/",
        photo: photo2
},
{
    name: "Travel App",
    github:
        "https://github.com/gtankha/bootcamptravel",
    url:
        "https://bootcamp-travel.herokuapp.com/",
        photo: photo3
},
{
    name: "Run Blog Website",
    github:
        "https://github.com/gtankha/run-buddy",
    url:
        "https://gtankha.github.io/run-buddy/",
        photo: photo4
},
{
    name: "Pizza Hunt",
    github:
        "https://github.com/gtankha/pizza-hunt",
    url:
        "https://afternoon-plateau-17223.herokuapp.com/",
        photo: photo5
},
{
    name: "Employer App",
    github:
        "https://github.com/gtankha/employment-app/",
    url:
        "https://stark-atoll-20406.herokuapp.com/",
        photo: photo6
}];

function Portfolio() {
    return (

        <section>
            <div className="container">
                <div className="row justify-content-md-center">
                    {currentWebsite.map((website,index) => (
                        <div className="websiteimages w-50 col-md-4">
                            <MDBView hover zoom>
                               
                                <img
                                    src={website.photo}
                                    alt="Zoo Keeper"
                                    className="img-thumbnail mx-1"
                                    key={website.name}
                                />
                                <MDBMask overlay="blue-grey-strong align-middle">
                                    <div className="logos align-middle mt-5 ml-5">
                                        <a href={website.url} target="_blank"><span className="webdescription h6 align-middle "> {website.name}</span> </a>
                                        <a href={website.github} target="_blank"> <img className="webimage" src={githubLogo} style={{ width: "25%" }} alt="logo" /></a>
                                    </div>

                                </MDBMask>
                                
                            </MDBView>


                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


export default Portfolio;