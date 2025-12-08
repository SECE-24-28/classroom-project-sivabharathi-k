import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  var name = "siva";
  var age = 20;
  const Marks = { Tamil: 90, English: 80, Maths: 100 };

  return (
    <>
      <h2>Hlo Welcome . This is react!!!</h2>
      <Sample name={name} age={age} Marks={Marks} />
    </>
  );
}

function Sample(datas) {
  const { name, age, Marks } = datas;

  return (
    <>
      <h1>
        My name is {name} and my age is {age}
      </h1>

      <h2>My Marks:</h2>
      <ul>
        {Object.entries(Marks).map(([subject, mark], index) => (
          <li key={index}>
            {subject}: {mark}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
