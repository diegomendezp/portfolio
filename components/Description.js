import React from 'react'
import PageParagraph from '../styles/fontsStyles/PageParagraph'
import networks from '../content/networks.json'

const displayNetworks = () =>
  networks.map((network, i) => {
    return (
      <a key={i} href={network.link} target="_blank" rel="noopener noreferrer">{network.name}</a>
    )
  })

export default function Description() {
  return (
    <div className="description-container">
      <div className="description-content">
        <div className="description-text">
          <PageParagraph>
            Hi, I'm Diego, a Computer Engineer and Full Stack Web Developer based in Madrid.
          </PageParagraph>
          <PageParagraph>
            I consider myself a versatile and dynamic person, responsible and dedicated to my tasks.  I am analytical and proactive, aware of the sense of urgency and with the ability to work under pressure.
          </PageParagraph>
          <PageParagraph>
            I am always eager to learn and improve my skills, and to do this, I usually analyze my mistakes in order to know how to make it better in the future.
          </PageParagraph>
        </div>
        <div className="networks">
          <PageParagraph>
            Networks
          </PageParagraph>
          <div className="networks-list">
            {displayNetworks()}
          </div>
        </div>
      </div>
    </div>
  )
}
