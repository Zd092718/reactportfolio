import React from "react";
import quiz from "../assets/codingquizscreenshot.png";
import planner from "../assets/dayplanner.png";
import notetaker from "../assets/notetaker.png";
import vernaculearn from "../assets/vernaculearnscreenshot.png";
import workout from "../assets/fitnesschart.png";
import tracker from "../assets/tracker.png";
import tier from "../assets/tier.png"
function Portfolio() {
  return (
    <>
      <section id="projects">
        <div className="row" id="project1">
          <div className="col s6 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Vernac-u-learn!</span>
                <img src={vernaculearn} alt="Vernac-u-learn" />
                <ul>
                <li>Learn a new word everyday</li>
                  <li>Technologies: Javascript, Bootstrap</li>
                  <li>Role: API Management</li>
                  </ul>
              </div>
              <div className="card-action">
                <a href="http://zd092718.github.io/vernac-u-learn/">
                  Application Link
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
                <span className="card-title">Workout Tracker</span>
                <img src={workout} alt="Workout Tracker" />
                <ul>
                <li>Keep track of workouts and exercises</li>
                  <li>Technologies: MongoDB, Express.js, Mongoose, Javascript</li>
                  <li>Role: Sole Author</li>
                  </ul>
              </div>
              <div className="card-action">
                <a href="https://shielded-brook-90200.herokuapp.com/?id=6158f165bb5c360016a17354">
                  Application Link
                </a>
                <a href="https://github.com/Zd092718/workouttracker">
                  Github Link
                </a>
              </div>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text" id="project2">
                <span className="card-title">Day Scheduler</span>
                <img src={planner} alt="Day Scheduler" />
                <ul>
                <li>Planner for scheduling your day</li>
                  <li>Technologies: Bootstrap, jQuery, Moment.js</li>
                  <li>Role: Sole Author</li>
                  </ul>
              </div>
              <div className="card-action">
              <a href="https://zd092718.github.io/zddayplanner/">
                  Application Link
                </a>
                <a href="https://github.com/Zd092718/zddayplanner">
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
                <ul>
                <li>Test your Javascript basics knowledge</li>
                  <li>Technologies: Javascript</li>
                  <li>Role: Sole Author</li>
                  </ul>
              </div>
              <div className="card-action">
                <a href="https://zd092718.github.io/zdcodingquiz/">
                  Application Link
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
                <ul>
                <li>Keep track of notes by creating and deleting notes</li>
                  <li>Technologies: Javascript, Node.js, Express.js</li>
                  <li>Role: Sole Author</li>
                  </ul>
              </div>
              <div className="card-action">
                <a href="https://infinite-bayou-35594.herokuapp.com/">
                  Application Link
                </a>
                <a href="https://github.com/Zd092718/notetaker">Github Link</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col s12 m6">
            <div className="card blue-grey darken-1" id="project3">
              <div className="card-content white-text">
                <span className="card-title">Budget Tracker</span>
                <img src={tracker} alt="Budget Tracker" />
                <ul>
                  <li>Track your budget on the go</li>
                  <li>Technologies: Mongoose, MongoDB, Express.js</li>
                  <li>Role: Sole Author</li>
                </ul>
              </div>
              <div className="card-action">
                <a href="https://polar-scrubland-72333.herokuapp.com/">
                  Application Link
                </a>
                <a href="https://github.com/Zd092718/budgettracker">
                  Github Link
                </a>
              </div>
            </div>
          </div>
        <div className="col s12 m6">
            <div className="card blue-grey darken-1" id="project3">
              <div className="card-content white-text">
                <span className="card-title">viPass</span>
                <img src={tier} alt="viPass" />
                <ul>
                  <li>Allow permissions and accesses to be granted with viPass</li>
                  <li>Technologies: MongoDB, React.js, Express.js, Node</li>
                  <li>Role: Database Creation and Management</li>
                </ul>
              </div>
              <div className="card-action">
                <a href="https://arcane-scrubland-93619.herokuapp.com/">
                  Application Link
                </a>
                <a href="https://github.com/kmcwilliams1/viPass">
                  Github Link
                </a>
              </div>
            </div>
          </div>
          </div>
      </section>
    </>
  );
}

export default Portfolio;
