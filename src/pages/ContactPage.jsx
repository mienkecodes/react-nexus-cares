


import React from "react";
import "./ContactPage.css"; // Import your CSS styles here

function ContactUsPage() {
    return (
    <div className="contact-us-container">
        <section id="hero">
        <div className="hero-content">
            <h1>Contact Us</h1>
            <p>
        
            </p>
        </div>
        </section>

        <section id="contact-form">
        <div className="container">
            <h2>Send Us a Message</h2>
            <form>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="button">Submit</button>
            </form>
        </div>
        </section>
    </div>
    );
}

export default ContactUsPage;
