import React from "react";
import quiz from "../assets/codingquizscreenshot.png";
import employeedb from "../assets/empdb.gif";
import notetaker from "../assets/notetaker.png";
import vernaculearn from "../assets/vernaculearnscreenshot.png";
import dashboard from "../assets/dashboard.png";
function Project() {
  return (
    <>
      <section id="projects">
        <div className="row" id="project1">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Vernac-u-learn!</span>
                <img src={vernaculearn} alt="Vernac-u-learn" />
              </div>
              <div className="card-action">
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

        <div className="row">
          <div className="col s6 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text" id="project2">
                <span className="card-title">Weather Dashboard</span>
                <img src={dashboard} alt="Weather Dashboard" />
              </div>
              <div className="card-action">
                <a href="https://zd092718.github.io/weatherdashboardhw/">
                  Finished Product Link
                </a>
                <a href="https://github.com/Zd092718/weatherdashboardhw">
                  Github Link
                </a>
              </div>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text" id="project2">
                <span className="card-title">Employee Tracker Database</span>
                <img src={employeedb} alt="Employee Tracker Gif" />
              </div>
              <div className="card-action">
                <a href="https://github.com/Zd092718/employeetrackerdb">
                  Github Link
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s6 m6">
            <div className="card blue-grey darken-1" id="project3">
              <div className="card-content white-text">
                <span className="card-title">Coding Quiz</span>
                <img id="cquiz" src={quiz} href="" alt="Coding Quiz" />
              </div>
              <div className="card-action">
                <a href="https://zd092718.github.io/zdcodingquiz/">
                  Finished Product Link
                </a>
                <a href="https://github.com/Zd092718/zdcodingquiz">
                  Github Link
                </a>
              </div>
            </div>
          </div>
          <div className="col s6 m6">
            <div className="card blue-grey darken-1" id="project3">
              <div className="card-content white-text">
                <span className="card-title">Note Taker</span>
                <img id="cquiz" src={notetaker} href="" alt="Note Taker" />
              </div>
              <div className="card-action">
                <a href="https://infinite-bayou-35594.herokuapp.com/">
                  Finished Product Link
                </a>
                <a href="https://github.com/Zd092718/notetaker">Github Link</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
