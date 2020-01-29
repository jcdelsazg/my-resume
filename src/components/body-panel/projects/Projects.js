/* eslint-disable no-unused-vars */
import React from 'react';
import reactImg from '../../../data/images/react.png';
import nodejs from '../../../data/images/nodejs.png';
import netcore from '../../../data/images/netcore.png';
import github from '../../../data/images/github.png';
import typescript from '../../../data/images/typescript.png';

function logo(tech) {
  switch (tech) {
    case 'nodejs':
      return nodejs;
    case 'reactImg':
      return reactImg;
    case 'typescript':
      return typescript;
    case 'netcore':
      return netcore;
    default:
      return github;
  }
}

function Projects({ projects }) {
  return (
    <div class="w3-container w3-card w3-white w3-margin-bottom">
      <p class="w3-large">
        <b>
          <i class="fa fa-folder-open-o fa-fw w3-margin-right w3-text-teal"></i>
          Projects
        </b>
      </p>
      <ul class="w3-ul w3-card-4">
        {projects.map(project => {
          return (
            <li class="w3-bar">
              <img
                src={logo(project.Technology)}
                class="w3-bar-item w3-circle"
                style={{ width: '85px' }}
                alt="Techonology used in the project"
              />
              <div class="w3-bar-item">
                <a href={project.Url} target="_blank" rel="noopener noreferrer">
                  <span class="w3-large">{project.Name}</span>
                </a>
                <br />
                <span>{project.Description}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <br />
    </div>
  );
}

export default Projects;
