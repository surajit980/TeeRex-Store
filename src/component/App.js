import Navbar from "./Navbar";
import Home from './Home'
import { Routes, Route } from "react-router-dom";
import Carts from "./Carts";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/carts" element={<Carts/>}/>
      </Routes>
    </div>
  );
}

export default App;
