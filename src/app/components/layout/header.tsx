import { MenuIcon } from "lucide-react";
import { FaCartArrowDown } from "react-icons/fa";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="bg-slate-800 shadow-md py-5">
      <div className="container mx-auto flex justify-between items-center">
      <img src="/logo2.jpg" alt="logo" className="w-10 h-10 rounded-full "/>
       <h1 className="text-2xl font-bold text-white ml-2 ">ZFClothes </h1>
        <div className="hidden md:block">
          <nav className="flex items-center space-x-6">
            <a
              href="#"
              className="text-lg font-medium text-white hover:text-yellow-300"
            >
              New Arrivals
            </a>
            <a
              href="#"
              className="ml-6 text-lg font-medium text-white hover:text-yellow-300"
            >
              Cart
            </a>
            {/* cart icon */}
            <a href="#" className="text-lg text-white hover:text-yellow-300">
              <FaCartArrowDown className="h-6 w-6 " />
            </a>
          </nav>
        </div>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <MenuIcon className="text-white" />
          </SheetTrigger>
          <SheetContent>
            <div className="hidden md:block">
              <nav className="flex items-center space-x-6">
                <a
                  href="#"
                  className="text-lg font-medium text-gray-700 hover:text-blue-600"
                >
                  New Arrivals
                </a>
                <a
                  href="#"
                  className="ml-6 text-lg font-medium text-gray-700 hover:text-blue-600"
                >
                  Cart
                </a>
                {/* cart icon */}
                <a
                  href="#"
                  className="text-lg text-gray-700 hover:text-blue-600"
                >
                  <FaCartArrowDown className="h-6 w-6" />
                </a>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
