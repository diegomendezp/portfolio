import React, { useEffect } from 'react'
import BackgroundWrapper from './PageBackgroundStyles'
import BackgroundText from '../../styles/fontsStyles/BackgroundText';


export default function PageBackground() {
  useEffect(() => {
    const element = document.querySelector('#marquee');
    let count = 0;
    const offset = 1;
    setInterval(() => { 
      element.style.left = `-${offset*count}px`
      count++;
    }, 10)
  }); 

  const displayText = () => {
    return "React – Redux – Node – Web Development – Next.js – Angular – Javascript – ".repeat(1000)
  }

  return (
    <BackgroundWrapper>
        <BackgroundText className="marquee marquee-primary" id="marquee">{displayText()}</BackgroundText>
    </BackgroundWrapper>
  )
}
