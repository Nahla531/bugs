import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bugAdded } from "./actions/index";
import { useState } from "react";
import Bug from "./Bug";
function App() {
  const bugs = useSelector((state) => state);
  console.log(bugs);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  console.log(bugs);
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          setInput("");
          dispatch(bugAdded(input));
        }}
      >
        Add
      </button>

      {bugs.map((bug) => (
        <Bug key={bug.id} id={bug.id} des={bug.description} />
      ))}
    </div>
  );
}

export default App;
