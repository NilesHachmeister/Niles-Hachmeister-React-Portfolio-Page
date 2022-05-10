import React from 'react';

function AboutMe() {

    return (
        <div id='about-me' className='container'>


            <div className="container my-3" id="#about-me">

                <div className="title-for-content-area">
                    About me
                </div>

                <div className="row justify-content-center align-items-center">
                    <img src="./images/me.jpg" id="picture-of-me" alt="a picture of me outside" />
                </div>



                <div className="main-content-div">
                    <p>I am currently in a coding bootcamp for web development. My goal is to become a web developer
                        after
                        the
                        completion of the bootcamp.
                        <br />
                        <br />

                        In Spring of 2015 I graduated from Colorado State University with a Bachelors degree in
                        Phycology
                        with a
                        focus on mind, brain, and behavior. After completion of my bachelors degree I have focused on
                        managing
                        at pizza huts in the Fort Collins area, including a two and a half year stent as the general
                        manager
                        of
                        the Windsor Location.
                        <br />
                        <br />
                        The pivot from psychology to management and then to web development may seem like a strange one.
                        In
                        reality it all comes down to one simple skill set that I thrive on, problem solving. All of my
                        past
                        has
                        lead me to understand how to break down problems to achieve a satisfactory solution. I am
                        thrilled
                        to be
                        able to use this skill towards web development in the future.
                    </p>
                </div>

            </div>
        </div>

    )
}

export default AboutMe;
