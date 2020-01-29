import React from 'react';

function Education({ education }) {
  return (
    <React.Fragment>
      <div class="w3-container w3-card w3-white w3-margin-bottom">
        <h2 class="w3-text-grey w3-padding-16">
          <i class="fa fa-graduation-cap fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
          Education
        </h2>
        {education.map(edu => {
          return (
            <div class="w3-container">
              <h5 class="w3-opacity">
                <b>{edu.Title}</b>
              </h5>
              <h6 class="w3-text-teal">
                {edu.StudyCentre} <i class="fa fa-map-marker fa-fw"></i>
                {edu.Location}
              </h6>
              <h6 class="w3-text-teal">
                <i class="fa fa-calendar fa-fw w3-margin-right"></i>
                {edu.Dates}
              </h6>
              <hr />
            </div>
          );
        })}
        <br />
      </div>
    </React.Fragment>
  );
}

export default Education;
