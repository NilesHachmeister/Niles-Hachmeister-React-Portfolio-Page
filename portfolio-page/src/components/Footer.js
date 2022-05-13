import React from 'react';
import image from "../styles/background.jpg"



const footerStyle = {
    mainDiv: {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        height: '100px',
        justifyContent: 'center',
        // alignItems: 'center',
        dihsplay: 'flex',

    },
    anchors: {
        fontSize: '50px',
        color: 'black',
        display: 'inline',
        paddingLeft: '20%',
    }


}



function Footer() {





    return (
        <div className="footer row align-items-center" style={footerStyle.mainDiv}>




            <a style={footerStyle.anchors} className="contact-links" href="https://github.com/NilesHachmeister" target="_blank"><i
                className="bi bi-github"></i></a>

            <a style={footerStyle.anchors} className="contact-links" href="https://www.linkedin.com/in/niles-hachmeister-678365225/"
                target="_blank"><i className="bi bi-linkedin"></i></a>

            <a style={footerStyle.anchors} className="contact-links" href="https://stackoverflow.com/users/17302589/niles-hachmeister"><i
                className="bi bi-stack-overflow"></i></a>



        </div>
    );
}

export default Footer;
