import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <div>
            <img src={logo} alt="PHYSIO VIO Logo" className="mb-4 h-10 w-auto" />
            <p className="text-sm text-muted-foreground">
              Professionelle Physiotherapie für Ihre Gesundheit und Ihr Wohlbefinden.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Kontakt</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <a href="tel:+43123456789" className="transition-colors hover:text-secondary">
                  +43 1 234 5678
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                <a
                  href="mailto:info@physiovio.at"
                  className="transition-colors hover:text-secondary"
                >
                  info@physiovio.at
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                Musterstraße 123
                <br />
                1010 Wien, Österreich
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/impressum"
                  className="text-sm text-muted-foreground transition-colors hover:text-secondary"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  to="/datenschutz"
                  className="text-sm text-muted-foreground transition-colors hover:text-secondary"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  to="/agb"
                  className="text-sm text-muted-foreground transition-colors hover:text-secondary"
                >
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © 2025 PHYSIO VIO. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
