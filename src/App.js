import './App.css';
import ImageContainer from './Components/ImageContainer'
import Context from './Context';
import React,{useState} from 'react'

function App() {
  const [val,setVal] = useState(1);

  const handleClick = (event) => {
      setVal(event.target.value)
  }

  return (
    <Context>
      <div className="App">
        <div className="inputBox">
          <span>No. of cards:</span>
          <input type='number' value={val} onChange={handleClick}/>
          <i>(Enter gt 15 to see infinite scroll)</i>
        </div>
        <ImageContainer val ={val}/>
      </div>
    </Context>
  );
}

export default App;
