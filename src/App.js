import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Trending from './Pages/Trending';
import Movies from './Pages/Movies';
import Tv from './Pages/TV'
import Search from './Pages/Search';
import './App.css';
const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Trending />} exact/>
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv_series" element={<Tv />} />
          <Route path="/search" element={<Search />} /> 
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
