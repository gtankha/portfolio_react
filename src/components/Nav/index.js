import React from 'react';


function Nav(props) {


    const {
        setSectionSelected,
        sectionSelected, 
      } = props;

    return (
        <header>

            <nav className="headerdata d-flex w-auto">
                <h2 className="font-weight-bold">
                Gautam Tankha
                    </h2>
                <ul className="d-flex flex-wrap">

                    <ul className="mx-2 font-weight-bold">
                        <a href="#about" onClick={() => setSectionSelected("About Me")}>
                            <span>About me</span>
                          </a>



                    </ul>
                    <ul className="mx-2 font-weight-bold">

                    <a href="#portfolio" onClick={() => setSectionSelected("Portfolio")}>
                        <span> Portfolio</span>
                        </a>

                    </ul>
                    <ul className="mx-2 font-weight-bold">


                    <a href="#contactform" onClick={() => setSectionSelected("ContactForm")}>
                        <span> Contact </span>
                        </a>

                    </ul>
                    <ul className="mx-2 font-weight-bold">
                    <a href="#resume" onClick={() => setSectionSelected("Resume")}>
                        <span> Resume</span>
                    </a>
                    </ul>

                </ul>
            </nav>
        </header>
    );
}

export default Nav;