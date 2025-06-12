import React from "react";
import "./App.css";
import { HelpMarkdown } from "./helpmarkdown"; 

const App = () => {
  return (
    <div className="App">
      <h1>Ajuda de Markdown</h1>
      <HelpMarkdown />
    </div>
  );
};

export default App;