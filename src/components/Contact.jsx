import React from 'react';
import { FaRegMessage } from 'react-icons/fa6'; // FontAwesome 6 icon
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {


    return (
        <section className="contact" id="contact">
            <h3>Get in Touch <FaRegMessage /></h3>
            <div className="container">
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <FaEnvelope />
                            <p>rumaanmoqthar07@gmail.com</p>
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
                    <form className="contact-form" action="https://formsubmit.co/rumaanmoqthar07@gmail.com" method="POST">
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://rumaanmoqthar.vercel.app/" /> {/* Redirect back after submit */}
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <input type="text" name="_subject" placeholder="Subject" required />
                        </div>
                        <div className="form-group">
                            <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
                        </div>
                        <button type="submit" className="btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
