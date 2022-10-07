import React from "react";
import "./AboutMe.css";
import photo from "../../../images/photo.jpeg";

export default function AboutMe() {
  return (
    <section className="aboutme">
      <h2 className="aboutme__title">Student</h2>
      <div className="aboutme__description">
        <div className="aboutme__card">
          <h3 className="aboutme__card-name">Anastasia</h3>
          <p className="aboutme__card-role">Front-End Developer</p>
          <p className="aboutme__card-about">My name is Anastasiia and I am passionate to work as a Front End Developer. Decided to move from QA testing to web development to create useful web applications that are easy to use.</p>
          <div className="aboutme__card-links">
            <a href="https://github.com/AnastasiaA1890" className="aboutme__card-link" target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
            <a href="https://anastasia-developer.com/" className="aboutme__card-link" target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/anastasiia-andreeva/" className="aboutme__card-link" target="_blank" rel="noreferrer noopener">
              Linkedin
            </a>
          </div>
        </div>
        <img className="aboutme__photo" src={photo} alt="Anastasia's photo"/>
      </div>
    </section>
  );
}
