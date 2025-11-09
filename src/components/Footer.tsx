import { Link } from "react-router-dom";
import logo from "../assets/Symbol_transparent.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo & Tagline */}
          <div className="text-center">
            <img src={logo} alt="PHYSIO VIO Logo" className="mx-auto mb-3 h-16 w-auto" />
            <p className="text-sm text-foreground/70">Gemeinsam gehen. Selbstständig ankommen.</p>
          </div>

          {/* Legal Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link
              to="/impressum"
              className="text-foreground/70 transition-colors hover:text-primary hover:underline"
            >
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              className="text-foreground/70 transition-colors hover:text-primary hover:underline"
            >
              Datenschutz
            </Link>
            <Link
              to="/agb"
              className="text-foreground/70 transition-colors hover:text-primary hover:underline"
            >
              AGB
            </Link>
          </nav>

          {/* Copyright */}
          <div className="text-center text-sm text-foreground/70">
            © 2025 PHYSIO VIO. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
