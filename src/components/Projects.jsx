// src/components/Projects.jsx
import React from "react";
import './Projects.css'

const projects = [
  {
    id: 1,
    image: "/images/Snapshoot1.png",
    title: "Tonic",
    company: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 2,
    image: "/images/Snapshoot3.png",
    title: "Multi-post Stories",
    company: "FACEBOOK",
    role: "Full Stack Dev",
    year: "2015",
    description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day.",
    tech: ["HTML", "Ruby on Rails", "CSS", "JavaScript"],
  },
  // Add more project objects here
];

function Projects() {
  return (
    <section className="scroll" id="portfolio">
      {projects.map((proj) => (
        <div className="card-contain" key={proj.id}>
          <ul className="cards-list">
            <li className="hold-item">
              <img className="hold-image" src={proj.image} alt={proj.title} />
              <section>
                <div className="lists-container">
                  <h2>{proj.title}</h2>
                  <div className="lists">
                    <span className="lists-item">{proj.company}</span>
                    <img className="btno" src="/images/Counter.png" alt="dot" />
                    <span className="lists-item">{proj.role}</span>
                    <img className="btno" src="/images/Counter.png" alt="dot" />
                    <span className="lists-item">{proj.year}</span>
                  </div>
                </div>
                <div className="second-text">
                  <p>{proj.description}</p>
                </div>
                <div className="language-list-holder">
                  <ul className="language-container">
                    {proj.tech.map((lang, i) => (
                      <li className="language-item" key={i}>
                        <span>{lang}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button type="button" className="click-btn">
                  See project
                </button>
              </section>
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Projects;
