import React from 'react';
import cardInfo from '../data/cardInfo.json'
import '../styles/Portfolio.css';


function Portfolio({ hoverActive, setHoverActive }) {






    return (
        <div id="portfolio" className="container">




            {cardInfo.map((element, index) => {
                return (
                    <div key={index} className="portfolio-card" onMouseEnter={() => setHoverActive(true)} onMouseLeave={() => setHoverActive(false)}>
                        <img src={element.imgPath} className="portfolio-img" />

                        <div className="portfolio-title">
                            <a className={hoverActive ? "deployed-link hover-active" : "deployed-link"} href={element.deployedPath}>
                                {element.title}
                            </a>
                            <a className={hoverActive ? "github-icon bi bi-github hover-active" : "github-icon bi bi-github"} href={element.githubPath}></a>
                        </div>



                        <p className={hoverActive ? "tech-used hover-active" : "tech-used"}>{element.tech}</p>
                    </div>
                )
            })}








        </div >
    );
}

export default Portfolio;
