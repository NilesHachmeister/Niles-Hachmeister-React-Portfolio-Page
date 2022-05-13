import React from 'react';
import cardInfo from '../data/cardInfo.json'
import '../styles/Portfolio.css';


function Portfolio() {
    return (
        <div id="portfolio" className="container">






            {cardInfo.map((element, index) => {
                return (
                    <div className="portfolio-card">
                        <img key={index} src={element.imgPath} className="portfolio-img" />

                        <div className="portfolio-title">
                            <a className="deployed-link" href={element.deployedPath}>
                                {element.title}
                            </a>
                            <a className="github-icon bi bi-github" href={element.githubPath}></a>
                        </div>



                        <p className="tech-used">{element.tech}</p>
                    </div>
                )
            })}








        </div>
    );
}

export default Portfolio;
