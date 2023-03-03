// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const myInfo = [
    {
      name: 'Ranjit Saini',
      age: '35',
      title: 'Sr. GM',
    },
    {
      nickname: 'Rj',
      hobbies: 'working with hadnds and building shit',
      futureGoals: 'become a full stack developer',
    },
    {
education: 'Bachelors of Science in Business Admistration and Marketing Management',
curretClasses: 'BootCamp Stack'
    }
  ]
  

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <span>Hello World</span>
    </div>
  )
}






// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import React from "react";
import PortfolioContainer from "./components/PortfolioContainer"

const App = () => <PortfolioContainer/>;
// {
  // const [count, setCount] = useState(0)

//   return (
//     <div className="w-screen h-screen flex items-center justify-center">
//       <span>Hello World</span>
//     </div>
//   )
// }

export default App
