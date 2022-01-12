import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './FunctionalComponent';
import {useState} from "react";


function App() {
const [isVisible,setVisible] =useState(true);

  return (
    <div className="App">
    
    <FunctionalComponent/>
    </div>
  );
}

export default App;
