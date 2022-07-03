import React from 'react';

export default function Course() {
  return (
    <section className='course__container' id='course'>
      <div className='course'>
        <div className='course__content'>
          <h1 className='course__title'>Curso</h1>
          <p className='course__paragraph'>
            Para conquistar as melhores vagas do mercado de cloud, não basta
            tirar as certificações, é necessário saber fazer! Através do nosso
            curso, você vai ter o conhecimento teórico e prático que são
            cobrados pelo mercado para profissionais de Cloud, e tudo isso na
            plataforma de nuvem que mais tem ganhado mercado ano após ano e que
            o mercado está com uma demanda altíssima de profissionais, o Google
            Cloud Platform (GCP).
          </p>
          <a href='/' className='course__button'>
            Saiba mais
          </a>
        </div>
        <iframe
          width='100%'
          height='400'
          src='https://www.youtube.com/embed/8skzDJrlog8?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0'
          title='Fazendo um player de vídeo com React #HipstersPontoDicas - @Dev Soutinho'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          controls='0'
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
