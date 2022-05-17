import React from 'react';
import { useState } from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';


const MainContainer = () => {

  // declaring our content state. This indicates which page the user is currently on
  const [content, setContent] = useState("AboutMe")

  // this sets the content whenever the user clicks on a header element
  const handleChange = (content) => {
    setContent(content)
  }

  // declaring our hover active state to determine which portfolio card the user is hovering over
  const [hoverActive, setHoverActive] = useState(10)

  // this renders the content sectiuon of our page depending on the current state of content
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

  // returning our page contents
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
