import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./index";

function RoutesPages() {
  return (
    <div>
      <Routes>
        {/* Route Home */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default RoutesPages;
