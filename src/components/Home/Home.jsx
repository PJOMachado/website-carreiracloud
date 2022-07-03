import React from 'react';
import Cards from '../Cards/Cards';

import CloudVector from '../../assets/cloud-vector.png';

export default function Home() {
  return (
    <section className='home' id='home'>
      <div className='home__container'>
        <div className='home__content'>
          <h1 className='home__title'>
            Conquiste as melhores oportunidades de TI
            <br /> <span>Acelere a sua carreira através da Cloud</span>
          </h1>

          <p className='home__paragraph'>
            Aprenda a conduzir os mais diversos projetos de Cloud, e tenha um
            dos perfis mais valorizados do mercado
          </p>
        </div>
        <img src={CloudVector} alt='Cloud' className='home__image' />
        <Cards />
      </div>
    </section>
  );
}
