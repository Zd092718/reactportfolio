import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Nav from "./Nav";
import Project from "./Project";
import Contact from "./Contact";
import Resume from "./Resume";
function Container() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Project") {
      return <Project />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      {/* We are passing the currentPage from state and the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}

export default Container;
