import React from 'react';
import './PersonalInfo.css';
import jcsaz from '../../../data/images/jcsaz.png';

function PersonalInfo({ personalInfo }) {
  return (
    <React.Fragment>
      <div class="w3-display-container">
        <img src={jcsaz} class="avatar" alt="Avatar" />
        <div class="w3-display-bottomleft w3-container w3-text-black">
          <h2>{personalInfo.Name}</h2>
        </div>
      </div>
      <div class="w3-container">
        <p>
          <i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
          {personalInfo.Position}
        </p>
        <p>
          <i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>
          {personalInfo.Address}
        </p>
        <p>
          <i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
          {personalInfo.Email}
        </p>
        <p>
          <i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
          {personalInfo.Telephone}
        </p>
        <hr />
      </div>
    </React.Fragment>
  );
}

export default PersonalInfo;
