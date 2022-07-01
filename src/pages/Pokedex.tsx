import { Navbar } from "../components/Navbar";

export function Pokedex(){
  return (
    <div>
      <Navbar/>
      <h1>800 <strong>Pokemons</strong> for you to chose your favorite</h1>
      <input type="text" placeholder="Search your pokemon" />
      <select name="type" id="type">Type</select>
      <select name="attack" id="attack">Attack</select>
    </div>
  )  
}