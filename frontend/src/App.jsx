import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import Users from  './User'

function App() {
  return (

    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/home" element={<Home />} />
        <Route path='/users' element={<Users />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
