import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Logement, About, ErrorPage } from "./index";

function RoutesPages() {
  return (
    <div>
      <Routes>
        {/* Route Home */}
        <Route path="/" element={<Home />} />
        {/* route FicheLogement */}
        <Route path="fichelogement" element={<Logement />} />
        {/* Route About */}
        <Route path="about" element={<About />} />
        {/* route ErrorPage */}
        <Route path="errorpage" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default RoutesPages;
