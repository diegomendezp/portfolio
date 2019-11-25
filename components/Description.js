import React from 'react';
import DescriptionParagraph from '../styles/fontsStyles/DescriptionParagraph';
import networks from '../content/networks.json';
import PageLink from '../styles/fontsStyles/PageLink';
import Scroll from './Scroll/Scroll';

const displayNetworks = () =>
  networks.map((network, i) => {
    return (
      <PageLink key={i} href={network.link} target="_blank" rel="noopener noreferrer">{network.name} →</PageLink>
    )
  })

export default function Description() {
  return (
    <div className="description-container">
      <div className="description-content" data-aos="fade-in">
        <div className="description-text">
          <DescriptionParagraph>
            Hi, I'm Diego, a Computer Engineer and Full Stack Web Developer based in Madrid.
          </DescriptionParagraph>
          <DescriptionParagraph>
            I consider myself a versatile and dynamic person, responsible and dedicated to my tasks.  I am analytical and proactive, aware of the sense of urgency and with the ability to work under pressure.
          </DescriptionParagraph>
          <DescriptionParagraph>
            I am always eager to learn and improve my skills, and to do this, I usually analyze my mistakes in order to know how to make it better in the future.
          </DescriptionParagraph>
        </div>
        <div className="networks">
          <DescriptionParagraph>
            Networks
          </DescriptionParagraph>
          <div className="networks-list">
            {displayNetworks()}
          </div>
          <Scroll />
        </div>
        
      </div>
    </div>
  )
}
