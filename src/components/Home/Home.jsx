import React from 'react';
import Cards from '../Cards/Cards';

import CloudVector from '../../assets/cloud-vector.png';

export default function Home() {
  return (
    <section className='home' id='home'>
      <div className='container'>
        <div className='container__text'>
          <h1 className='container__text-title'>
            Conquiste as melhores oportunidades de TI. Acelere a sua carreira
            através da Cloud.
          </h1>

          <p className='container__text-paragraph'>
            Aprenda a conduzir os mais diversos projetos de Cloud, e tenha um
            dos perfis mais valorizados do mercado.
          </p>
        </div>
        <img src={CloudVector} alt='Cloud' className='container__image' />
        <Cards />
      </div>
    </section>
  );
}
