// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";
import Car from "./components/Car";
import { Car2 } from "./components/Car2";
import Company from "./components/Company";
import Count from "./components/Count";
import Empolyee from "./components/Employee";
import User from "./components/User";

function App() {
  //js code
  const empName = "";

  return (
    <>
      <h1>Demo Project</h1>
      <User></User>
      <Count></Count>
      <p>react Project</p>
      <Car></Car>
      <Car2></Car2>
      <Empolyee
        dataFromParent={empName}
        string="hi"
        flag
        flag1={false}
      ></Empolyee>
      <Company userName={empName} />
    </>
  );
}

export default App;
