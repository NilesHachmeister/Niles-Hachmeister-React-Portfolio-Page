import React from 'react';
import '../styles/Header.css';

function Footer() {




    
    return (
        <div className="footer row align-items-center">



            <div className="">
                <a className="contact-links" href="https://github.com/NilesHachmeister" target="_blank"><i
                    className="bi bi-github"></i></a>
                <a className="contact-links" href="https://www.linkedin.com/in/niles-hachmeister-678365225/"
                    target="_blank"><i className="bi bi-linkedin"></i></a>
                <a className="contact-links" href="./assets/images/Resume.pdf" download="NilesHachmeister"><i
                    className="bi bi-file-person"></i></a>
            </div>


        </div>
    );
}

export default Footer;
