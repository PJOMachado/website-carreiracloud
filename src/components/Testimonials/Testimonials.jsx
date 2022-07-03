import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

import img from '../../assets/logo.png';

export default function Testimonials() {
  const clients = [
    {
      img: img,
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde natus incidunt saepe est. Commodi totam autem et, reprehenderit cum in molestiae hic, quisquam dolorem velit dolor amet, ipsa quo. Dolores. ',
    },
    {
      img: img,
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde natus incidunt saepe est. Commodi totam autem et, reprehenderit cum in molestiae hic, quisquam dolorem velit dolor amet, ipsa quo. Dolores. ',
    },
    {
      img: img,
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde natus incidunt saepe est. Commodi totam autem et, reprehenderit cum in molestiae hic, quisquam dolorem velit dolor amet, ipsa quo. Dolores. ',
    },
    {
      img: img,
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde natus incidunt saepe est. Commodi totam autem et, reprehenderit cum in molestiae hic, quisquam dolorem velit dolor amet, ipsa quo. Dolores. ',
    },
  ];

  return (
    <section className='testimonials' id='testimonials'>
      <div className='testimonials__container'>
        <div className='testimonials__content'>
          <h1 className='testimonials__title'>Depoimentos</h1>
        </div>
        <Swiper
          modules={[Pagination]}
          slidesPerView={'3'}
          pagination={{ clickable: true }}
        >
          {clients.map((client, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='testimonials__card'>
                  <img
                    src={client.img}
                    alt='aluno'
                    className='testimonials__image'
                  />
                  <p className='testimonials__testimonial'>{client.review}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
