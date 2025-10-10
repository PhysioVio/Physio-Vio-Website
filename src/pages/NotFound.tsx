import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />

      <main
        id="main-content"
        className="flex flex-1 items-center justify-center px-4 pt-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl animate-fade-in text-center">
          <div className="mb-8">
            <div className="gradient-primary mb-6 inline-flex h-32 w-32 items-center justify-center rounded-full">
              <span className="text-6xl font-bold text-white">404</span>
            </div>
          </div>

          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            Seite nicht <span className="text-gradient">gefunden</span>
          </h1>

          <p className="mx-auto mb-8 max-w-md text-lg text-muted-foreground">
            Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild className="bg-secondary text-white hover:bg-secondary/90">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Zur Startseite
              </Link>
            </Button>

            <Button asChild variant="outline">
              <button type="button" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück
              </button>
            </Button>
          </div>

          <div className="mt-12 rounded-xl border border-border bg-muted/50 p-6">
            <h2 className="mb-3 text-lg font-semibold">Schnellzugriff</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/team" className="text-sm text-secondary hover:underline">
                Unser Team
              </Link>
              <span className="text-muted-foreground" aria-hidden="true">
                •
              </span>
              <Link to="/opening-hours" className="text-sm text-secondary hover:underline">
                Öffnungszeiten
              </Link>
              <span className="text-muted-foreground" aria-hidden="true">
                •
              </span>
              <Link to="/contact" className="text-sm text-secondary hover:underline">
                Kontakt
              </Link>
              <span className="text-muted-foreground" aria-hidden="true">
                •
              </span>
              <Link to="/booking" className="text-sm text-secondary hover:underline">
                Termin buchen
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
