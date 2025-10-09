import Navigation from "@/components/Navigation";
import { Calendar, Clock, CheckCircle } from "lucide-react";

const Booking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-primary mb-6">
              <Calendar className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-gradient">Termin buchen</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Buchen Sie bequem online Ihren Wunschtermin – schnell, einfach und zu
              jeder Zeit.
            </p>
          </div>

          {/* Booking Widget Placeholder */}
          <div className="mb-12">
            <div className="p-12 rounded-2xl border-2 border-dashed border-border bg-muted/30 text-center">
              <Calendar className="h-16 w-16 text-secondary mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-3">
                Terminbuchungs-Widget
              </h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Hier wird Ihr externes JavaScript für die Terminbuchung eingebunden.
                Der Bereich ist vorbereitet für die Integration.
              </p>
              <div className="inline-block px-4 py-2 bg-background rounded-lg border border-border">
                <code className="text-sm text-muted-foreground">
                  {`<!-- Externes Booking-Script hier einfügen -->`}
                </code>
              </div>
            </div>
          </div>

          {/* How it Works */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Termin wählen</h3>
              <p className="text-sm text-muted-foreground">
                Wählen Sie Ihren bevorzugten Tag und Ihre Wunschzeit aus den
                verfügbaren Slots
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Daten eingeben</h3>
              <p className="text-sm text-muted-foreground">
                Geben Sie Ihre Kontaktdaten und ggf. Anliegen ein
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Bestätigung</h3>
              <p className="text-sm text-muted-foreground">
                Sie erhalten eine sofortige Bestätigung per E-Mail
              </p>
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="p-8 rounded-2xl gradient-soft border border-border text-center">
            <Clock className="h-10 w-10 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Lieber telefonisch buchen?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Kein Problem! Rufen Sie uns an unter{" "}
              <a
                href="tel:0123456789"
                className="font-medium text-secondary hover:underline"
              >
                0123 456 789
              </a>{" "}
              oder senden Sie uns eine E-Mail an{" "}
              <a
                href="mailto:info@physiovio.de"
                className="font-medium text-secondary hover:underline"
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
    </div>
  );
};

export default Booking;
