import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout"
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Erreur404 from "../pages/404/404";
import Logement from "../pages/Logement/Logement";

function RoutesPath() {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/a-propos" element={<About />}/>
                    <Route path="*" element={<Erreur404 />}/>
                    <Route path="/logement" element={<Logement />}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default RoutesPath;