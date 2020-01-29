import React from 'react';

function Certifications({ certifications }) {
  return (
    <React.Fragment>
      <div class="w3-container">
        <p class="w3-large">
          <b>
            <i class="fas fa-award fa-fw w3-margin-right w3-text-teal"></i>
            Certifications
          </b>
        </p>
        {certifications.map(certification => {
          return (
            <div class="w3-container">
              <h6>
                <b>{certification.Name}</b>
              </h6>
              <h6 class="w3-text-teal">
                <i class="fa fa-calendar fa-fw w3-margin-right"></i>
                {`${certification.Date} - ${certification.Platform}`}
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

export default Certifications;
