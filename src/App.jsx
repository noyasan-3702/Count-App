import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Count from "./Count";
import Clock from "./Clock";
import './App.css'

function App() {

  //　HTMLを表示する //
  return (
    <>
    <Router>
      <div className="counter-container">
        <h1 className="Title">でじたるかうんたぁ</h1>
        <nav>
          <Link to="/Count">
            <button className="btn0">かうんたぁ</button>
          </Link>
          <Link to="/Clock">
            <button className="btn0">いまなんじぃ</button>
          </Link>
        </nav>
        <Routes>
          <Route path="/Count" element={<Count />} />
          <Route path="/Clock" element={<Clock />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App;
