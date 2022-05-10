import React from 'react';
import { useState, useEffect } from 'react';
function Contact() {






    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue)
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log("submited.....");

    };


    return (
        <div className='container'>

            <form>
                <label htmlFor="name">Name:</label>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="name"
                    id="name"
                />
                <label htmlFor="email">Email address:</label>
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email address"
                    id="email"
                />
                <label htmlFor="message">Message:</label>
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder=""
                    id="message"
                />


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
