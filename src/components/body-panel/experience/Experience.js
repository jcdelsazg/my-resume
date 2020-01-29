import React from 'react';
import './Experience.css';

function Experience({ experiences }) {
  return (
    <React.Fragment>
      <div class="w3-container w3-card w3-white w3-margin-bottom">
        <h2 class="w3-text-grey w3-padding-16">
          <i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
          Work Experience
        </h2>
        {experiences.map(experience => {
          return (
            <div class="w3-container">
              <h5 class="w3-opacity">
                <b>
                  {experience.Position} /{' '}
                  <a
                    href={experience.Url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {experience.CompanyName}
                  </a>{' '}
                  <a
                    href={experience.Linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-linkedin w3-hover-opacity linkedin"></i>
                  </a>
                </b>
              </h5>
              <h6 class="w3-text-teal">
                <i class="fa fa-calendar fa-fw w3-margin-right"></i>
                {experience.StartDate} -{' '}
                {experience.EndDate === '' ? (
                  <span class="w3-tag w3-teal w3-round">Current</span>
                ) : (
                  experience.EndDate
                )}{' '}
                <i class="fa fa-map-marker fa-fw"></i>
                {experience.Location}
              </h6>
              <p>{experience.Description}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default Experience;
