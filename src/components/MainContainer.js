import React from 'react';
import { useState } from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';





// transition for the portfolio text
// space under about me section



const MainContainer = () => {


  const [content, setContent] = useState("AboutMe")

  const handleChange = (content) => {
    setContent(content)
  }

  const [hoverActive, setHoverActive] = useState(10)







  const renderSection = () => {
    if (content === "AboutMe") {
      return <AboutMe />
    } else if (content === "Portfolio") {
      return <Portfolio hoverActive={hoverActive} setHoverActive={setHoverActive}
      />
    } else if (content === "Contact") {
      return <Contact />
    } else {
      return <Resume />
    }
  }


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
