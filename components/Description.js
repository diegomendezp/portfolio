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
            Hi, I'm Diego, a Computer Engineer and Full Stack Web Developer based in Madrid. I Co-Founded <a href="https://tailor-hub.com/" target="_blank" rel="noopener noreferrer">Tailor-Hub</a>, a digital boutique whose aim is to shape ideas for the creation of digital products.
          </DescriptionParagraph>
          <DescriptionParagraph>
            I consider myself a versatile and dynamic person, responsible and fully dedicated to my tasks. I am analytical and proactive, aware of the sense of urgency and have the ability to work under pressure.
          </DescriptionParagraph>
          <DescriptionParagraph>
          Aside from working as a Developer, I'm also an Instructor at <a href="https://www.ironhack.com/en" target="_blank" rel="noopener noreferrer">Ironhack Madrid</a>, ranked as #2 as student-rated coding and design bootcamp in the world in 2018.
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
