import React from 'react';
import cardInfo from '../data/cardInfo.json'

function Portfolio() {
    return (
        <div className='container'>





            <div className="col-lg-2 title-for-content-area">
                My Work
            </div>

            <div>
                {cardInfo.map(element => {
                    return (
                        <>
                            <img src={element.imgPath} />
                            <p>{element.description}</p>
                        </>
                    )
                })}
            </div>


            // put info in a json file? with the github, deployed, image src, etc? then map through the json file?

            {/* {images.map((pic, index) => {
                return (

                <div className="picture-container">
                    <a href="https://github.com/NilesHachmeister/to-cook-or-not-to-cook-server">
                        <div className="card bg-dark text-white main-img">
                            <h5 className="card-title">To cook or not to cook</h5>
                            <img className="card-img" src="./assets/images/img1.png" alt="Card image" />
                        </div>
                    </a>
                </div>
                )


            })} */}






        </div>
    );
}

export default Portfolio;
