import React from "react";

function Nav({ currentPage, handlePageChange }) {
  return (
    <>
      <nav className="red darken-4 customnav">
        <ul>
          <li>
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => handlePageChange("Project")}
              className={
                currentPage === "Project" ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
