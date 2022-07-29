import './App.css';

import React, { useState } from 'react';

//setInterval(updateTime, 2000);

export default function App() {

//setInterval(updateTime, 2000);

const now = new Date().toLocaleTimeString();

const [time, setTime] = useState(now);

function updateTime() {
  const newTime = new Date().toLocaleTimeString();
setTime(newTime)
}

  return (
    <div className="container">
    <h1> {time} </h1>
    <button onClick={updateTime}> Get Time </button>
  </div>
);
}

