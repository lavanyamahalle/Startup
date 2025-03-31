import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import Logo from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon, UserCircle, User } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { user, logoutMutation } = useAuth();
  
  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo className="h-14 w-14 mr-3" />
            <span className="font-heading font-bold text-xl text-primary hidden md:block">Sustenance Wellness</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className={`${location === "/" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition`}>
              Home
            </Link>
            <Link href="/about" className={`${location === "/about" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition`}>
              About Dt. Sakshi
            </Link>
            <Link href="/programs" className={`${location === "/programs" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition`}>
              Programs
            </Link>
            <Link href="/pricing" className={`${location === "/pricing" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition`}>
              How to Join
            </Link>
            <Link href="/testimonials" className={`${location === "/testimonials" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition`}>
              Success Stories
            </Link>
            <Link href="/contact" className={`${location === "/contact" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition`}>
              Contact Us
            </Link>
            <Link href="/gallery" className={`${location === "/gallery" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition`}>
              Gallery
            </Link>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <UserCircle className="h-5 w-5" />
                    <span className="max-w-[120px] truncate">{user.fullName}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {user.isAdmin && (
                    <DropdownMenuItem asChild>
                      <Link href="/admin">Admin Dashboard</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => logoutMutation.mutate()}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/auth">
                <Button className="bg-primary hover:bg-primary/90">
                  <User className="h-4 w-4 mr-2" />
                  Login / Register
                </Button>
              </Link>
            )}
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <UserCircle className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>{user.fullName}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {user.isAdmin && (
                    <DropdownMenuItem asChild>
                      <Link href="/admin">Admin Dashboard</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => logoutMutation.mutate()}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/auth">
                <Button className="bg-primary hover:bg-primary/90" size="sm">
                  Login
                </Button>
              </Link>
            )}
            
            <button 
              className="text-primary focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full border-t border-gray-100">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <Link href="/" className={`${location === "/" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition py-2 border-b border-gray-100`}>
              Home
            </Link>
            <Link href="/about" className={`${location === "/about" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition py-2 border-b border-gray-100`}>
              About Dt. Sakshi
            </Link>
            <Link href="/programs" className={`${location === "/programs" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition py-2 border-b border-gray-100`}>
              Programs
            </Link>
            <Link href="/pricing" className={`${location === "/pricing" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition py-2 border-b border-gray-100`}>
              How to Join
            </Link>
            <Link href="/testimonials" className={`${location === "/testimonials" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition py-2 border-b border-gray-100`}>
              Success Stories
            </Link>
            <Link href="/contact" className={`${location === "/contact" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition py-2 border-b border-gray-100`}>
              Contact Us
            </Link>
            <Link href="/gallery" className={`${location === "/gallery" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition py-2 border-b border-gray-100`}>
              Gallery
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
