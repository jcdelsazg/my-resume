import React from 'react';
import './Languages.css';

function Languages({ languages }) {
  return (
    <React.Fragment>
      <div class="w3-container">
        <p class="w3-large w3-text-theme">
          <b>
            <i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>
            Languages
          </b>
        </p>
        {languages.map(lang => {
          return (
            <React.Fragment>
              <p>{lang.Name}</p>
              <div class="w3-light-grey w3-round-xlarge">
                <div
                  class="w3-round-xlarge w3-teal w3-center lang"
                  style={{ width: `${lang.Percent}` }}
                >
                  {lang.Level}
                </div>
              </div>
            </React.Fragment>
          );
        })}
        <br />
      </div>
    </React.Fragment>
  );
}

export default Languages;
