import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/basic-file.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Leistungen", path: "/services" },
    { name: "Über Uns", path: "/team" },
    // { name: "Termin buchen", path: "/booking" }, // Disabled - no online booking yet
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

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm"
        aria-label="Hauptnavigation"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex cursor-pointer items-center space-x-3 focus:outline-none"
              aria-label="Zum Seitenanfang scrollen"
            >
              <img
                src={logo}
                alt="PHYSIO VIO - Physiotherapie Praxis Logo"
                className="h-14 w-auto transition-transform duration-200 group-hover:scale-110 sm:h-[4.5rem]"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-8 md:flex">
              {navItems.map((item) =>
                isActive(item.path) ? (
                  <span
                    key={item.path}
                    className="cursor-default border-b-2 border-primary text-sm font-bold text-primary"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-sm font-bold text-foreground/70 transition-colors hover:text-primary hover:underline focus:rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Link
                to="/contact"
                className="rounded-lg bg-gradient-to-r from-primary to-primary/90 px-6 py-2.5 font-medium text-white shadow-lg transition-all hover:scale-105 hover:from-primary/90 hover:to-secondary hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Kontakt
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
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  isActive(item.path)
                    ? "border-l-4 border-primary bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setIsOpen(false)}
                aria-current={isActive(item.path) ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block rounded-lg bg-gradient-to-r from-primary to-primary/90 px-3 py-2 text-center text-sm font-medium text-white shadow-lg transition-all duration-200 hover:from-primary/90 hover:to-secondary hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
