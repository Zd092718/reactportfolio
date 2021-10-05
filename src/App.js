import React from "react";
// First we import our Hello component from our components folder.
// import { Header, Nav, Project, Footer } from "./components";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Footer from "./components/Footer";

import portrait from "./assets/selfportrait.jpg";

import resume from "./assets/Zack Dowd Resume.pdf";
import "./assets/style.css";
// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `Hello` and rendering it in the return method.
function App() {
  return (
    <>
      <Header />
      <Nav />
      <Project />
      <section id="about" className="blue-grey darken-1">
        <h2>About Me</h2>
        <p>
          My name is Zachary Dowd. I'm a full stack web developer in training
          with a focus on back-end development. I've been programming since
          February of 2021. I spent ten years as a chef and then wanted to make
          my way into the technical field.
          <br />
          I've spent my whole life working with technology in different forms,
          but all of it comes down to computer sciences.
        </p>
        <img src={portrait} alt="Zachary Dowd Self Portrait" />
      </section>
      <footer className="page-footer red darken-4 custfooter" id="contact">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text madeby">
                Made and designed by Zachary Dowd 🤖
              </h5>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Contact Me</h5>
              <ul>
                <li>
                  Email:
                  <a href="mailto: zacharyd2796@zohomail.com">
                    {" "}
                    zacharyd2796@zohomail.com
                  </a>
                </li>
                <li>
                  LinkedIn:{" "}
                  <a href="https://www.linkedin.com/in/zack-dowd-9a86a8213/">
                    Zachary Dowd LinkedIn
                  </a>
                </li>
                <li>
                  Github Profile:
                  <a href="https://github.com/Zd092718">
                    {" "}
                    https://github.com/Zd092718
                  </a>
                </li>
                <li>
                  Phone Number:{" "}
                  <a
                    className="grey-text text-lighten-3"
                    href="tel:‪7203168237"
                  >
                    ‪(720) 316-8237
                  </a>
                </li>
                <li>
                  Resume: <a href={resume}>Zachary Dowd Resume PDF</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
