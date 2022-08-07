import "./styles/App.scss";
import Home from "./components/Home";
import InCart from "./components/InCart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<InCart />} />
      </Routes>
    </div>
  );
}

export default App;
