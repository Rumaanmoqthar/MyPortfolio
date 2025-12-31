import { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';

const About = () => {
    const quotes = [
        { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
        { text: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" },
        { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
        { text: "Programming is not about typing, it's about thinking.", author: "Rich Hickey" },
        { text: "Fix the cause, not the symptom.", author: "Steve Maguire" },
        { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
        { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
        { text: "User interface is the process of shifting from chaotic complexity to elegant simplicity.", author: "Akshat Paul" },
        { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
        { text: "I am still learning.", author: "Michelangelo" },
        { text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King" },
        { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" }
    ];

    const [currentQuote, setCurrentQuote] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % quotes.length);
        }, 4000); // Change quote every 4 seconds
        return () => clearInterval(interval);
    }, []);
    return (
        <section className="about" id="about">
            <div className="about-info">
                <div className="img-about">
                    <img src="/images/about-me.png" alt="About" />
                </div>
                <div className="info-text">
                    <h5>@rumaanmoqthar</h5>
                    <p>Software developer and Full stack developer</p>
                </div>
            </div>
            <h3>ABOUT ME</h3>
            <div className="about-info2">
                <div className="about-text">
                    <p>Highly motivated Full-Stack Developer with experience in building and deploying scalable, full-stack web applications. Proficient in both MERN and C#/.NET stacks, component-based UI architecture, developing RESTful APIs, and managing both SQL and NoSQL databases. A quick learner with strong problem-solving and debugging skills, eager to contribute to a professional, product-based environment.</p>
                    <p>Experience building responsive React.js applications and modern user interfaces using Tailwind CSS and component-based architecture.</p>

                    <h3>Technical Skills</h3>

                    <div className="skills-container">
                        <div className="skill-category">
                            <strong>Full-Stack:</strong>
                            <span>MERN Stack</span> <span>C# / ASP.NET</span>
                        </div>
                        <div className="skill-category">
                            <strong>Frontend:</strong>
                            <span>React.js</span> <span>JavaScript (ES6+)</span> <span>Tailwind CSS</span> <span>HTML5/CSS3</span>
                        </div>
                        <div className="skill-category">
                            <strong>Backend:</strong>
                            <span>Node.js</span> <span>Express.js</span> <span>RESTful APIs</span>
                        </div>
                        <div className="skill-category">
                            <strong>Database:</strong>
                            <span>MongoDB</span> <span>SQL</span>
                        </div>
                        <div className="skill-category">
                            <strong>Tools:</strong>
                            <span>Git/GitHub</span> <span>VS Code</span> <span>Postman</span>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <a href="/pdfs/Resume_Rumaan.pdf" className="btn" download>
                            Download Resume <FaDownload style={{ marginLeft: '8px' }} />
                        </a>
                    </div>
                </div>
                <div className="photo-container">
                    <img src="/images/about-me.png" alt="Profile" />
                    <div className="about-quote">
                        <p key={currentQuote}>"{quotes[currentQuote].text}"</p>
                        <span>- {quotes[currentQuote].author}</span>
                    </div>
                    <span className="tape tape1">CODE</span>
                    <span className="tape tape2">CODE</span>
                </div>
            </div>
        </section>
    );
};

export default About;
