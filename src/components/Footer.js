import React from 'react';
import image from "../styles/background.jpg"



const footerStyle = {
    mainDiv: {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        // height: '100px',
        justifyContent: 'center',
        alignItems: 'center',


    },
    anchors: {
        fontSize: '50px',
        color: 'black',
        textAlign: 'center',
    }


}



function Footer() {





    return (
        <div className="footer row align-items-center" style={footerStyle.mainDiv}>




            <a style={footerStyle.anchors} className="contact-links col-4" href="https://github.com/NilesHachmeister" target="_blank"><i
                className="bi bi-github"></i></a>

            <a style={footerStyle.anchors} className="contact-links col-4" href="https://www.linkedin.com/in/niles-hachmeister-678365225/"
                target="_blank"><i className="bi bi-linkedin"></i></a>

            <a style={footerStyle.anchors} className="contact-links col-4" href="https://stackoverflow.com/users/17302589/niles-hachmeister"><i
                className="bi bi-stack-overflow"></i></a>



        </div>
    );
}

export default Footer;
