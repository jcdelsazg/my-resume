import React from 'react';
import './BodyPanel.css';
import Experience from './experience/Experience';
import Education from './education/Education';
import Projects from './projects/Projects';

function BodyPanel({ experiences, education, projects }) {
  return (
    <div class="w3-twothird">
      <Experience experiences={experiences} />
      <Education education={education} />
      <Projects projects={projects} />
    </div>
  );
}

export default BodyPanel;
