import { useState } from 'react';
import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import {HomePage, SinglePokemon} from './pages';

function App(props) 
  {
    return (
      <BrowserRouter>
          <div><NavLink to="/">Home</NavLink></div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokemon/:id" element={<SinglePokemon />} />
        </Routes>
      </BrowserRouter>
          )
    }

export default App

