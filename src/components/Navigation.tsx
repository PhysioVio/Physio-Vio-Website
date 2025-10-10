import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Unser Team", path: "/team" },
    { name: "Öffnungszeiten", path: "/opening-hours" },
    { name: "Kontakt", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-secondary focus:px-4 focus:py-2 focus:text-white"
      >
        Zum Hauptinhalt springen
      </a>
      <nav
        className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm"
        aria-label="Hauptnavigation"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex cursor-pointer items-center space-x-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              aria-label="Zum Seitenanfang scrollen"
            >
              <img
                src={logo}
                alt="PHYSIO VIO - Physiotherapie Praxis Logo"
                className="h-12 w-auto"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-secondary focus:rounded focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 ${
                    isActive(item.path) ? "text-secondary" : "text-foreground"
                  }`}
                  aria-current={isActive(item.path) ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/booking"
                className="rounded-lg bg-secondary px-6 py-2.5 font-medium text-white transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              >
                Termin buchen
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="rounded-lg p-2 transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-secondary md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`overflow-hidden border-t border-border bg-background transition-all duration-300 ease-in-out md:hidden ${
            isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-1.5 px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 ${
                  isActive(item.path)
                    ? "bg-secondary/10 text-secondary ring-2 ring-secondary/20"
                    : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setIsOpen(false)}
                aria-current={isActive(item.path) ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="block rounded-lg bg-secondary px-3 py-2 text-center text-sm font-medium text-white transition-all duration-200 hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              onClick={() => setIsOpen(false)}
            >
              Termin buchen
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
