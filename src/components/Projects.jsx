import React from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGit, FaGithub } from 'react-icons/fa';

const Projects = () => {
    return (
        <section className="project" id="project">
            <div className="title-project">
                <h4>TOOLS & PROJECTS </h4>
                <p>Here are some of the tools I use and projects I’ve built to improve my skills.</p>
            </div>

            <div className="tools">
                <ul className="list-tools">
                    <li><a href="#"><FaReact /> React</a></li>
                    <li><a href="#"><FaJs /> JavaScript</a></li>
                    <li><a href="#"><FaHtml5 /> HTML5</a></li>
                    <li><a href="#"><FaCss3Alt /> CSS3</a></li>
                    <li><a href="#">Tailwind CSS</a></li>
                    <li><a href="#">C#</a></li>
                    <li><a href="#">ASP.NET</a></li>
                    <li><a href="#"><FaNodeJs /> Node.js</a></li>
                    <li><a href="#">Express.js</a></li>
                    <li><a href="#">MongoDB</a></li>
                    <li><a href="#"><FaGit /> Git</a></li>
                    <li><a href="#"><FaGithub /> Github</a></li>
                </ul>
            </div>
            <div className="title-project">
                <p>Check out my recent projects below.</p>
            </div>
            <div className="projects-container">
                <div className="project-card">
                    <a href="https://one-click-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/OneClickPortfolio.jpg" alt="OneClickPortfolio" />
                    </a>
                    <h3>
                        <a href="https://one-click-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            OneClickPortfolio
                        </a>
                    </h3>
                    <p>Engineered a full-stack MERN application to automate portfolio creation by parsing uploaded resumes (PDF/DOCX) via the Parseur API, storing structured data in MongoDB, and dynamically generating HTML portfolios.</p>
                    <div className="tech-buttons">
                        <a href="#">React</a>
                        <a href="#">Node.js</a>
                        <a href="#">MongoDB</a>
                    </div>
                </div>

                <div className="project-card">
                    <a href="https://java-script-quiz-app-pi-one.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/JsQuizApp.jpg" alt="JS Quiz App" />
                    </a>
                    <h3>
                        <a href="https://java-script-quiz-app-pi-one.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            JS Quiz App
                        </a>
                    </h3>
                    <p>Engineered a clean, mobile-first responsive UI using React and Tailwind CSS, centered around a modular architecture of reusable components.</p>
                    <div className="tech-buttons">
                        <a href="#">React</a>
                        <a href="#">TailwindCSS</a>
                    </div>
                </div>

                <div className="project-card">
                    <a href="https://movie-finder-beta-gilt.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/MoviesFinder.jpg" alt="MovieFinder" />
                    </a>
                    <h3>
                        <a href="https://movie-finder-beta-gilt.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            MovieFinder
                        </a>
                    </h3>
                    <p>Developed a dynamic and responsive React UI that provides instant search results by asynchronously fetching data from the OMDb API, effectively managing loading and error states.</p>
                    <div className="tech-buttons">
                        <a href="#">React</a>
                        <a href="#">API</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
