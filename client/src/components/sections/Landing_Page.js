import React from 'react';
import About from './About';
import Projects from './Projects';
import Links from './Links';
import Contact from './Contact';

const LandingPage = () => {

  const drawAboutTriangleLeft = () => {
    var canvas = document.getElementById('aboutTriangleLeft')
    
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      
      ctx.fillStyle = 'blue';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, 100);
      ctx.lineTo(220, 100);
      ctx.fill();
      ctx.filter = "none"
    }
  }

  return (
    <div
      className='page'
    >
      <About 
        drawAboutTriangleLeft={drawAboutTriangleLeft}
      />
      <Projects />
      <Links />
      <Contact />
    </div>
  )
}

export default LandingPage;