import { Search, Plus, Menu, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <div className="w-5 h-5 bg-white rounded-full"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Zubeen Da Community
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Memories & Music</p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-lg font-bold text-gray-900">ZDC</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              to="/"
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 ${
                location.pathname === "/" 
                  ? "text-blue-600 bg-blue-50" 
                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              Home
            </Link>

            {/* Create Post Button */}
            <Link to="/create-post">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 ml-4">
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">Create Post</span>
              </Button>
            </Link>
             <Link 
               to="/achievements"
               className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 ${
                 location.pathname === "/achievements" 
                   ? "text-blue-600 bg-blue-50" 
                   : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
               }`}
             >
               Achievements
             </Link>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-3">
            {/* Search Bar */}
            <div className="hidden sm:flex items-center relative">
              <Search className="absolute left-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search memories..."
                className="pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-64 bg-gray-50/50 transition-all duration-200"
              />
            </div>

            {/* Mobile Search Icon */}
            <button className="sm:hidden p-2.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Search className="h-5 w-5" />
            </button>

            

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="md:hidden border-t border-gray-100 py-4 bg-white/95 backdrop-blur-md">
                <nav className="flex flex-col space-y-2">
                  <Link 
                    to="/"
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      location.pathname === "/" 
                        ? "text-blue-600 bg-blue-50" 
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/create-post"
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      location.pathname === "/create-post" 
                        ? "text-blue-600 bg-blue-50" 
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Create Post
                  </Link>
                  <Link 
                    to="/achievements"
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      location.pathname === "/achievements" 
                        ? "text-blue-600 bg-blue-50" 
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Achievements
                  </Link>
                </nav>
              </div>
            )}
      </div>
    </header>
  );
}
