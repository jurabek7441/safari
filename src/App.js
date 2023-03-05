import React, { useState } from "react";
import { Main } from "./Main";
import "./style.css";
function App() {
  const [state, setState] = useState("");

  let changeInput = (e) => {
    setState(e.target.value);
  };
  return (
    <div className="App">
      <Main changeInput={changeInput} state={state} />
    </div>
  );
}

export default App;
