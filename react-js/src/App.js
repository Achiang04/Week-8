import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);
  const [counter, setCounter] = useState(0);
  const [student] = useState([
    { name: "ucup", umur: 20 },
    { name: "bambang", umur: 10 },
    { name: "mario", umur: 1 },
    { name: "asep", umur: 202 },
    { name: "tuyul", umur: 60 },
    { name: "orang hilang", umur: "udah mati" },
  ]);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const counterHandlePlus = () => {
    setCounter(counter + 1);
  };

  const counterHandleMinus = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React == Scroll Down
        </a>
      </header>
      <h1>Jecky Hindrawan Week#8</h1>
      <h3>toggle button</h3>
      <div>
        <button className="button" onClick={handleClick}>
          {toggle ? "On" : "Off"}
        </button>
      </div>
      <h3>toggle counter</h3>
      <h5>toggle counter {counter}</h5>
      <div>
        <button className="button" onClick={counterHandlePlus}>
          counter +
        </button>
        <button className="button" onClick={counterHandleMinus}>
          counter -
        </button>
        <ul>
          {student.map((item) => {
            return (
              <li key={item}>
                {item.name} = {item.umur}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
