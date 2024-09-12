import React from 'react';
import './Home.css';
import jsLogo from './logos/js-logo.png';
import reactLogo from './logos/react-logo.png';
import blockchainLogo from './logos/blockchain-logo.png';
import pythonLogo from './logos/python-logo.png';
import cLogo from './logos/c-logo.png';
import htmlCssLogo from './logos/html-css-logo.png';
import csharpLogo from './logos/csharp-logo.png';

function Home() {
    return (
        <main className="home-container">
            <div className="content">
                <h1>Bienvenue sur mon Portfolio</h1>
                <p>Je m'appelle Chatra Foudil, étudiant en deuxième année à l'école Epitech.<br />
                Mes domaines d'intérêt sont la création de nouvelles technologies et de nouveaux produits Web, <br />
                ainsi que des domaines liés à l'intelligence artificielle.</p>
                <p>Je suis passionné par le développement de solutions innovantes utilisant l'IA pour résoudre des problèmes complexes. <br />
                J'aime explorer les algorithmes d'apprentissage automatique, les réseaux de neurones et les techniques de traitement du langage naturel.</p>
                <p>Dans la mesure du possible, j'applique également ma passion au développement de produits avec Node.js <br />
                et la bibliothèque Javascript moderne et des frameworks comme React.js et Next.js.</p>
            </div>
            <div className="stars">
                {[...Array(50)].map((_, i) => (
                    <div key={i} className="star"></div>
                ))}
            </div>
            <div className="languages">
                <div className="language-square">
                    <img src={jsLogo} alt="JavaScript" />
                    JavaScript
                </div>
                <div className="language-square">
                    <img src={reactLogo} alt="React.js" />
                    React.js
                </div>
                <div className="language-square">
                    <img src={blockchainLogo} alt="Blockchain" />
                    Blockchain
                </div>
                <div className="language-square">
                    <img src={pythonLogo} alt="Python" />
                    Python
                </div>
                <div className="language-square">
                    <img src={cLogo} alt="C" />
                    C
                </div>
                <div className="language-square">
                    <img src={htmlCssLogo} alt="HTML & CSS" />
                    HTML & CSS
                </div>
                <div className="language-square">
                    <img src={csharpLogo} alt="C#" />
                    C#
                </div>
            </div>
        </main>
    );
}

export default Home;