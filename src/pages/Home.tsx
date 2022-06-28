import { Header } from "../components/Header";

export function Home() {
  return (
    <div className="home">
      <Header/>
      <div>
        <h1 className="text-7xl"><strong>Find</strong> all your favorite <strong>Pokemon</strong></h1>
        <p className="text-3xl">You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
        <button className="w-56 h-16 text-2xl font-semibold rounded-xl rounded-b-2xl border-b-[7px] border-emerald-500 bg-emerald-400">See pokemons</button>
      </div>
      
      <div>

      </div>
    </div>
  )
}