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
                alt="PHYSIOVIO - Physiotherapie Praxis Logo"
                className="h-12 w-auto"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-secondary ${
                    isActive(item.path) ? "text-secondary" : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/booking"
                className="rounded-lg bg-secondary px-6 py-2.5 font-medium text-white transition-colors hover:bg-secondary/90"
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
        {isOpen && (
          <div
            id="mobile-menu"
            className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-border bg-background md:hidden"
          >
            <div className="space-y-3 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-muted text-secondary"
                      : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/booking"
                className="block rounded-lg bg-secondary px-4 py-2.5 text-center font-medium text-white transition-colors hover:bg-secondary/90"
                onClick={() => setIsOpen(false)}
              >
                Termin buchen
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
