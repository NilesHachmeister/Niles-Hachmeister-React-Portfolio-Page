import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/Contact.css';
import { validateEmail } from '../utils/validateEmail'


function Contact() {






    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

    const [validEmail, setValidEmail] = useState(false);

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
            if (validateEmail(inputValue)) {



                setValidEmail(true)
            }


        } else {
            setMessage(inputValue)
        }
    };



    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log("submited.....");

        setName("")
        setEmail("")
        setMessage("")

    };


    // how to tell if  the curser has moved away?
    // make this a use effect on click?

    // message is the focus?


    const renderMessage = () => {

        if (name !== "" && !validEmail && message) {
            return <div id="alert-message">Please enter a valid email</div>
        } else if (name !== "" && validEmail && message === "") {
            return <div id="alert-message">Please enter a valid message</div>
        } else {
            <div id="alert-message"></div>
        }


    };




    return (
        <div id="contact" className="container">


            <form>
                <h2>Contact</h2>
                <div className="form-holder">

                    <label htmlFor="name">Name:</label>
                    <br></br>
                    <input
                        className="form-values"
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="name"
                        id="name"
                    />
                </div>
                <div className="form-holder">
                    <label htmlFor="email">Email address:</label>
                    <br></br>
                    <input
                        className="form-values"
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Email address"
                        id="email"
                    />

                </div>
                <div className="form-holder">
                    <label htmlFor="message">Message:</label>
                    <br></br>
                    <textarea
                        className="form-values"
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        rows="6"
                        id="message"
                    />
                </div>
                {renderMessage()}
                <button
                    onClick={handleFormSubmit}
                    className="btn btn-primary"
                    type="submit"
                >
                    Submit
                </button>



            </form>


        </div>
    );
}

export default Contact;
