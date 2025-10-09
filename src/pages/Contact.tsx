import Navigation from "@/components/Navigation";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-gradient">Kontakt</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Wir freuen uns
              auf Ihre Nachricht.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="p-8 rounded-2xl border border-border bg-card shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Nachricht senden</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Vorname</label>
                    <Input placeholder="Max" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Nachname</label>
                    <Input placeholder="Mustermann" className="w-full" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">E-Mail</label>
                  <Input type="email" placeholder="max@beispiel.de" className="w-full" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Telefon</label>
                  <Input type="tel" placeholder="0123 456 789" className="w-full" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Ihre Nachricht</label>
                  <Textarea
                    placeholder="Wie können wir Ihnen helfen?"
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  <Send className="h-4 w-4 mr-2" />
                  Nachricht senden
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="p-8 rounded-2xl border border-border bg-card shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Kontaktinformationen</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Adresse</p>
                      <p className="text-muted-foreground">
                        Musterstraße 123<br />
                        12345 Musterstadt<br />
                        Deutschland
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Telefon</p>
                      <a
                        href="tel:0123456789"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        0123 456 789
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Mo-Fr: 08:00 - 18:00 Uhr
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
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

              {/* Map Placeholder */}
              <div className="p-8 rounded-2xl border border-border bg-muted/30 h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-secondary mx-auto mb-3" />
                  <p className="text-muted-foreground">
                    Kartenintegration kommt hier hin
                  </p>
                </div>
              </div>

              {/* Quick Info */}
              <div className="p-6 rounded-2xl gradient-soft border border-border">
                <h3 className="font-semibold mb-2">Anfahrt</h3>
                <p className="text-sm text-muted-foreground">
                  Kostenlose Parkplätze direkt vor der Praxis. Mit öffentlichen
                  Verkehrsmitteln: Bus 123 & 456, Haltestelle "Musterplatz"
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
