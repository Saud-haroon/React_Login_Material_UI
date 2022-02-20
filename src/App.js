
import Login from './components/Login';
import Header from './components/Header';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Users from './components/Users';

function App() {
  useEffect(() => {
    return () => {
      localStorage.removeItem("SOWAN-TOKEN")
    };
  }, []);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
         
         
          <Route path='/' element={<Users/>}/>
          <Route path='/login' element={<Login Title="Login"/>}/>
          <Route path='/register' element={<Login Title="Register" />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
