import React from 'react';
import cardInfo from '../data/cardInfo.json'

function Portfolio() {
    return (
        <div id="contact" className="container">





            <div className="col-lg-2 title-for-content-area">
                My Work
            </div>

            <div>
                {cardInfo.map((element, index) => {
                    return (
                        <>
                            <img key={index} src={element.imgPath} />
                            <a href={element.deployedPath}>
                                <p>{element.title}</p>
                            </a>

                            <a className="github-icon" href={element.githubPath}></a>
                        </>
                    )
                })}
            </div>







        </div>
    );
}

export default Portfolio;
