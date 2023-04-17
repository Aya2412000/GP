import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Components/Main.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignNewProvider from "./Components/Sign As Provider/SignNewProvider";

import SignClient from "./Components/Sign Client/SignClient";
import LOGIN from "./Components/LogIn/LOG/LOGIN";
import LogIn from "./Components/LogIn/LogIn";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signAsProvider" element={<SignNewProvider />} />
        <Route exact path="/signup" element={<SignClient />} />
        <Route exact path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}
