import React from 'react';
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className='socials'>
        <a href='https://www.linkedin.com/' target='_blank'>
          <FaLinkedin className='social-icon' size={20} />
        </a>
        <a href='https://www.instagram.com/' target='_blank'>
          <FaInstagram className='social-icon' size={20} />
        </a>
        <a href='https://www.youtube.com/' target='_blank'>
          <FaYoutube className='social-icon' size={20} />
        </a>
      </div>
    </footer>
  );
}
