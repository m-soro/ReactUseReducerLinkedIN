/**
 * -----------
 * USEREDUCER
 * -----------
 *
 */
import "./App.css";
import { useReducer } from "react";

function App() {
  //   // useReducer takess two arguments, first is the function, second is the initial state
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  //   // compared to useState, we don't have to manage the code inside the onChange
  return (
    <div className="App container">
      <h1>useReducer</h1>
      <input type="checkbox" value={checked} onChange={setChecked} />
      <label htmlFor="checked">{checked ? "Checked" : "Not Checked"}</label>
    </div>
  );
}

export default App;
