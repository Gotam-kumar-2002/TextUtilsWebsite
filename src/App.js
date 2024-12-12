
// import './App.css';
// import About from './components/About';
// import Alert from './components/Alert';
// import Navbar from './components/Navbar';
// import TextFrom from './components/TextFrom';
// import React ,{useState} from 'react'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



// function App() {
//   const [mode,setMode] = useState('light');
//   const [alert,setAlert] = useState()

//   const showAlert = (message,type) =>{
//     setAlert({
//       msg : message ,
//       type : type
//     })
//     setTimeout(()=>{
//       setAlert(null)
//     },2000)
//   }

//   const toggleStyle = ()=>{
//     if(mode === 'light'){
//       setMode('dark')
//       document.body.style.backgroundColor = '#042743'
//       showAlert("Dark mode is enabled","success")
//     }
//     else{
//       setMode('light')
//       document.body.style.backgroundColor = 'white'
//       showAlert("Light mode is enabled","success")
//     }
//   }

//   return (
//   <>
//     <Router>
//       <Navbar title="TextUtils"
//               contact="about Us"
//               mode={mode}
//               toggleStyle={toggleStyle}
//       />

//       <Alert  alert={alert} />

//     <div className="container my-5">
//     <Routes>
//           <Route path="/">
//           <TextFrom heading="Enter The Text To Utiylise" showAlert={showAlert} mode={mode}/>
//           </Route>
//           <Route path="/about"> 
//                 <About/>  
//           </Route>
//           </Routes>
       
//     </div>
//     </Router>
//     </>
//   );
// }

// export default App;


import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const RemoveClass=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
  const toggleStyle = (cls) => {
    RemoveClass();
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode is enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is enabled', 'success');
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          contact="About Us"
          mode={mode}
          toggleStyle={toggleStyle}
        />

        <Alert alert={alert} />

        <div className="container my-5">
          {/* Use Routes instead of Switch */}
          <Routes>
            <Route exact path="/" element={<TextFrom heading="Try TextUtils - Word Counter, Character Counter, Extra Remove Spaces" showAlert={showAlert} mode={mode} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
