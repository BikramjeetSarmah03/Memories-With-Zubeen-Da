import { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  mainClassName?: string;
  showHeader?: boolean;
  showFooter?: boolean;
}

export function PageLayout({ 
  children, 
  className = "", 
  mainClassName = "",
  showHeader = true,
  showFooter = true 
}: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      {showHeader && <Header />}
      
      <main className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${mainClassName}`}>
        {children}
      </main>
      
      {showFooter && <Footer />}
    </div>
  );
}
