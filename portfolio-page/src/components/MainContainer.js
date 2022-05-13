import React from 'react';
import { useState } from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';



// footer thing not working.... 
// width of the about me section.
// validate email/message working the way we want?





const MainContainer = () => {


  const [content, setContent] = useState("Resume")

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



      <Footer />




    </>
  )
};

export default MainContainer;
