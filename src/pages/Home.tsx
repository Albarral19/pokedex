import { Navbar } from "../components/Navbar";
import imgHome from '../assets/pokemon-home.png'

export function Home() {
  return (
    <div className="min-h-screen bg-yellow-500 bg-gradient-to-t from-yellow-600">
      <Navbar/>
      <main className="flex flex-col items-center justify-between">
        <img 
            src={imgHome} 
            alt="Pikachu"
            className=""
        />
        <div className="pt-6 px-2 text-center">
          <h1 className="text-6xl "><strong>Find</strong> all your favorite <strong>Pokemon</strong></h1>
          <p className="p-6 text-xl">You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <button 
            className="w-80 h-16 text-2xl font-semibold rounded-xl rounded-b-2xl border-b-[7px] border-emerald-500 bg-emerald-400 hover:border-none">
              See pokemons
          </button>
        </div>
        
        
      </main>      
    </div>
  )
}