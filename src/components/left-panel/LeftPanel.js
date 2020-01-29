import React from 'react';
import './LeftPanel.css';
import PersonalInfo from './personalInfo/PersonalInfo';
import Skills from './skills/Skills';
import Languages from './languages/Languages';
import Certifications from './certifications/Certifications';

function LeftPanel({ personalInfo, skills, languages, certifications }) {
  return (
    <div class="w3-third">
      <div class="w3-white w3-text-grey w3-card-4">
        <PersonalInfo personalInfo={personalInfo} />
        <Skills skills={skills} />
        <Languages languages={languages} />
        <Certifications certifications={certifications} />
      </div>
    </div>
  );
}

export default LeftPanel;
