// import { Search, Plus, Menu, X } from "lucide-react";
// import { Button } from "@/app/components/ui/button";
// import { useState } from "react";
// import { Link, useLocation } from "@tanstack/react-router";

import { UploadCloudIcon } from "lucide-react";
import { AuthButton } from "../auth/auth-button";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Link } from "@tanstack/react-router";

// export function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   return (
//     <header className="top-0 z-50 sticky bg-white/95 shadow-lg backdrop-blur-md border-gray-100 border-b">
//       <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo and Brand */}
//           <Link to="/" className="flex items-center space-x-3">
//             <div className="hidden sm:block">
//               <h1 className="bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 font-bold text-transparent text-xl text-nowrap">
//                 Joi Zubeen Da
//               </h1>
//               <p className="-mt-1 text-gray-500 text-xs">Memories & Music</p>
//             </div>

//             <div className="sm:hidden">
//               <h1 className="font-bold text-gray-900 text-lg">ZDC</h1>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-1">
//             {/* Create Post Button */}
//             <Link to="/post">
//               <Button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 hover:from-blue-700 to-purple-600 hover:to-purple-700 shadow-lg hover:shadow-xl ml-4 px-6 py-2.5 rounded-xl font-semibold text-white text-sm hover:scale-105 transition-all duration-200">
//                 <Plus className="w-4 h-4" />
//                 <span className="hidden sm:inline">Create Post</span>
//               </Button>
//             </Link>
//             <Link
//               to="/achievements"
//               className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 ${
//                 location.pathname === "/achievements"
//                   ? "text-blue-600 bg-blue-50"
//                   : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
//               }`}
//             >
//               Achievements
//             </Link>
//           </nav>

//           {/* Search and Actions */}
//           <div className="flex items-center space-x-3">
//             {/* Search Bar */}
//             <div className="hidden relative sm:flex items-center">
//               <Search className="left-3 absolute w-4 h-4 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search memories..."
//                 className="bg-gray-50/50 py-2.5 pr-4 pl-10 border border-gray-200 focus:border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-64 text-sm transition-all duration-200"
//               />
//             </div>

//             {/* Mobile Search Icon */}
//             <button className="sm:hidden hover:bg-gray-100 p-2.5 rounded-lg text-gray-500 hover:text-gray-700 transition-colors">
//               <Search className="w-5 h-5" />
//             </button>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden hover:bg-gray-100 p-2.5 rounded-lg text-gray-500 hover:text-gray-700 transition-colors"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? (
//                 <X className="w-5 h-5" />
//               ) : (
//                 <Menu className="w-5 h-5" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden bg-white/95 backdrop-blur-md py-4 border-gray-100 border-t">
//             <nav className="flex flex-col space-y-2">
//               <Link
//                 to="/"
//                 className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
//                   location.pathname === "/"
//                     ? "text-blue-600 bg-blue-50"
//                     : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
//                 }`}
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/post"
//                 className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
//                   location.pathname === "/create-post"
//                     ? "text-blue-600 bg-blue-50"
//                     : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
//                 }`}
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Create Post
//               </Link>
//               <Link
//                 to="/achievements"
//                 className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
//                   location.pathname === "/achievements"
//                     ? "text-blue-600 bg-blue-50"
//                     : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
//                 }`}
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Achievements
//               </Link>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

export function Header() {
  return (
    <div className="flex justify-between items-center px-4 py-2 border-b">
      <Link to="/">
        <h1>Joi Zubeen Da</h1>
      </Link>

      <div className="w-40 sm:w-72 md:w-full md:max-w-sm lg:max-w-3xl">
        <Input placeholder="Search Memories..." />
      </div>

      <div className="flex items-center gap-4">
        <Button variant={"outline"} size={"sm"}>
          <UploadCloudIcon />
          Preserve Memory
        </Button>
        <AuthButton />
      </div>
    </div>
  );
}
