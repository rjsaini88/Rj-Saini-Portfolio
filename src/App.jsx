import React from "react";
import { useState } from "react";
// import './App.css';
import AboutMe from "./componenets/About";
import Contact from "./componenets/Contact";
import Navbar from "./componenets/Navbar";
import Projects from "./componenets/Projects";
import Skills from "./componenets/Skills";
// import PortfolioContainer from "./componenets/PortfolioContainer";
import NavTabs from "./componenets/NavTabs";
// import PortfolioContainer from "./componenets/PortfolioContainer";
// import './index.css'

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      {/* // <div className="w-screen h-screen flex items-center justify-center text-white-400 bg-gray-900 body-font"> */}
      <NavTabs />
      {/* <Navbar/> */}
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      {/* <PortfolioContainer/> */}
    </main>

    // <p>Hello World</p>
    /* </div> */
  );
}

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   // const [count, setCount] = useState(0)
//   const myInfo = [
//     {
//       name: 'Ranjit Saini',
//       age: '35',
//       title: 'Sr. GM',
//     },
//     {
//       nickname: 'Rj',
//       hobbies: 'working with hadnds and building shit',
//       futureGoals: 'become a full stack developer',
//     },
//     {
// education: 'Bachelors of Science in Business Admistration and Marketing Management',
// curretClasses: 'BootCamp Stack'
//     }
//   ]

//   return (
//     <div className="w-screen h-screen flex items-center justify-center">
//       <span>Hello World</span>
//     </div>
//   )
// }

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
// import React from "react";
// import PortfolioContainer from "./components/PortfolioContainer"

// const App = () => <PortfolioContainer/>;
// {
// const [count, setCount] = useState(0)

//   return (
//     <div className="w-screen h-screen flex items-center justify-center">
//       <span>Hello World</span>
//     </div>
//   )
// }
