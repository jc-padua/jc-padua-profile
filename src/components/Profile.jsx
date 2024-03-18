import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Profile() {
  return (
    <section className="flex flex-col gap-10 m-6">
      <div className="flex flex-col gap-1">
        <p className="min-[320px]:text-xl sm:text-2xl lg:text-5xl lg:text-left font-medium text-center">
          Jork Cedric Padua
        </p>
        <p className="min-[320px]:text-sm sm:text-2xl lg:text-base lg:text-left text-center">
          Front-End Developer
        </p>
      </div>
      <p className="min-[320px]:text-[1rem] sm:text-2xl lg:text-2xl lg:leading-10 leading-7 text-justify">
        I'm a self-taught frontend developer with a year of experience.
        Passionate about crafting attractive, user-friendly websites. Eager to
        learn new technologies, I'm confident in my ability to meet and exceed
        your expectations. Beyond technical skills, I'm creative and motivated,
        always seeking to improve and take on challenges.
      </p>
      <div className="flex gap-6 items-center justify-center">
        <a href="https://www.linkedin.com/in/jc-padua/" target="_blank">
          <FaLinkedin size={30} color="aliceblue" />
        </a>
        <a href="https://github.com/jc-padua" target="_blank">
          <FaGithub size={30} color="aliceblue" />
        </a>
        <a href="https://www.instagram.com/jrkpadua/" target="_blank">
          <FaInstagram size={30} color="aliceblue" />
        </a>
        <a href="https://www.facebook.com/jcflores.padua" target="_blank">
          <FaFacebook size={30} color="aliceblue" />
        </a>
      </div>
    </section>
  );
}

export default Profile;
