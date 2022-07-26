import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import App from "./app_home";
import Home from "./components/home";

const root = ReactDOM.createRoot(
    document.getElementById("root")
  );
  root.render(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );