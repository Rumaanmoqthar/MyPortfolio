import React, { useState } from 'react';
import { FaRegMessage } from 'react-icons/fa6'; // FontAwesome 6 icon
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaLinkedin, FaGithub, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        _subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/rumaanmoq@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: '', email: '', _subject: '', message: '' }); // Clear form
                setTimeout(() => setIsSubmitted(false), 5000); // Hide after 5 seconds
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error sending message.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="contact" id="contact">
            <h3>Get in Touch <FaRegMessage /></h3>
            <div className="container">
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <FaEnvelope />
                            <p>rumaanmoq@gmail.com</p>
                        </div>
                        <div className="contact-item">
                            <FaPhone />
                            <p>+91-6363311908</p>
                        </div>
                        <div className="contact-item">
                            <FaMapMarkerAlt />
                            <p>Mysore, India</p>
                        </div>
                        <div className="contact-item">
                            <FaClock />
                            <p>Available: Mon-Fri, 9AM-6PM</p>
                        </div>
                        <div className="social-links-contact">
                            <a href="https://www.linkedin.com/in/rumaan-moqthar-dev1/" aria-label="LinkedIn"><FaLinkedin /></a>
                            <a href="https://github.com/Rumaanmoqthar" aria-label="GitHub"><FaGithub /></a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="_subject"
                                placeholder="Subject"
                                required
                                value={formData._subject}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="6"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn" disabled={isLoading}>
                            {isLoading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>

            {/* Success Popup */}
            {isSubmitted && (
                <div className="success-popup">
                    <div className="popup-content">
                        <FaCheckCircle className="success-icon" />
                        <h4>Message Sent!</h4>
                        <p>Thanks for reaching out! Rumaan Moqthar will get back to you soon.</p>
                        <button className="close-btn" onClick={() => setIsSubmitted(false)}>Close</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;
