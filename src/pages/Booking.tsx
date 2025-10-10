import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Calendar, Clock, CheckCircle } from "lucide-react";

const Booking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main id="main-content" className="pb-20 pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 animate-fade-in text-center">
            <div
              className="gradient-primary mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl"
              aria-hidden="true"
            >
              <Calendar className="h-10 w-10 text-white" />
            </div>
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
              <span className="text-gradient">Termin buchen</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Buchen Sie bequem online Ihren Wunschtermin – schnell, einfach und zu jeder Zeit.
            </p>

            {/* Neueröffnung Banner */}
            <div className="mx-auto mt-8 max-w-2xl">
              <div className="rounded-xl border-2 border-secondary/30 bg-gradient-to-r from-secondary/10 to-secondary/5 p-6 shadow-lg">
                <div className="flex items-center justify-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-secondary"></span>
                  </span>
                  <div className="text-center">
                    <p className="text-lg font-bold text-secondary">
                      Neueröffnung ab 1. Januar 2026
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Sichern Sie sich schon jetzt Ihren Wunschtermin!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Widget Placeholder */}
          <div className="mb-12">
            <div
              className="rounded-2xl border-2 border-dashed border-border bg-muted/30 p-12 text-center"
              role="region"
              aria-label="Terminbuchungs-Widget-Bereich"
            >
              <Calendar className="mx-auto mb-4 h-16 w-16 text-secondary" aria-hidden="true" />
              <h2 className="mb-3 text-2xl font-semibold">Terminbuchungs-Widget</h2>
              <p className="mx-auto mb-6 max-w-md text-muted-foreground">
                Hier wird Ihr externes JavaScript für die Terminbuchung eingebunden. Der Bereich ist
                vorbereitet für die Integration.
              </p>
              <div className="inline-block rounded-lg border border-border bg-background px-4 py-2">
                <code className="text-sm text-muted-foreground">
                  {`<!-- Externes Booking-Script hier einfügen -->`}
                </code>
              </div>
            </div>
          </div>

          {/* How it Works */}
          <div className="mb-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div
                className="gradient-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                aria-hidden="true"
              >
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Termin wählen</h3>
              <p className="text-sm text-muted-foreground">
                Wählen Sie Ihren bevorzugten Tag und Ihre Wunschzeit aus den verfügbaren Slots
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div
                className="gradient-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                aria-hidden="true"
              >
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Daten eingeben</h3>
              <p className="text-sm text-muted-foreground">
                Geben Sie Ihre Kontaktdaten und ggf. Anliegen ein
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div
                className="gradient-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                aria-hidden="true"
              >
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Bestätigung</h3>
              <p className="text-sm text-muted-foreground">
                Sie erhalten eine sofortige Bestätigung per E-Mail
              </p>
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="gradient-soft rounded-2xl border border-border p-8 text-center">
            <Clock className="mx-auto mb-4 h-10 w-10 text-secondary" aria-hidden="true" />
            <h3 className="mb-3 text-xl font-semibold">Lieber telefonisch buchen?</h3>
            <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
              Kein Problem! Rufen Sie uns an unter{" "}
              <a
                href="tel:+49123456789"
                className="rounded font-medium text-secondary hover:underline focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1"
              >
                0123 456 789
              </a>{" "}
              oder senden Sie uns eine E-Mail an{" "}
              <a
                href="mailto:info@physiovio.de"
                className="rounded font-medium text-secondary hover:underline focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1"
              >
                info@physiovio.de
              </a>
            </p>
            <div className="text-sm text-muted-foreground">
              <p>Montag - Donnerstag: 08:00 - 18:00 Uhr</p>
              <p>Freitag: 08:00 - 16:00 Uhr</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Booking;
