import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import SVGText from '../src/components/SVGText';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [dataSvgText, setDataSvgText] = useState("hello");

  //this.handleChange = this.handleChange.bind(this);

  /*useEffect( () => {
    fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
  },[]);*/

  function handleChange(e){
    setDataSvgText(e.target.value);
  }

  return (
    <div className="App">
        <SVGText name={dataSvgText}/>
        <input type='text' onChange={handleChange}/>

    </div>
  );
}

export default App;
