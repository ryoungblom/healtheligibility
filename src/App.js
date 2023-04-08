import logo from './logo.svg';
import './App.css';
import Typef from "./components/typef";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/app.js";
import LayoutDefault from "./components/layoutDefault";

function App() {
  return (

    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
