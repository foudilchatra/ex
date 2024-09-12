import React from 'react';
import './About.css';
import profilePic from './imj.jpg';
import linkedinLogo from './link.png';
import githubLogo from './git.png';

function About() {
    return (
        <main className="about-container">
            <div className="content">
                <h1>À Propos</h1>
                <p>Je m'appelle Foudil Chatra, j'ai 19 ans et je suis développeur web.</p>
                <p>Passionné par le sport, notamment la musculation, ainsi que par les voyages, je me retrouve constamment à la recherche de nouveaux défis à relever.</p>
                <p>Mes voyages m'inspirent à explorer de nouvelles perspectives, tandis que la musculation m'a appris la discipline et la persévérance, des qualités essentielles dans mon métier de développeur.</p>
            </div>
            <div className="stars">
                {[...Array(50)].map((_, i) => (
                    <div key={i} className="star"></div>
                ))}
            </div>
            <div className="pentagon">
                <div className="pentagon-in1">
                    <div className="pentagon-in2">
                        <img src={profilePic} alt="Foudil Chatra" />
                    </div>
                </div>
            </div>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/foudil-chatra-4101b5249/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinLogo} alt="LinkedIn" />
                </a>
                <a href="https://github.com/foudilchatra" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="GitHub" />
                </a>
            </div>
        </main>
    );
}

export default About;