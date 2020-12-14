import React from 'react';

// renders the resume

function Resume() {
    return (
        <section>
            <div className="resume">
                <h1 id="about">Resume</h1>
                <div className="logos">
                    <a href="https://www.linkedin.com/in/gautam-tankha-b248751/" target="_blank" alt="resume"> Download Resume </a>
                </div>

                <div className="resume">

                    <ul>
                        <p>Front End Proficiencies</p>
                        <li>
                            CSS
      </li>
                        <li>
                            Javascript
      </li>
                        <li>
                            React
      </li>
                        <li>
                            Handlebars
      </li>
                        <li>
                            HTML
      </li>
                        <li>
                            REST API Development (front-end)
      </li>
                    </ul>
                    <ul>
                        <p>Backend End Proficiencies</p>
                        <li>
                            Node.js
      </li>
                        <li>
                            SQL
      </li>
                        <li>
                            Mongo
      </li>
                        <li>
                            API development (backend)
      </li>
                    </ul>
                </div>
            </div>
        </section>

    );
}

export default Resume;