import React, { useState } from "react";

import Header from "./components/Header";

import "./App.css";
import backgroundImg from "./assets/background.jpg";

function App() {
  const [projects, setProject] = useState(["Dev de app", "Front web"]);

  const handleAddProjects = () => {
    setProject([...projects, `Novo Projeto ${Date.now()}`]);
  };

  return (
    <>
      <Header title="Title 1" />
      <img width="300" src={backgroundImg} />
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProjects}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;
