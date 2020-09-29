import React from "react";
import "./style.css";

import Container from './Container.js'

const App = ()=> {
  return (
    <>
        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand font-weight-bold" href="#">TODO APP</a>
        </nav>
        <Container/>
    </>
  );
}

export default App;