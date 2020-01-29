import React from 'react';

function Skills({ skills }) {
  return (
    <div class="w3-container">
      <p class="w3-large">
        <b>
          <i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>
          Skills
        </b>
      </p>
      {skills.map(skill => {
        return (
          <React.Fragment>
            <p>{skill.Name}</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
              <div
                class="w3-container w3-center w3-round-xlarge w3-teal"
                style={{ width: `${skill.Percent}` }}
              >
                {skill.Percent}
              </div>
            </div>
          </React.Fragment>
        );
      })}
      <br />
    </div>
  );
}

export default Skills;
