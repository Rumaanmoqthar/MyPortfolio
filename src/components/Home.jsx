import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home-text">
                <h2>Hi, I'm Rumaan Moqthar 👋</h2>
                <h3>Full Stack Developer & Software Developer</h3>
                <p>
                    I am a results-driven developer specializing in building scalable, high-performance web applications.
                    With expertise in the <strong>MERN stack, Java, Python</strong>, and <strong>C#/.NET</strong>, I focus on creating
                    seamless user experiences and robust backend architectures, turning complex problems into elegant solutions.
                </p>
                <div className="home-btn">
                    <a href="#contact" className="btn">Contact Info</a>
                    <a href="/pdfs/Resume_Rumaan.pdf" className="btn" download>Download CV <FaDownload style={{ marginLeft: '5px' }} /></a>
                </div>
            </div>
            <div className="home-img">
                {/* Images in public folder are referenced from root / */}
                <img src="/images/img2.png" alt="Profile" />
            </div>
        </section>
    );
};

export default Home;
