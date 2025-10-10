import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Clock, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.png";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20">
        <div className="gradient-soft absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-in space-y-8">
              <div className="inline-block rounded-full bg-muted px-4 py-2" role="status">
                <span className="text-sm font-medium text-secondary">
                  Ihre Gesundheit, unser Ziel
                </span>
              </div>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                <span className="text-gradient">Gemeinsam</span> auf dem Weg
                <br />
                zur Genesung
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground">
                Wir begleiten Sie auf diesem Weg – professionell, individuell und mit Herz. Ihre
                aktive Mitarbeit macht den Unterschied.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center rounded-xl bg-secondary px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                >
                  Jetzt Termin vereinbaren
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
                <Link
                  to="/team"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-border bg-background px-8 py-4 font-semibold text-foreground transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                >
                  Unser Team kennenlernen
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div
                className="gradient-primary absolute -inset-4 rounded-3xl opacity-10 blur-3xl"
                aria-hidden="true"
              />
              <img
                src={heroImage}
                alt="Moderne Physiotherapie Praxis - Helle, freundliche Behandlungsräume"
                className="relative h-auto w-full rounded-2xl shadow-2xl"
                loading="eager"
                width="800"
                height="600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Warum <span className="text-gradient">PHYSIOVIO</span>?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Ihre Gesundheit verdient professionelle Betreuung und individuelle Aufmerksamkeit
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="gradient-primary mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  aria-hidden="true"
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20" aria-labelledby="cta-heading">
        <div className="gradient-soft absolute inset-0" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="cta-heading" className="mb-6 text-3xl font-bold sm:text-4xl">
            Bereit für den ersten Schritt?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Vereinbaren Sie noch heute einen Termin und starten Sie Ihre persönliche Genesungsreise
            mit uns.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center justify-center rounded-xl bg-secondary px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            Termin vereinbaren
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Home;
