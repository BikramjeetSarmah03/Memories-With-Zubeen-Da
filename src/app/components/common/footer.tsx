import { Twitter, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Social Media Links */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600">
              © 2025 Zubeen Da Community
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-end space-x-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Report Content
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Help
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
