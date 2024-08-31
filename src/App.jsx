import React,{ useState } from "react";
import "./App.css";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    toast("Note Added successfully!")
    setCount("");

  }





  return (<div className="container">
    <div className="heading">
      <h1>To Do App</h1>
    </div>

    <div className="form">
        <input type="text"  onChange={handleinput} value={count}/>
        <button onClick={handleInputItems}><span>Add Note</span></button>
        <ToastContainer position="bottom-center"
autoClose={2000}
hideProgressBar={true}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition: Bounce />
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
