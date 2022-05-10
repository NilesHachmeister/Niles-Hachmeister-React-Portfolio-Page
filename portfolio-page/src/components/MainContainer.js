import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';


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
    }
  }



  // validate email
  // handle form submit

  return (
    <>
      <Header currentPage={content} changeFunction={handleChange} />
      {/* <AboutMe /> */}
      {renderSection()}
      <button onClick={handleChange}>press to view portfolio</button>
      <Contact />
    </>
  )
};

export default MainContainer;
