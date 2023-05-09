
import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whether dark is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      typ: type
    });

    setTimeout(() => {
      // delete setAlert();
      setAlert(null)
    }, 2000);
  }

  const removeBodyClass=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const  colours =(cls)=>{

    removeBodyClass();
    document.body.classList.add('bg-'+cls);
  }
  

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mood has been enabled", "success")
      document.title = ("dark mood is on")
      // setInterval(() => {
      // document.title = ("dark mood in danger")
      // }, 2000);
      // setInterval(() => {
      // document.title = ("install dark mood now")
      // }, 1500);
    } 
    
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mood has been enabled", "success")
      document.title = ("light mood is on")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtlies" mode={mode} toggleMode={toggleMode} colors={colours}/>
        <Alert alert={alert} />
        {/* <Navbar/> */}
        
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element = {<About mode={mode}/>}> </Route>
            <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter The text To Analyze" mode={mode}/>}> </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
