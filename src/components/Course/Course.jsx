import React from 'react';

export default function Course() {
  return (
    <section className='curso__container' id='curso'>
      <div className='curso'>
        <h1 className='curso__title'>Curso</h1>

        <iframe
          width='100%'
          height='400'
          src='https://www.youtube.com/embed/aZla1ttZHaw'
          title='Fazendo um player de vídeo com React #HipstersPontoDicas - @Dev Soutinho'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>

        <p className='curso__paragraph'>
          Para conquistar as melhores vagas do mercado de cloud, não basta tirar
          as certificações, é necessário saber fazer! Através do nosso curso,
          você vai ter o conhecimento teórico e prático que são cobrados pelo
          mercado para profissionais de Cloud, e tudo isso na plataforma de
          nuvem que mais tem ganhado mercado ano após ano e que o mercado está
          com uma demanda altíssima de profissionais, o Google Cloud Platform
          (GCP).
        </p>
      </div>
    </section>
  );
}
