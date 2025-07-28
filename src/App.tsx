import React from "react";
import Tous from "./app/tous/tous";
import Projet from "./app/page/projet/projet";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tous />} />
        <Route path="/projet" element={<Projet />} />
      </Routes>
    </Router>
  );

};

export default App;