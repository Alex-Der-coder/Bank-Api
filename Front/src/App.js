import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Profil from "./Components/Profil";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="App">
          <Home />
        </div>} />
        <Route path="/signup" element={<div className="App">
        <Signup />
        </div>} />
        <Route path="/profil" element={<div className="App">
        <Profil />
        </div>} />
      </Routes>
    </Router>
  );
}

export default App;
