import React, { useEffect } from 'react'
import BackgroundWrapper from './PageBackgroundStyles'
import BackgroundText from '../../styles/fontsStyles/BackgroundText';
import changeTitle from '../../lib/changeTitle';


export default function PageBackground() {
  useEffect(() => {
    changeTitle();
    const element = document.querySelector('#marquee');
    let count = 0;
    const offset = 1;
    setInterval(() => { 
      element.style = `transform: translate3d(-${offset*count}px, 0, 0);`
      count++;
    }, 10)
  }); 

  const displayText = () => {
    return "React – Redux – Node – Web Development – Next.js – Angular – Javascript – React Native – ".repeat(1000)
  }

  return (
    <BackgroundWrapper>
        <BackgroundText className="marquee marquee-primary" id="marquee">{displayText()}</BackgroundText>
    </BackgroundWrapper>
  )
}
