import { LogoPokemon } from "./LogoPokemon";

export function Header() {
  return (
    <header className="w-full h-[93px] bg-yellow-500 py-4 shadow-xl">      
      <div className="container mx-auto flex items-center justify-between ">
        <LogoPokemon />
        <div className="text-black">
          <a href="" className="p-8 font-medium text-2xl"><span className="border-black border-b-2 p-2">Home</span></a>
          <a href="" className="p-8 font-medium text-2xl">Pokédex</a>
          <a href="" className="p-8 font-medium text-2xl">Legendaries</a>
          <a href="" className="p-8 font-medium text-2xl">Docs</a>
        </div>        
      </div>
    </header>
  )
}