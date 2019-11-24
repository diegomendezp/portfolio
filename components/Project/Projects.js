import React from 'react';
import projects from '../../content/projects.json';
import Project from './Project.js';

const displayProjects = () => projects.map((project, i) => (<Project {...project} key={i} />))
export default function Projects() {
  return (
    <div className="projects-container">
      {displayProjects()}
    </div>
  )
}
