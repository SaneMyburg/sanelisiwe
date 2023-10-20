import React from 'react';
import { GithubIcon, LinkedInIcon, MediumIcon } from '../icons';

const Home = () => (
  <div className="home-container">
    <h1>Sane</h1>
    <div className="content-container">
      <div className="social-links">
        <a href="https://github.com/SaneMyburg" aria-label="GitHub Profile"><GithubIcon /></a>
        <a href="https://www.linkedin.com/in/sanemyburg" aria-label="LinkedIn Profile"><LinkedInIcon /></a>
        <a href="https://medium.com/@sane.myburg" aria-label="Medium Blog"><MediumIcon /></a>
      </div>
      <div className="intro">
        <img src="/images/SaneM.png" alt="" />
      </div>
    </div>
    <div>
      <p>
        <strong>I&apos;m a full stack software developer</strong>
        , I can help you build a product, feature or website.
        Look through some of my work and experience.
        If you like what you see and have a project you
        need coded, don&apos;t hesitate to contact me.
      </p>
    </div>
  </div>
);

export default Home;
