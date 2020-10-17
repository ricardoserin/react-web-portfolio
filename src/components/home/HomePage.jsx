import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faInstagram, faLinkedin, faFacebook, faTwitter, faWhatsapp, faTelegramPlane,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import svg1 from '../../assets/img/svg-1.svg';
import svgContact from '../../assets/img/svg-contact.svg';
import svgHtml from '../../assets/img/html.svg';
import svgCss from '../../assets/img/css.svg';
import svgJs from '../../assets/img/javascript.svg';
import svgPug from '../../assets/img/pug.svg';
import svgSass from '../../assets/img/sass-1.svg';
import svgReact from '../../assets/img/react.svg';
import svgGithub from '../../assets/img/github-1.svg';
import svgXd from '../../assets/img/adobe-xd-1.svg';
import profilePicture from '../../assets/img/profile.jpg';

const HomePage = () => (
  <div id="content" className="content">
    <div className="section-container">
      <section className="section">
        <div className="section__home">
          <img className="section__home-profile" src={profilePicture} alt="" />
          <h1 className="section__title">Ricardo Serin</h1>
          <h2 className="section__subtitle">Web developer</h2>
          <div className="section__home-social-bar">
            <a rel="noreferrer" target="_blank" href="https://github.com/ricardoserin">
              <FontAwesomeIcon className="icon icon--short" icon={faGithub} />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/elmer-ricardo-serin-nery-24299713a">
              <FontAwesomeIcon className="icon icon--short" icon={faLinkedin} />
            </a>
          </div>
        </div>
      </section>
      <section id="about" className="section">
        <div className="section__block--middle section__block--center">
          <img src={svg1} className="section__image" alt="yo-había-ponido-mi-svg-aquí" />
        </div>
        <div className="section__block--middle">
          <h1 className="section__title">Hola,</h1>
          <p className="section__text">mi nombre es Ricardo y soy desarrollador web. Me encanta adquirir nuevas habilidades y aprender tecnologías que me permitan crear cosas geniales. En lo personal me gusta viajar en motocicleta, me considero un biker aventurero, si te interesa saber un poco más, te invito a conocer...</p>
          <Link onClick={() => (window.scrollTo(0, 0))} to="/about-me" className="section__text-link">...más acerca de mi.</Link>
        </div>
      </section>
      <section className="section" id="skills">
        <div className="section__skills-container">
          <h1 className="section__skills-title">
            Skills
          </h1>
          <div className="section__skills-icons-container">
            <a rel="noreferrer" target="_blank" href="https://developer.mozilla.org/es/docs/Web/HTML" className="section__skills-icon-container">
              <img className="section__skills-icon" src={svgHtml} alt="" />
              <p className="section__skills-icon-label">HTML5</p>
            </a>
            <a rel="noreferrer" target="_blank" href="https://developer.mozilla.org/es/docs/Web/CSS" className="section__skills-icon-container">
              <img className="section__skills-icon" src={svgCss} alt="" />
              <p className="section__skills-icon-label">CSS</p>
            </a>
            <a rel="noreferrer" target="_blank" href="https://developer.mozilla.org/es/docs/Web/JavaScript" className="section__skills-icon-container">
              <img className="section__skills-icon" src={svgJs} alt="" />
              <p className="section__skills-icon-label">Javascript</p>
            </a>
            <a rel="noreferrer" target="_blank" href="https://pugjs.org/api/getting-started.html" className="section__skills-icon-container">
              <img className="section__skills-icon" src={svgPug} alt="" />
              <p className="section__skills-icon-label">Pug</p>
            </a>
            <a rel="noreferrer" target="_blank" href="https://sass-lang.com/" className="section__skills-icon-container">
              <img className="section__skills-icon" src={svgSass} alt="" />
              <p className="section__skills-icon-label">Sass</p>
            </a>
            <a rel="noreferrer" target="_blank" href="https://es.reactjs.org/" className="section__skills-icon-container">
              <img className="section__skills-icon" src={svgReact} alt="" />
              <p className="section__skills-icon-label">React</p>
            </a>
            <a rel="noreferrer" target="_blank" href="https://github.com/ricardoserin" className="section__skills-icon-container">
              <img className="section__skills-icon" src={svgGithub} alt="" />
              <p className="section__skills-icon-label">Github</p>
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.adobe.com/la/products/xd.html" className="section__skills-icon-container">
              <img className="section__skills-icon" src={svgXd} alt="" />
              <p className="section__skills-icon-label">Acobe XD</p>
            </a>
          </div>
        </div>
      </section>
      <section id="contact" className="section section--with-footer">
        <div className="section-content">
          <div className="section__block--middle">
            <h1 className="section__title section__title--center">Conversemos</h1>
            <div className="section__contact-container">
              <h2 className="section__contact-title">Puedes contactarme a través de</h2>
              <div className="section__contact-icons-container">
                <a rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=981351211&text=Hola%20Ricardo%20Serin,%20visit%C3%A9%20tu%20sitio%20web.%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20acerca%20de%20tu%20trabajo.%20Saludos.">
                  <FontAwesomeIcon className="icon icon--short" icon={faWhatsapp} />
                </a>
                <a rel="noreferrer" target="_blank" href="mailto:serin.ricardo@gmail.com">
                  <FontAwesomeIcon className="icon icon--short" icon={faEnvelope} />
                </a>
                <a rel="noreferrer" target="_blank" href="https://t.me/serinricardo">
                  <FontAwesomeIcon className="icon icon--short" icon={faTelegramPlane} />
                </a>
              </div>
              <h2 className="section__contact-title">O visitar mis redes sociales</h2>
              <div className="section__contact-icons-container">
                <a rel="noreferrer" target="_blank" href="https://www.facebook.com/serinricardo/">
                  <FontAwesomeIcon className="icon icon--short" icon={faFacebook} />
                </a>
                <a rel="noreferrer" target="_blank" href="https://www.instagram.com/ricardoserin">
                  <FontAwesomeIcon className="icon icon--short" icon={faInstagram} />
                </a>
                <a rel="noreferrer" target="_blank" href="https://twitter.com/serinricardo">
                  <FontAwesomeIcon className="icon icon--short" icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
          <div className="section__block--middle section__block--center">
            <img src={svgContact} className="section__image" alt="yo-había-ponido-mi-svg-aquí" />
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default HomePage;
