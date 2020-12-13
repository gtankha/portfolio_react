import React from 'react';


function Nav() {

    return (
        <header>

            <nav className="d-flex">
                <h2 className="text-secondary font-weight-bold">
                    Gautam Tankha
                    </h2>
                <ul className="d-flex">

                    <ul className="mx-2 text-secondary">
                        <a href="#about">
                            About me
                          </a>
                    </ul>
                    <ul className="mx-2 text-secondary">

                        <span> Portfolio</span>

                    </ul>
                    <ul className="mx-2 text-secondary">

                        <span> Contact </span>

                    </ul>
                    <ul className="mx-2 text-secondary">

                        <span> Resume</span>

                    </ul>

                </ul>
            </nav>
        </header>
    );
}

export default Nav;