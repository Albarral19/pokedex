import { LogoPokemon } from "./LogoPokemon";

export function Header() {
  return (
    <header className="w-full h-[93px] bg-yellow-500 py-4 shadow-xl">
      <div className="container mx-auto px-24 flex items-center justify-between">
        <LogoPokemon />
        <div className="font-medium text-2xl text-black">
          <a href="" className="p-8"><span className="border-black border-b-2 p-2">Home</span></a>
          <a href="" className="p-8">Pokédex</a>
          <a href="" className="p-8">Legendaries</a>
          <a href="" className="p-8">Docs</a>
        </div>
      </div>
    </header>
  )
}