import React from 'react';
import { HiOutlineCloud } from 'react-icons/hi';

export default function Card() {
  const teste = [
    {
      text: 'I told you long ago, on the road',
      icon: HiOutlineCloud,
    },
    {
      text: 'I got what they waitin for',
      icon: HiOutlineCloud,
    },
    {
      text: 'I dont run from nothin, dog',
      icon: HiOutlineCloud,
    },
  ];

  return (
    <div className='cards-container'>
      <>
        {teste.map((content, i) => {
          return (
            <div className='card' key={i}>
              <p className='card__text'>
                <HiOutlineCloud size={40} className='card__icon' />
                {content.text}
              </p>
            </div>
          );
        })}
      </>
    </div>
  );
}
