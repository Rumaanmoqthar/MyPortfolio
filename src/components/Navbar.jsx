import React, { useState, useEffect } from 'react';
import { FaBars, FaGithub, FaLinkedinIn, FaMoon } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.setAttribute('data-theme', newTheme);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let current = '';

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const sectionTop = rect.top + window.scrollY;
                if (window.scrollY >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });

            if (current) {
                setActiveLink(current);
            } else if (window.scrollY < 100) {
                // Default to home if near top
                setActiveLink('home');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header>
                <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src="/logo.png" alt="Logo" style={{ height: '30px' }} />
                    <h3><span>R</span>umaan</h3>
                </div>
                <div className="menu-toggle" id="menu-toggle" onClick={toggleMenu}>
                    <FaBars />
                </div>

                <ul className="header-list">
                    <li><a href="#home" className={activeLink === 'home' ? 'active' : ''}>Home</a></li>
                    <li><a href="#about" className={activeLink === 'about' ? 'active' : ''}>About</a></li>
                    <li><a href="#project" className={activeLink === 'project' ? 'active' : ''}>Projects</a></li>
                    <li><a href="#contact" className={activeLink === 'contact' ? 'active' : ''}>Contact</a></li>
                </ul>
                <ul className="header-list-icon">
                    <li><a href="https://github.com/Rumaanmoqthar"><FaGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/rumaan-moqthar-dev1/"><FaLinkedinIn /></a></li>
                    <li><button id="dark-mode-toggle" className="dark-mode-toggle" onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-color)', fontSize: '1.2rem' }}><FaMoon /></button></li>
                </ul>
            </header>

            {/* Overlay */}
            <div className={`menu-overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}></div>

            <div className={`slide-menu ${isOpen ? 'active' : ''}`} id="slide-menu">
                <div className="menu-close-btn" onClick={() => setIsOpen(false)}>
                    &times;
                </div>
                <ul>
                    <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                    <li><a href="#project" onClick={() => setIsOpen(false)}>Projects</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
