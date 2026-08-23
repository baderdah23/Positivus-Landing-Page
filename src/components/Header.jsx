import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import Logo from "./Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="text-h4-mob lg:text-h4 relative z-[100] mt-6 flex h-12 items-center justify-between md:mt-12 md:h-17">
      <div className="flex h-full items-end">
        <Logo variant="black" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-6 lg:gap-10 lg:flex">
        <a href="#" className="hover:text-tertiary">
          About us
        </a>
        <a href="#" className="hover:text-tertiary">
          Services
        </a>
        <a href="#" className="hover:text-tertiary">
          Use Cases
        </a>
        <a href="#" className="hover:text-tertiary">
          Pricing
        </a>
        <a href="#" className="hover:text-tertiary">
          Blog
        </a>
        <Button variant="secondary">Request a quote</Button>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="text-primary z-[110] flex focus:outline-none lg:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
      </button>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-center bg-white px-6 py-12 lg:hidden">
          <nav className="text-h4 flex flex-col gap-8 text-center font-bold">
            <a href="#" onClick={toggleMenu} className="hover:text-primary/75">
              About us
            </a>
            <a href="#" onClick={toggleMenu} className="hover:text-primary/75">
              Services
            </a>
            <a href="#" onClick={toggleMenu} className="hover:text-primary/75">
              Use Cases
            </a>
            <a href="#" onClick={toggleMenu} className="hover:text-primary/75">
              Pricing
            </a>
            <a href="#" onClick={toggleMenu} className="hover:text-primary/75">
              Blog
            </a>
            <div className="flex justify-center pt-4" onClick={toggleMenu}>
              <Button variant="secondary" className="w-full max-w-xs">
                Request a quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
