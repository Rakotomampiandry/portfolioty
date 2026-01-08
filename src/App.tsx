import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Page from "./app/page/page";
import { Header } from "antd/es/layout/layout";
import { Cadre, CadreShadow } from "./app/component/cadre";
import { Skil } from "./app/component/skil";
import Projet from "./app/page/projet";
import { CadreProjetDroit, CadreProjetGauche } from "./app/component/cadreProjet";
import { Anime } from "./app/component/animation";
import { Service, ServiceP } from "./app/component/service";
import DetailService from "./app/page/detailService";
import { Facebook } from "./app/modal/facebook";
import { Ouverture } from "./app/component/ouverture";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/header" element={<Header />} />
        <Route path="/cadre" element={<CadreShadow />} />
        <Route path="/skil" element={<Skil />} />
        <Route path="/projet" element={<Projet />} />
        <Route path="/service" element={<Service />} />
        <Route path="/serviceP" element={<ServiceP />} />
        <Route path="/detailS" element={<DetailService />} />
        <Route path="/ouverture" element={<Ouverture />} />
        {/* <Route path="/animation" element={<Anime />} /> */}
        {/* <Route path="/cadreProjet" element={<CadreProjetDroit />} /> */}
        {/* <Route path="/cadreProjetD" element={<CadreProjetGauche />} /> */}
      </Routes>
    </Router>
  );

};

export default App;