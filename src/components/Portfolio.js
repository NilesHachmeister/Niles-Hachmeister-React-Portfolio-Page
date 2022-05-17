import React from 'react';
import cardInfo from '../data/cardInfo.json'
import '../styles/Portfolio.css';

// this takes in the hoverActive stat which applies the hover-active class to the card that the user is currently hovering on. setHoverActive changes the state ofd hoverActive depending on the card being hovered over.
function Portfolio({ hoverActive, setHoverActive }) {

    // returning the portfolio portion of the page
    return (
        <div id="portfolio" className="container">

            {/* this maps through each object in our data and creates a card based on the content */}
            {cardInfo.map((element, index) => {
                return (
                    <div key={index} className="portfolio-card" onMouseEnter={() => setHoverActive(index)} onMouseLeave={() => setHoverActive(10)}>
                        <img src={element.imgPath} className="portfolio-img" />
                        <div className="portfolio-title">
                            <a className={hoverActive === index ? "deployed-link hover-active" : "deployed-link"} href={element.deployedPath}>
                                {element.title}
                            </a>
                            <a className={hoverActive === index ? "github-icon bi bi-github hover-active" : "github-icon bi bi-github"} href={element.githubPath}></a>
                        </div>
                        <p className={hoverActive === index ? "tech-used hover-active" : "tech-used"}>{element.tech}</p>
                    </div>
                )
            })}
        </div >
    );
}

export default Portfolio;
