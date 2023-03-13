import React, { useEffect } from 'react'
import BackgroundWrapper from './PageBackgroundStyles'
import BackgroundText from '../../styles/fontsStyles/BackgroundText';
import marqueeText from '../../lib/marquee';


export default function PageBackground() {
  useEffect(() => {
    marqueeText();
  }); 

  const displayText = () => {
    return "React – Redux – Node – Web Development – Next.js – Angular – Javascript – React Native – ".repeat(5000)
  }

  return (
    <BackgroundWrapper>
        <BackgroundText className="marquee marquee-primary" id="marquee">{displayText()}</BackgroundText>
    </BackgroundWrapper>
  )
}
