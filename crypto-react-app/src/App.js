import React from "react"
import { Routes, Route } from "react-router-dom"
import './App.css'
import Header from "./components/Header"
import CoinPage from "./pages/CoinPage"
import Homepage from "./pages/Homepage"
function App() {
  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path="/" element={ <Homepage/> } />
        <Route path="/coins/:id" element={ <CoinPage/> } />        
      </Routes>
    </div>
  )
}

export default App
