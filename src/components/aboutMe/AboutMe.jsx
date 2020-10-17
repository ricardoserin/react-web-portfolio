import React from 'react';
import ScrollControl from '../common/ScrollControl';
import img1 from '../../assets/img/profile.jpg';
import imgEstudiante from '../../assets/img/unt-selfie.jpg';
import imgGlover from '../../assets/img/glover.jpg';
import imgNumeral from '../../assets/img/logoNumeral.svg';
import imgBiker from '../../assets/img/biker.jpg';
import imgBiker2 from '../../assets/img/biker-2-1.jpg';
import imgBiker3 from '../../assets/img/biker-3.jpg';
import imgBiker4 from '../../assets/img/biker-2.jpg';
import imgCeniteg from '../../assets/img/ceniteg.jpg';

const AboutMe = () => (
  <div className="content">
    <div className="section-container section-container--margin">
      <ScrollControl to="up" />
      <section className="section section__no-margin">
        <div className="section__block--middle section__block--center">
          <h1 className="section__title">
            Hola de nuevo!
          </h1>
          <p className="section__text section__text--center">
            Permíteme contarte un poco más de mi.
          </p>
        </div>
        <div className="section__block--middle section__block--center">
          <img className="section__picture-circle" src={img1} alt="" />
        </div>
      </section>
      <section className="section section__no-margin">
        <div className="section__block--middle section__block--center">
          <img src={imgEstudiante} alt="" className="section__picture" />
        </div>
        <div className="section__block--middle section__block--center">
          <h1 className="section__title">
            Estudiante
          </h1>
          <p className="section__text section__text--center">
            de la escuela de Ingeniería de Sistemas de la Universidad Nacional de Trujillo.
          </p>
        </div>
      </section>
      <section className="section section__no-margin">
        <div className="section__block--middle section__block--center">
          <h1 className="section__title">
            Desarrollador
          </h1>
          <p className="section__text section__text--center">
            web de Academia Numeral.
          </p>
        </div>
        <div className="section__block--middle section__block--center">
          <img src={imgNumeral} alt="" className="section__picture-circle" />
        </div>
      </section>
      <section className="section section__no-margin">
        <div className="section__block--middle section__block--center">
          <img src={imgCeniteg} alt="" className="section__picture-circle" />
        </div>
        <div className="section__block--middle section__block--center">
          <h1 className="section__title">
            Experiencia
          </h1>
          <p className="section__text section__text--center">
            como desarrollador en la empresa CENITEG SOLUTIONS.
          </p>
        </div>
      </section>
      <section className="section section__no-margin">
        <div className="section__block--middle section__block--center">
          <h1 className="section__title">
            Experiencia
          </h1>
          <p className="section__text section__text--center">
            en atención al cliente y glover.
          </p>
        </div>
        <div className="section__block--middle section__block--center">
          <img src={imgGlover} alt="" className="section__picture" />
        </div>
      </section>
      <section className="section section__no-margin">
        <div className="section__block--middle section__block--center">
          <img src={imgBiker} alt="" className="section__picture" />
        </div>
        <div className="section__block--middle section__block--center">
          <h1 className="section__title">
            Biker de ♥
          </h1>
          <p className="section__text section__text--center">
            desde los 15 años
          </p>
        </div>
      </section>
      <section className="section section__no-margin">
        <div className="section__block--middle section__block--center">
          <p className="section__text section__text--center">
            Y a pesar de haber caído
          </p>
          <h1 className="section__title">
            una vez
          </h1>
        </div>
        <div className="section__block--middle section__block--center">
          <img src={imgBiker2} alt="" className="section__picture" />
        </div>
      </section>
      <section className="section section__no-margin">
        <div className="section__block--middle section__block--center">
          <img src={imgBiker4} alt="" className="section__picture" />
        </div>
        <div className="section__block--middle section__block--center">
          <p className="section__text section__text--center">
            quizá
          </p>
          <h1 className="section__title">
            dos veces
          </h1>
        </div>
      </section>
      <section className="section section__no-margin">
        <div className="section__block--middle section__block--center">
          <p className="section__text section__text--center">
            o hasta
          </p>
          <h1 className="section__title">
            tres veces
          </h1>
        </div>
        <div className="section__block--middle section__block--center">
          <img src={imgBiker3} alt="" className="section__picture" />
        </div>
      </section>
      <section className="section section__block-wp section__no-margin">
        <div className="section section-wp">
          <div className="section__block--middle section__block--center">
            <h1 className="section__title">
              He aprendido
            </h1>
            <p className="section__text section__text--center">
              a siempre levantarme.
            </p>
          </div>
        </div>
      </section>
      <ScrollControl to="down" />
    </div>
  </div>
);

export default AboutMe;
