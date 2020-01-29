import React from 'react';
import './App.css';
import LeftPanel from './components/left-panel/LeftPanel';
import BodyPanel from './components/body-panel/BodyPanel';
import Footer from './components/footer/Footer';
import profile from './data/profile';

function App() {
  return (
    <React.Fragment>
      <div class="w3-content w3-margin-top container">
        {/* The Grid */}
        <div class="w3-row-padding">
          <LeftPanel
            personalInfo={profile.PersonalInfo}
            skills={profile.Skills}
            languages={profile.Languages}
            certifications={profile.Certifications}
          />
          <BodyPanel
            experiences={profile.Experiences}
            education={profile.Education}
            projects={profile.Projects}
          />
        </div>
        {/* End Page Container */}
      </div>
      <Footer socialMedia={profile.SocialMedia} />
    </React.Fragment>
  );
}

export default App;
