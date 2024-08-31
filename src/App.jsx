import React,{ useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState("");
  const [currentInput, InputItems] = useState([]);

  function handleinput(event){
    const newVal = event.target.value;
    setCount(newVal);
  }
  function handleInputItems(){
    InputItems(prev =>{
      return [...prev, count]
    })
    setCount("");

  }





  return (<div className="container">
    <div className="heading">
      <h1>To Do App</h1>
    </div>

    <div className="form">
        <input type="text"  onChange={handleinput} value={count}/>
        <button onClick={handleInputItems}><span>Add Note</span></button>
    </div>
    <div>
        <ul>
          {currentInput.map(todoitem => (
            <li>{todoitem}</li>
          ))}
        </ul>
      </div>
  </div>
  );
}

export default App;
