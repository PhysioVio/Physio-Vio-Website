import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Clock, CheckCircle } from "lucide-react";
import heroImage from "../assets/hero.png";
import featuresImage from "../assets/features.png";
import Navigation from "@/components/Navigation";
import OpeningBanner from "@/components/OpeningBanner";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Opening Banner - Full Screen → Sticky */}
      <OpeningBanner />

      {/* Hero Section - Kommt durch wenn Banner schrumpft */}
      <section id="hero-section" className="relative overflow-hidden">
        <div className="gradient-soft absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
          <div className="grid items-center gap-12 lg:grid-cols-[3fr_2fr]">
            <div className="animate-fade-in space-y-6 text-center lg:space-y-8 lg:text-left">
              <div
                className="mt-5 inline-block rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 pt-[5px] lg:mt-0 lg:pt-2"
                role="status"
              >
                <span className="text-sm font-medium text-primary">
                  Deine Gesundheit, unser Ziel
                </span>
              </div>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                <span className="text-gradient">Gemeinsam gehen. </span> Selbstständig ankommen.
              </h1>
              <p className="mx-auto max-w-xl text-lg text-muted-foreground lg:mx-0">
                Wir begleiten dich auf diesem Weg – professionell, individuell und mit Herz. Deine{" "}
                <strong>aktive Mitarbeit</strong> macht den Unterschied.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-primary/90 px-10 py-5 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-primary/90 hover:to-secondary hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Unsere Leistungen
                  <ArrowRight
                    className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-secondary bg-gradient-to-r from-secondary/20 to-secondary/10 px-8 py-4 font-semibold text-primary shadow-md transition-all hover:scale-105 hover:border-secondary hover:from-secondary/30 hover:to-secondary/20 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                >
                  Termin vereinbaren
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in lg:ml-auto lg:max-w-lg">
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

      {/* Features Section - Two Column Layout with Full Image */}
      <section className="relative overflow-hidden bg-secondary/5 py-20 lg:py-32">
        {/* Decorative Background */}
        <div className="gradient-soft absolute inset-0 opacity-40" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Centered Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Warum <span className="text-gradient">PHYSIO VIO</span>?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground lg:text-xl">
              Deine Gesundheit verdient professionelle Betreuung und individuelle Aufmerksamkeit.
            </p>
          </div>

          {/* Two Column Layout: Image Left, Features Right */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Image Section - Full Height */}
            <div className="relative">
              <div
                className="gradient-primary absolute -inset-4 rounded-3xl opacity-10 blur-2xl"
                aria-hidden="true"
              />
              <img
                src={featuresImage}
                alt="Professionelle Physiotherapie Behandlung"
                className="relative h-full w-full rounded-2xl object-cover shadow-2xl"
                loading="lazy"
              />
            </div>

            {/* Features Grid - 2x2 */}
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: Heart,
                  title: "Individuelle Betreuung",
                  description: "Jeder Patient erhält einen maßgeschneiderten Therapieplan.",
                },
                {
                  icon: Users,
                  title: "Erfahrenes Team",
                  description: "Hochqualifizierte Therapeuten mit langjähriger Erfahrung.",
                },
                {
                  icon: Clock,
                  title: "Flexible Termine",
                  description: "Termine, die sich deinem Alltag anpassen.",
                },
                {
                  icon: CheckCircle,
                  title: "Moderne Methoden",
                  description: "Aktuelle Behandlungstechniken und Geräte.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-card/90 via-secondary/5 to-secondary/10 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-secondary/50 hover:from-secondary/10 hover:via-secondary/15 hover:to-secondary/20 hover:shadow-2xl"
                >
                  <div className="relative">
                    <div
                      className="gradient-primary mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                      aria-hidden="true"
                    >
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-secondary/10 via-secondary/5 to-secondary/20 py-20"
        aria-labelledby="cta-heading"
      >
        <div className="gradient-soft absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="cta-heading" className="mb-6 text-3xl font-bold sm:text-4xl">
            Hast Du Fragen?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Kontaktiere uns gerne - wir beraten dich persönlich und beantworten alle deine Fragen
            zur Physiotherapie.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-primary/90 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-primary/90 hover:to-secondary hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Jetzt Kontakt aufnehmen
            <ArrowRight
              className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
