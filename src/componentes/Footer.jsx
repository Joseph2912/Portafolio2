import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="image-row">
        <div className="image-container">
          <img src="https://github.com/Joseph2912/Portafolio/blob/main/Portafolio/src/assets/playstore.png?raw=true" alt="image1" />
        </div>
        <div className="image-container">
          <img src="https://github.com/Joseph2912/Portafolio/blob/main/Portafolio/src/assets/android.png?raw=true" alt="image2" />
        </div>
        <div className="image-container">
          <img src="https://github.com/Joseph2912/Portafolio/blob/main/Portafolio/src/assets/app_store.png?raw=true" alt="image3" />
        </div>
        <div className="image-container">
          <img src="https://github.com/Joseph2912/Portafolio/blob/main/Portafolio/src/assets/Xcode.png?raw=true" alt="image4" />
        </div>
      </div>
      <div className="separator"></div>
      <div className="footer-content">
        <div className="footer-column">
          <h4>Habilidades y Tecnologías</h4>
        </div>
        <div className="footer-column">
          <h4>Front-end</h4>
          <ul>
            <li><a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" rel="noopener noreferrer">HTML</a></li>
            <li><a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noopener noreferrer">CSS</a></li>
            <li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">JavaScript</a></li>
            <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React Js</a></li>
            <li><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind</a></li>
            <li><a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a></li>
            <li><a href="https://mui.com/" target="_blank" rel="noopener noreferrer">Material UI</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Back-end</h4>
          <ul>
            <li><a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">Firebase</a></li>
            <li><a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">MongoDB</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Game developer</h4>
          <ul>
            <li><a href="https://unity.com/" target="_blank" rel="noopener noreferrer">Unity 2D</a></li>
            <li><a href="https://unity.com/" target="_blank" rel="noopener noreferrer">Unity 3D</a></li>
            <li><a href="https://docs.microsoft.com/es-es/dotnet/csharp/" target="_blank" rel="noopener noreferrer">C#</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contacto</h4>
          <ul>
            <li>elsjoseph@hotmail.com</li>
            <li><a href="https://www.linkedin.com/in/joseph2912" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li>+57 313 243 5910</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
