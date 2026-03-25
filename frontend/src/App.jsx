import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {BrowserRouter , Routes, Route } from "react-router-dom";
import './App.css'
import JobList from './components/JobList'
import JobForm from './components/JobForm'
import "./App.css";

function App() {
  

  return (
    <>
    <h1> JOB PORTAL</h1>
    <BrowserRouter>
    <Routes>
      <Route path = "/"
      element= {<JobList />}/>
      <Route path= "/add"
      element= {<JobForm />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
