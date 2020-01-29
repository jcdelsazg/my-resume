import React from 'react';
import './Footer.css';

function Footer({ socialMedia }) {
  return (
    <footer class="w3-container w3-teal w3-center w3-margin-top">
      <p>Find me on social media.</p>
      <a href={socialMedia.Github} target="_blank" rel="noopener noreferrer">
        <i class="fab fa-github w3-hover-opacity"></i>
      </a>
      <a href={socialMedia.Linkedin} target="_blank" rel="noopener noreferrer">
        <i class="fab fa-linkedin w3-hover-opacity"></i>
      </a>

      <p>
        Created by Juan Carlos Del Saz (jcdelsazg) using{' '}
        <a
          href="https://www.w3schools.com/w3css/default.asp"
          target="_blank"
          rel="noopener noreferrer"
        >
          w3.css
        </a>
      </p>
    </footer>
  );
}

export default Footer;
