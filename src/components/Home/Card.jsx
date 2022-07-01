import React from 'react';
import { HiOutlineCloud } from 'react-icons/hi';

export default function Card({ text }) {
  return (
    <div className='home-card'>
      <HiOutlineCloud size={50} className='card-icon' />
      <p className='card-text'>{text}</p>
    </div>
  );
}
