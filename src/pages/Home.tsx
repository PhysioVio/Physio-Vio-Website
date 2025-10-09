import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Clock, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import Navigation from "@/components/Navigation";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 gradient-soft opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-muted rounded-full">
                <span className="text-sm font-medium text-secondary">
                  Ihre Gesundheit, unser Ziel
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">Gemeinsam</span> auf dem Weg
                <br />
                zur Genesung
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Wir begleiten Sie auf diesem Weg – professionell, individuell und mit
                Herz. Ihre aktive Mitarbeit macht den Unterschied.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white rounded-xl font-semibold hover:bg-secondary/90 transition-all hover:scale-105"
                >
                  Jetzt Termin vereinbaren
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/team"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-border bg-background rounded-xl font-semibold text-foreground hover:bg-muted transition-colors"
                >
                  Unser Team kennenlernen
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute -inset-4 gradient-primary opacity-10 blur-3xl rounded-3xl" />
              <img
                src={heroImage}
                alt="Moderne Physiotherapie Praxis"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Warum <span className="text-gradient">PHYSIOVIO</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ihre Gesundheit verdient professionelle Betreuung und individuelle Aufmerksamkeit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Individuelle Betreuung",
                description: "Jeder Patient erhält einen maßgeschneiderten Therapieplan",
              },
              {
                icon: Users,
                title: "Erfahrenes Team",
                description: "Hochqualifizierte Therapeuten mit langjähriger Erfahrung",
              },
              {
                icon: Clock,
                title: "Flexible Termine",
                description: "Termine, die sich Ihrem Alltag anpassen",
              },
              {
                icon: CheckCircle,
                title: "Moderne Methoden",
                description: "Aktuelle Behandlungstechniken und Geräte",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all hover:-translate-y-1 duration-300"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-soft" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Bereit für den ersten Schritt?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vereinbaren Sie noch heute einen Termin und starten Sie Ihre persönliche
            Genesungsreise mit uns.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white rounded-xl font-semibold hover:bg-secondary/90 transition-all hover:scale-105"
          >
            Termin vereinbaren
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">PHYSIOVIO</h3>
              <p className="text-sm text-muted-foreground">
                Professionelle Physiotherapie für Ihre Gesundheit und Ihr Wohlbefinden.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Kontakt</h3>
              <p className="text-sm text-muted-foreground">
                Musterstraße 123<br />
                12345 Musterstadt<br />
                Tel: 0123 456789<br />
                info@physiovio.de
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Schnelllinks</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/team" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                    Unser Team
                  </Link>
                </li>
                <li>
                  <Link to="/opening-hours" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                    Öffnungszeiten
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 PHYSIOVIO. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
