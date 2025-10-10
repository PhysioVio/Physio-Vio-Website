import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const openCookieSettings = () => {
    // Trigger the cookie consent banner to reappear
    const event = new CustomEvent("openCookieSettings");
    window.dispatchEvent(event);
  };

  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo & Tagline */}
          <div className="text-center">
            <img src={logo} alt="PHYSIO VIO Logo" className="mx-auto mb-3 h-12 w-auto" />
            <p className="text-sm text-muted-foreground">
              Professionelle Physiotherapie für Ihre Gesundheit
            </p>
          </div>

          {/* Legal Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link
              to="/impressum"
              className="text-muted-foreground transition-colors hover:text-secondary"
            >
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              className="text-muted-foreground transition-colors hover:text-secondary"
            >
              Datenschutz
            </Link>
            <Link
              to="/agb"
              className="text-muted-foreground transition-colors hover:text-secondary"
            >
              AGB
            </Link>
            <button
              onClick={openCookieSettings}
              className="text-muted-foreground transition-colors hover:text-secondary"
            >
              Cookie-Einstellungen
            </button>
          </nav>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            © 2025 PHYSIO VIO. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
