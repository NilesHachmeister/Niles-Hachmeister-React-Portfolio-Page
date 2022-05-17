import React from 'react';
import '../styles/Resume.css';


function Resume() {

    // returning the resume section of my page
    return (
        <div id="resume" className="container">

            <h2>Resume</h2>
            <p>Download my  <a id="resume-link" href="./images/Niles-Hachmeister-Resume.pdf" download="NilesHachmeister">
                Resume
            </a>
            </p>
            <h3>Front-end Proficencies</h3>
            <ul className="list-group">
                <li className="list-item">HTML</li>
                <li className="list-item">CSS</li>
                <li className="list-item">JavaScript</li>
                <li className="list-item">JQuery</li>
                <li className="list-item">Responsive Designs</li>
                <li className="list-item">React</li>
                <li className="list-item">Bootstrap</li>
            </ul>
            <h3>Back-end Proficencies</h3>
            <ul className="list-group">
                <li className="list-item">APIs</li>
                <li className="list-item">Node</li>
                <li className="list-item">Express</li>
                <li className="list-item">MySQL, Sequelize</li>
                <li className="list-item">MongoDB, Mongoose</li>
                <li className="list-item">REST</li>
            </ul>
        </div>
    );
}

export default Resume;
