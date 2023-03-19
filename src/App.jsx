import React from "react";
import { useState } from "react";
import AboutMe from "./componenets/About";
import Contact from "./componenets/Contact";
import Projects from "./componenets/Projects";
import Skills from "./componenets/Skills";
import Footer from "./componenets/Footer";
import NavTabs from "./componenets/NavTabs";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <NavTabs />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
