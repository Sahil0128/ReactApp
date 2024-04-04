import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/*<video src='/videos/video-1.mp4' autoPlay loop muted />*/}
      <h1>Greetings, I'm Sahil Mantri</h1>
      <p>Developer & Product Manager</p>
    </div>
  );
}

export default HeroSection;