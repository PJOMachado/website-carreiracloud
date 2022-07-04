import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

import yago from '../../assets/yago.jfif';
import dan from '../../assets/daniel.jfif';
import gabriel from '../../assets/gabriel.jfif';
import jorge from '../../assets/jorge.jfif';

export default function Testimonials() {
  const clients = [
    {
      img: yago,
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde natus incidunt saepe est. Commodi totam autem et, reprehenderit cum in molestiae hic, quisquam dolorem velit dolor amet, ipsa quo. Dolores. ',
    },
    {
      img: dan,
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde natus incidunt saepe est. Commodi totam autem et, reprehenderit cum in molestiae hic, quisquam dolorem velit dolor amet, ipsa quo. Dolores. ',
    },
    {
      img: gabriel,
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde natus incidunt saepe est. Commodi totam autem et, reprehenderit cum in molestiae hic, quisquam dolorem velit dolor amet, ipsa quo. Dolores. ',
    },
    {
      img: jorge,
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
          pagination={{ clickable: true }}
          breakpoints={{
            375: {
              width: 375,
              slidesPerView: 1,
            },
            1024: {
              width: 1024,
              slidesPerView: 2,
            },
          }}
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
