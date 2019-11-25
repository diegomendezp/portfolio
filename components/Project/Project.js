import React from 'react'
import ProjectWrapper from './ProjectStyles'
import PageParagraph from '../../styles/fontsStyles/PageParagraph'

export default function Project({ name, photo, client, role, technologies, link, size, justify }) {
  return (
    <ProjectWrapper size={size} justify={justify} data-aos="fade-up" data-aos-easing="ease-in-out">
      <div className="project-container">
        <img src={photo} alt="project-photo"/>
        <div className="project-info">
          <PageParagraph className="uppercase">{name}</PageParagraph>
          <PageParagraph><span className="uppercase bold">Client: </span> {client}</PageParagraph>
          <PageParagraph> <span className="uppercase bold">Role: </span> {role}</PageParagraph>
          <PageParagraph> <span className="uppercase bold">Technologies: </span> {technologies}</PageParagraph>
          <a href={link} target="_blank" rel="noopener noreferrer"><PageParagraph className="uppercase">Visit site → </PageParagraph></a>
        </div>
      </div>
    </ProjectWrapper>
  )
}
