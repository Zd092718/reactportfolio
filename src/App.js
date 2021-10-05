import React from "react";
// First we import our Hello component from our components folder.
// import { Header, Nav, Project, Footer } from "./components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import "./assets/style.css";
import Container from "./components/Container";
// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `Hello` and rendering it in the return method.
function App() {
  return (
    <>
      <Container />
    </>
  );
}

export default App;
