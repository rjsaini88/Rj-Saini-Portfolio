import React from "react";
import { useState } from "react";
import AboutMe from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import NavTabs from "./components/NavTabs";
import Projects2 from "./components/Project2";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <NavTabs />
      <AboutMe />
      <Projects2 />
      {/* <Projects /> */}
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
