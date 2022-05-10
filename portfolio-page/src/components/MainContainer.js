import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';

const MainContainer = () => {


  const [content, setContent] = useState("AboutMe")

  const handleChange = (content) => {
    setContent(content)
  }




  const renderSection = () => {
    if (content === "AboutMe") {
      return <AboutMe />
    } else if (content === "Portfolio") {
      return <Portfolio />
    } else if (content === "Contact") {
      return <Contact />
    } else {
      return <Resume />
    }
  }


  // validate email
  // handle form submit

  return (
    <>
      <Header
        currentPage={content} changeFunction={handleChange}
      />

      {renderSection()}



      {/* <Footer />*/}

     
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

    </>
  )
};

export default MainContainer;
