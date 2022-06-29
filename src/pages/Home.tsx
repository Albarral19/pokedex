import { Navbar } from "../components/Navbar";
import imgHome from '../assets/pokemon-home.png'

export function Home() {
  return (
    <div className="min-h-screen bg-yellow-500 bg-gradient-to-t from-yellow-600">
      <Navbar/>
      <main className="container mx-auto px-24 flex items-center justify-between">
        <div className="pt-24 w-[516px]">
          <h1 className="text-7xl tracking-widest"><strong>Find</strong> all your favorite <strong>Pokemon</strong></h1>
          <p className="pt-16 pb-16 text-3xl">You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <button 
            className="w-56 h-16 text-2xl font-semibold rounded-xl rounded-b-2xl border-b-[7px] border-emerald-500 bg-emerald-400 hover:border-none">
              See pokemons
          </button>
        </div>
        
        <div>
          <img 
            src={imgHome} 
            alt="Pikachu"
            className=" "
        />
        </div>
      </main>      
    </div>
  )
}