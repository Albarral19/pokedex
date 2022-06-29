import { Transition } from "@headlessui/react";
import { List, X } from "phosphor-react";
import { useState } from "react";
import { LogoPokemon } from "./LogoPokemon";

export function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div>
      <nav className="bg-yellow-500">
        <div className="w-full h-auto p-4 md:p-6 lg:p-8 shadow-xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a
                  className=""
                  href="#">
                  <LogoPokemon />
                </a>
              </div>              
              <div className="hidden md:block">
                <div className="ml-10 font-medium text-2xl text-black flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="p-3 hover:underline">
                    Home
                  </a>
                  <a
                    href="#"
                    className="p-3 hover:underline">
                    Pokedex
                  </a>
                  <a
                    href="#"
                    className="p-3 hover:underline">
                    Legendaries
                  </a>
                  <a
                    href="#"
                    className="p-3 hover:underline">
                    Docs
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-700"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!navbarOpen ? (
                  <List size={32} />
                ) : (
                  <X size={32} />
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={navbarOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="font-medium text-3xl text-black flex flex-col items-center">                
                <a
                  href="#"
                  className="p-3 hover:underline">                  
                  Home
                </a>
                <a
                  href="#"
                  className="p-3 hover:underline">
                  Pokedex
                </a>
                <a
                  href="#"
                  className="p-3 hover:underline">
                  Legendaries
                </a>
                <a
                  href="#"
                  className="p-3 hover:underline">
                  Docs
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}