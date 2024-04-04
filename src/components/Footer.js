import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p class='content'>Sahil Mantri</p>
        <p class='content'>A focused Product Manager and a Software Developer</p><p class='Social'>Social Media</p>
      </section>

      <section class='social-media'>
        <div class='social-media-wrap'>
            
          
          <small class='website-rights'> ©Sahil Mantri </small>
          <div class='social-icons'>
            
            <a className='sahil' href='https://www.linkedin.com/in/sahil-mantri-775981198/'><i className='sa' class='fab fa-linkedin' /></a>
            <a className='sahil1' href='https://www.facebook.com/sahil.mantri.73/'><i className='sa'  class="fa-brands fa-square-facebook"></i></a>
            <a className='sahil2' href='mailto:sahilmantri111@gmail.com'><i className='sa'  class="fa-sharp fa-regular fa-envelope-open"></i></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;