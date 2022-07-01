import React from 'react';
import Card from './Card';

export default function Home() {
  return (
    <session className='home' id='home'>
      <div className='container'>
        <h1 className='title'>
          Conquiste as melhores oportunidades de TI. <br />
          <span>Acelere a sua carreira através da Cloud.</span>
        </h1>

        <p className='paragraph'>
          Aprenda a conduzir os mais diversos projetos de Cloud, e tenha um dos
          perfis mais valorizados do mercado.
        </p>
        <div className='cards-container'>
          <Card text={'Quiero evoluir manito'} />
          <Card text={'Quiero evoluir my business'} />
          <Card text={'I need mentoria'} />
        </div>
      </div>
    </session>
  );
}
