import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Calendar, MessageCircle } from "lucide-react";

const Contact = () => {
  const hours = [
    { day: "Montag", time: "07:30 - 18:30" },
    { day: "Dienstag", time: "07:30 - 18:30" },
    { day: "Mittwoch", time: "07:30 - 18:30" },
    { day: "Donnerstag", time: "07:30 - 18:30" },
    { day: "Freitag", time: "07:30 - 14:00" },
    { day: "Samstag", time: "Geschlossen" },
    { day: "Sonntag", time: "Geschlossen" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main
        id="main-content"
        className="via-secondary/3 bg-gradient-to-b from-secondary/5 to-secondary/10 pb-20 pt-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 animate-fade-in text-center">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
              <span className="text-gradient">Kontakt</span>
            </h1>

            {/* Neueröffnung Banner */}
            <div className="mx-auto mt-8 max-w-2xl">
              <div className="rounded-xl border-2 border-secondary/30 bg-gradient-to-r from-secondary/10 to-secondary/5 p-6 shadow-lg">
                <div className="flex items-center justify-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-secondary"></span>
                  </span>
                  <div className="text-center">
                    <p className="text-lg font-bold text-primary">Neueröffnung ab 5. Januar 2026</p>
                    <p className="text-sm text-muted-foreground">
                      Sicher dir jetzt schon deinen Wunschtermin!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kontaktinformationen & Öffnungszeiten - Grid */}
          <div className="mx-auto mb-12 max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="via-secondary/8 flex flex-col rounded-2xl border border-primary/30 bg-gradient-to-br from-card/90 to-secondary/5 p-8 shadow-lg backdrop-blur-sm">
                <h2 className="mb-6 text-2xl font-semibold">Kontaktinformationen</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="gradient-primary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
                      <MapPin className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="mb-1 font-medium">Adresse</p>
                      <address className="not-italic text-muted-foreground">
                        PHYSIO VIO
                        <br />
                        Neunaigenerstraße 1
                        <br />
                        92533 Wernberg-Köblitz
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="gradient-primary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
                      <Phone className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="mb-1 font-medium">Telefon</p>
                      <a
                        href="tel:+499604 9389600"
                        className="text-muted-foreground transition-colors hover:text-secondary"
                      >
                        09604 9389600
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="gradient-primary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
                      <Mail className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="mb-1 font-medium">E-Mail</p>
                      <a
                        href="mailto:info@physiovio.de"
                        className="text-muted-foreground transition-colors hover:text-secondary"
                      >
                        info@physiovio.de
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp Info - NEU */}
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E]">
                      <MessageCircle className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="mb-1 font-medium">WhatsApp</p>
                      <a
                        href="https://wa.me/4917141806097"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-secondary"
                      >
                        0171 4180697
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Schnelle Antworten per Chat
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Banner Info */}
                <div className="mt-6 rounded-xl border border-[#25D366]/30 bg-gradient-to-r from-[#25D366]/10 to-[#128C7E]/10 p-4">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#25D366]" />
                    <div className="text-sm">
                      <p className="font-medium text-foreground">
                        Nutzen Sie unseren WhatsApp-Service!
                      </p>
                      <p className="mt-1 text-muted-foreground">
                        Klicken Sie auf das grüne WhatsApp-Symbol rechts unten für direkten
                        Chat-Support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Öffnungszeiten */}
              <div className="rounded-2xl border border-primary/40 bg-gradient-to-br from-card/90 via-secondary/10 to-secondary/5 p-8 shadow-lg ring-2 ring-secondary/10 backdrop-blur-sm">
                <div className="mb-6 flex items-center">
                  <div
                    className="gradient-primary mr-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl"
                    aria-hidden="true"
                  >
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">
                    <span className="text-gradient">Öffnungszeiten</span>
                  </h2>
                </div>
                <div className="space-y-3" role="table" aria-label="Öffnungszeiten der Praxis">
                  {hours.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between rounded-lg px-4 py-3 sm:px-6 sm:py-4 ${
                        item.time === "Geschlossen"
                          ? "bg-muted/30"
                          : "border border-primary/20 bg-gradient-to-r from-secondary/15 via-secondary/10 to-secondary/15 transition-all hover:border-secondary/30 hover:from-secondary/20 hover:via-secondary/15 hover:to-secondary/20"
                      }`}
                      role="row"
                    >
                      <span
                        className="flex items-center text-sm font-medium sm:text-base"
                        role="cell"
                      >
                        <Calendar
                          className="mr-2 h-4 w-4 text-secondary sm:mr-3 sm:h-5 sm:w-5"
                          aria-hidden="true"
                        />
                        {item.day}
                      </span>
                      <span
                        className={`text-sm sm:text-base ${
                          item.time === "Geschlossen"
                            ? "text-muted-foreground"
                            : "font-semibold text-primary"
                        }`}
                        role="cell"
                      >
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl border border-secondary/40 bg-gradient-to-r from-secondary/30 via-secondary/25 to-secondary/30 p-4 text-center ring-2 ring-secondary/10">
                  <p className="text-sm font-medium text-foreground">
                    Termine zu unseren Öffnungszeiten – oder nach Vereinbarung.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps & Anfahrt - Grid */}
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
              {/* Google Maps */}
              <div className="overflow-hidden rounded-2xl border border-primary/40 shadow-lg ring-2 ring-secondary/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2579.9876543!2d12.1455665!3d49.5365331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a023512e88af57%3A0x9cd23eab9559cace!2sNeunaigener%20Str.%201%2C%2092533%20Wernberg-K%C3%B6blitz!5e0!3m2!1sde!2sde!4v1728567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "450px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Standort: Neunaigenerstraße 1, 92533 Wernberg-Köblitz"
                  className="grayscale transition-all duration-300 hover:grayscale-0"
                ></iframe>
              </div>

              {/* Anfahrt */}
              <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-card/90 to-secondary/5 p-8 shadow-lg backdrop-blur-sm">
                <div className="mb-6 flex items-center">
                  <div
                    className="gradient-primary mr-4 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                    aria-hidden="true"
                  >
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    <span className="text-gradient">Anfahrt</span>
                  </h2>
                </div>
                <div className="space-y-5 text-sm">
                  <div>
                    <p className="mb-2 font-semibold text-foreground">Mit dem Auto</p>
                    <p className="text-muted-foreground">
                      Kostenlose Parkplätze direkt vor der Praxis verfügbar. Optimale Erreichbarkeit
                      über die A93 und die A6.
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-foreground">Öffentliche Verkehrsmittel</p>
                    <p className="text-muted-foreground">
                      Bahnhof Wernberg-Köblitz
                      <br />
                      Nur 5 Minuten Fußweg zur Praxis
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-foreground">Barrierefreiheit</p>
                    <p className="text-muted-foreground">
                      Unsere Praxis ist vollständig barrierefrei zugänglich.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
