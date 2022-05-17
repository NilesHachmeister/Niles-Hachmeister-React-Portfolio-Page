import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/Contact.css';
import { validateEmail } from '../utils/validateEmail'


function Contact() {

    // declaring our useStates. One for each of the inputs and then another to check if the email is valid or not
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

    const [validEmail, setValidEmail] = useState(false);

    // this function handles any input change.
    const handleInputChange = (e) => {

        // this checks the input type and value
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // this checks the input type and sets the state to the correct value. It also checks to see if the email is valid or not
        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
            if (validateEmail(inputValue)) {
                setValidEmail(true)
            } else {
                setValidEmail(false)
            }
        } else {
            setMessage(inputValue)
        }
    };


    // this would handle our form submit. Sense we are not connecting a backend I reset the fields to empty and logged that the form had been submited
    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log("submited.....");

        setName("")
        setEmail("")
        setMessage("")
    };

    // this renders any error message that may occure
    const renderMessage = () => {

        // if there is a name present, and a message, but not a valid email the user is prompted to enter a valid email
        if (name !== "" && !validEmail && message) {
            return <div id="alert-message">Please enter a valid email</div>

            // if there is a name, and a valid email, but no message, the user is prompted to enter a message
        } else if (name !== "" && validEmail && message === "") {
            return <div id="alert-message">Please enter a valid message</div>

            // if everything is good then the user is not sent an alert message
        } else {
            <div id="alert-message"></div>
        }
    };


    // returning the contact section of the page
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

                {/* this checks to see what message should be displayed to the user (if any) */}
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
