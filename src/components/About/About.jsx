import React from 'react';

import CloudStorage from '../../assets/cloud_storage.png';

export default function About() {
  return (
    <section className='about__container' id='about'>
      <div className='about'>
        <img src={CloudStorage} alt='cloud-storage' className='about__image' />
        <div className='about__content'>
          <h1 className='about__title'>Sobre</h1>
          <p className='about__paragraph'>
            A nossa missão é vaaaaaaaaaaaaaaaaaaaaca.
            <span>
              Acreditamos que a fórmula perfeita para que cada um acelere o seu
              desenvolvimento profissional em Cloud é juntando conhecimento
              teórico com experiências práticas. Com isso em vista, produzimos
              conteúdo gratuito de alta qualidade e oferecemos soluções para que
              você se desenvolva cada vez mais.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
