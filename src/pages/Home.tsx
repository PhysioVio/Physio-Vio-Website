import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Clock, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.png";
import hero2Image from "@/assets/hero2-image.png";
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
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
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
                  className="inline-flex items-center justify-center rounded-xl bg-secondary px-10 py-5 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-secondary/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                >
                  Jetzt Termin vereinbaren
                  <ArrowRight className="ml-2 h-6 w-6" aria-hidden="true" />
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

      {/* Neueröffnung Banner - Zwischen Hero und Features */}
      <section className="relative bg-tertiary py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 text-center">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-secondary"></span>
            </span>
            <div>
              <p className="text-lg font-bold text-primary sm:text-xl">
                Neueröffnung ab 1. Januar 2026
              </p>
              <p className="text-sm text-primary/80">
                Sichern Sie sich jetzt schon Ihren Wunschtermin!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Creative Asymmetric Layout */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Decorative Background */}
        <div className="gradient-soft absolute inset-0 opacity-30" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Centered Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Warum <span className="text-gradient">PHYSIO VIO</span>?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground lg:text-xl">
              Ihre Gesundheit verdient professionelle Betreuung und individuelle Aufmerksamkeit
            </p>
          </div>

          {/* Creative Grid Layout with Integrated Image */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-secondary/50 hover:bg-secondary/5 hover:shadow-2xl"
              >
                <div className="relative">
                  {/* Icon - Back to Original Style */}
                  <div
                    className="gradient-primary mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-secondary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}

            {/* Image integrated as 4th card - spans 2 columns on lg */}
            <div className="relative sm:col-span-2 lg:col-span-2">
              <div
                className="gradient-primary absolute -inset-2 rounded-3xl opacity-10 blur-xl"
                aria-hidden="true"
              />
              <img
                src={hero2Image}
                alt="Professionelle Physiotherapie Behandlung"
                className="relative h-full w-full rounded-2xl object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                style={{ maxHeight: "240px", objectPosition: "bottom right" }}
                loading="lazy"
              />
            </div>

            {/* 4th Feature Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-secondary/50 hover:bg-secondary/5 hover:shadow-2xl sm:col-span-2 lg:col-span-1">
              <div className="relative">
                <div
                  className="gradient-primary mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>

                <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-secondary">
                  Moderne Methoden
                </h3>
                <p className="text-muted-foreground">Aktuelle Behandlungstechniken und Geräte</p>
              </div>
            </div>
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
