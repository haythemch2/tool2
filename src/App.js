import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "./Slices/DataSlice";
import LoginComp from "./LoginComp";

function App() {
  const x = useSelector((state) => state.data.data);
  const dispatch = useDispatch();

  const [text, settext] = useState("");

  const handleSubmit = () => {
    dispatch(addData(text));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{x}</h1>
        <input type="text" onChange={(e) => settext(e.target.value)} />
        <button onClick={handleSubmit}>submit</button>
        <LoginComp />
      </header>
    </div>
  );
}

export default App;
