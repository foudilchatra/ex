import React, { useState } from 'react';
import './Projects.css';

function Projects() {
    const [activeTab, setActiveTab] = useState('coreward');

    return (
        <div className={`projects-container ${activeTab}`}>
            <main className="projects-content">
                <h1>Mes Projets</h1>
                <div className="tabs">
                    <button
                        className={`tab-button ${activeTab === 'coreward' ? 'active' : ''}`}
                        onClick={() => setActiveTab('coreward')}
                    >
                        Corewar
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'pokemon' ? 'active' : ''}`}
                        onClick={() => setActiveTab('pokemon')}
                    >
                        Jeu Pokémon
                    </button>
                </div>
                <div className="tab-content">
                    {activeTab === 'coreward' && (
                        <div>
                            <h2>Corewar</h2>
                            <p>Coreward est un jeu vidéo de stratégie en temps réel où les joueurs doivent défendre leur base tout en conquérant des territoires ennemis. Le projet vise à offrir une expérience de jeu immersive avec des défis tactiques complexes.</p>
                        </div>
                    )}
                    {activeTab === 'pokemon' && (
                        <div>
                            <h2>Jeu Pokémon</h2>
                            <p>Jeu Pokémon est une réplique simplifiée du célèbre jeu de capture de créatures. Les joueurs peuvent explorer différentes zones, capturer des Pokémon sauvages, les entraîner, et participer à des combats. Le jeu vise à recréer l'essence de la série originale tout en offrant une expérience unique adaptée à un environnement web.
                            </p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default Projects;