import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import { Test } from './Test';
//import { Concept } from './concept';
import { NavBar } from './components/NavBar';
import { CourseMaterial } from './components/CourseMaterial';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar/>

      <CourseMaterial></CourseMaterial>
      
    </>
  
  );
}

export default App;
