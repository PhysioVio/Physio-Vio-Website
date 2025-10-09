import Navigation from "@/components/Navigation";
import { Clock, Calendar, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const OpeningHours = () => {
  const hours = [
    { day: "Montag", time: "08:00 - 18:00" },
    { day: "Dienstag", time: "08:00 - 18:00" },
    { day: "Mittwoch", time: "08:00 - 20:00" },
    { day: "Donnerstag", time: "08:00 - 18:00" },
    { day: "Freitag", time: "08:00 - 16:00" },
    { day: "Samstag", time: "Geschlossen" },
    { day: "Sonntag", time: "Geschlossen" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-primary mb-6">
              <Clock className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-gradient">Öffnungszeiten</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wir sind für Sie da – zu Zeiten, die sich Ihrem Alltag anpassen.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Opening Hours Card */}
            <div className="p-8 rounded-2xl border border-border bg-card shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Calendar className="h-6 w-6 text-secondary mr-3" />
                Praxiszeiten
              </h2>
              <div className="space-y-4">
                {hours.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-3 px-4 rounded-lg ${
                      item.time === "Geschlossen"
                        ? "bg-muted/50"
                        : "bg-muted hover:bg-muted/80 transition-colors"
                    }`}
                  >
                    <span className="font-medium">{item.day}</span>
                    <span
                      className={
                        item.time === "Geschlossen"
                          ? "text-muted-foreground"
                          : "text-secondary font-medium"
                      }
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="space-y-8">
              <div className="p-8 rounded-2xl border border-border bg-card shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Kontaktinformationen</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Telefon</p>
                      <a
                        href="tel:0123456789"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        0123 456 789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">E-Mail</p>
                      <a
                        href="mailto:info@physiovio.de"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        info@physiovio.de
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl gradient-soft border border-border">
                <h3 className="text-xl font-semibold mb-4">
                  Termine außerhalb der Öffnungszeiten?
                </h3>
                <p className="text-muted-foreground mb-6">
                  In besonderen Fällen können wir auch Termine außerhalb der regulären
                  Öffnungszeiten anbieten. Sprechen Sie uns einfach an!
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white rounded-xl font-medium hover:bg-secondary/90 transition-colors"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-8 rounded-2xl bg-muted/50 border border-border">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl font-semibold mb-4">Wichtige Hinweise</h3>
              <div className="text-muted-foreground space-y-2">
                <p>
                  • Termine nur nach Vereinbarung – bitte buchen Sie online oder
                  telefonisch
                </p>
                <p>
                  • Bei Terminabsagen bitten wir um rechtzeitige Benachrichtigung
                  (mindestens 24h vorher)
                </p>
                <p>
                  • An Feiertagen bleibt unsere Praxis geschlossen
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OpeningHours;
