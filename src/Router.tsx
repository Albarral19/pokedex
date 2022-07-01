import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pokedex } from "./pages/Pokedex";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pokedex" element={<Pokedex/>}/>
    </Routes>
  )
}