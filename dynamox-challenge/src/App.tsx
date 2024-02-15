import './App.css'

import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from './pages/Dashboard';

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Navigate to="/data" />}/>
        <Route path="/data" element={<Dashboard />}/>
      </Routes>
    </div>
  )
}

export default App
