import React, { useState } from "react";
import { Main } from "./Main";
import "./style.css";
function App() {
  const [state, setState] = useState("");
  const [value, setValue] = React.useState([0, 1000]);

  let changeInput = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="App">
      <Main changeInput={changeInput} state={state} value={value} setValue={setValue} />
    </div>
  );
}

export default App;
