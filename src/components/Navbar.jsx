import { Menu, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 via-fuchsia-400 to-blue-400" />
          <span className="text-gray-900 font-semibold tracking-tight">Lumineux</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#benefits" className="hover:text-gray-900 transition-colors">Benefits</a>
          <a href="#ingredients" className="hover:text-gray-900 transition-colors">Ingredients</a>
          <a href="#reviews" className="hover:text-gray-900 transition-colors">Reviews</a>
          <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-all">
            <ShoppingBag className="h-4 w-4" />
            Shop now
          </button>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-300/70 text-gray-700">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  );
}
