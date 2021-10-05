import React from "react";
// First we import our Hello component from our components folder.
// import { Header, Nav, Project, Footer } from "./components";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Footer from "./components/Footer";

// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `Hello` and rendering it in the return method.
function App() {
  return (
    <>
      <header>
        <h1>Zachary Dowd Personal Portfolio</h1>
        <nav class="red darken-4 customnav">
          <ul>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contacts</a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="projects">
        <div class="row center" id="project1">
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Vernac-u-learn!</span>
                <img
                  src="./assets/vernaculearnscreenshot.png"
                  alt="Vernac-u-learn"
                />
              </div>
              <div class="card-action">
                <a href="http://zd092718.github.io/vernac-u-learn/">
                  Finished Product Link
                </a>
                <a href="https://github.com/Zd092718/vernac-u-learn">
                  Github Link
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s6 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text" id="project2">
                <span class="card-title">Weather Dashboard</span>
                <img
                  src="../public/assets/dashboard.png"
                  alt="Weather Dashboard"
                />
              </div>
              <div class="card-action">
                <a href="https://zd092718.github.io/weatherdashboardhw/">
                  Finished Product Link
                </a>
                <a href="https://github.com/Zd092718/weatherdashboardhw">
                  Github Link
                </a>
              </div>
            </div>
          </div>
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text" id="project2">
                <span class="card-title">Employee Tracker Database</span>
                <img src="./assets/project.gif" alt="Employee Tracker Gif" />
              </div>
              <div class="card-action">
                <a href="https://github.com/Zd092718/employeetrackerdb">
                  Github Link
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s6 m6">
            <div class="card blue-grey darken-1" id="project3">
              <div class="card-content white-text">
                <span class="card-title">Coding Quiz</span>
                <img
                  id="cquiz"
                  src="./assets/codingquizscreenshot.png"
                  href=""
                  alt="Coding Quiz"
                />
              </div>
              <div class="card-action">
                <a href="https://zd092718.github.io/zdcodingquiz/">
                  Finished Product Link
                </a>
                <a href="https://github.com/Zd092718/zdcodingquiz">
                  Github Link
                </a>
              </div>
            </div>
          </div>
          <div class="col s6 m6">
            <div class="card blue-grey darken-1" id="project3">
              <div class="card-content white-text">
                <span class="card-title">Note Taker</span>
                <img
                  id="cquiz"
                  src="./assets/project-screenshot.png"
                  href=""
                  alt="Note Taker"
                />
              </div>
              <div class="card-action">
                <a href="https://infinite-bayou-35594.herokuapp.com/">
                  Finished Product Link
                </a>
                <a href="https://github.com/Zd092718/notetaker">Github Link</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" class="blue-grey darken-1">
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
        <img src="assets/selfportrait.jpg" alt="Zachary Dowd Self Portrait" />
      </section>
      <footer class="page-footer red darken-4 custfooter" id="contact">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text madeby">
                Made and designed by Zachary Dowd 🤖
              </h5>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Contact Me</h5>
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
                  <a class="grey-text text-lighten-3" href="tel:‪7203168237">
                    ‪(720) 316-8237
                  </a>
                </li>
                <li>
                  Resume:{" "}
                  <a href="./assets/Zack Dowd Resume.pdf">
                    Zachary Dowd Resume PDF
                  </a>
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
