import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "Vorname muss mindestens 2 Zeichen lang sein")
    .max(50, "Vorname zu lang"),
  lastName: z
    .string()
    .trim()
    .min(2, "Nachname muss mindestens 2 Zeichen lang sein")
    .max(50, "Nachname zu lang"),
  email: z
    .string()
    .trim()
    .email("Bitte geben Sie eine gültige E-Mail-Adresse ein")
    .max(255, "E-Mail zu lang"),
  phone: z.string().trim().min(5, "Telefonnummer zu kurz").max(20, "Telefonnummer zu lang"),
  message: z
    .string()
    .trim()
    .min(10, "Nachricht muss mindestens 10 Zeichen lang sein")
    .max(500, "Nachricht darf maximal 500 Zeichen lang sein"),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);

      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Nachricht gesendet!",
        description: "Wir melden uns schnellstmöglich bei Ihnen.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "Fehler im Formular",
          description: "Bitte überprüfen Sie Ihre Eingaben.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main id="main-content" className="pb-20 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 animate-fade-in text-center">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
              <span className="text-gradient">Kontakt</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Wir freuen uns auf Ihre
              Nachricht.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-semibold">Nachricht senden</h2>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-2 block text-sm font-medium">
                      Vorname <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Max"
                      className={`w-full ${errors.firstName ? "border-destructive" : ""}`}
                      required
                      aria-describedby={errors.firstName ? "firstName-error" : undefined}
                    />
                    {errors.firstName && (
                      <p id="firstName-error" className="mt-1 text-sm text-destructive">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-2 block text-sm font-medium">
                      Nachname <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Mustermann"
                      className={`w-full ${errors.lastName ? "border-destructive" : ""}`}
                      required
                      aria-describedby={errors.lastName ? "lastName-error" : undefined}
                    />
                    {errors.lastName && (
                      <p id="lastName-error" className="mt-1 text-sm text-destructive">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    E-Mail <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="max@beispiel.de"
                    className={`w-full ${errors.email ? "border-destructive" : ""}`}
                    required
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                    Telefon <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0123 456 789"
                    className={`w-full ${errors.phone ? "border-destructive" : ""}`}
                    required
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-destructive">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Info Box für Terminbuchung */}
                <div className="rounded-lg border-2 border-secondary/20 bg-secondary/5 p-4">
                  <p className="text-sm font-medium text-secondary">
                    💡 Für Terminbuchungen nutzen Sie bitte unsere{" "}
                    <a href="/booking" className="underline hover:text-secondary/80">
                      Termin-Buchungsfunktion
                    </a>
                  </p>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Ihre Nachricht <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Wie können wir Ihnen helfen?"
                    className={`min-h-[150px] w-full ${errors.message ? "border-destructive" : ""}`}
                    required
                    maxLength={500}
                    aria-describedby={errors.message ? "message-error" : "message-hint"}
                  />
                  <p id="message-hint" className="mt-1 text-sm text-muted-foreground">
                    {formData.message.length}/500 Zeichen
                  </p>
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary text-white hover:bg-secondary/90 disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div
                        className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
                        aria-hidden="true"
                      ></div>
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                      Nachricht senden
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
                <h2 className="mb-6 text-2xl font-semibold">Kontaktinformationen</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="gradient-primary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
                      <MapPin className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="mb-1 font-medium">Adresse</p>
                      <address className="not-italic text-muted-foreground">
                        Metzgerei Vogel GmbH
                        <br />
                        Alte Dorfstraße 35 • Ursulapoppenricht
                        <br />
                        92256 Hahnbach
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
                        href="tel:+49123456789"
                        className="text-muted-foreground transition-colors hover:text-secondary"
                      >
                        0123 456 789
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">Mo-Fr: 08:00 - 18:00 Uhr</p>
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
                </div>
              </div>

              {/* Google Maps Integration */}
              <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2588.7890123456!2d11.825678!3d49.628901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f3e1234567890%3A0x1234567890abcdef!2sAlte%20Dorfstra%C3%9Fe%2035%2C%2092256%20Hahnbach!5e0!3m2!1sde!2sde!4v1728567890123"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Standort: Alte Dorfstraße 35, Ursulapoppenricht, 92256 Hahnbach"
                  className="grayscale transition-all duration-300 hover:grayscale-0"
                ></iframe>
              </div>

              {/* Quick Info */}
              <div className="gradient-soft rounded-2xl border border-border p-6">
                <h3 className="mb-2 font-semibold">Anfahrt</h3>
                <p className="text-sm text-muted-foreground">
                  Kostenlose Parkplätze direkt vor der Praxis. Mit öffentlichen Verkehrsmitteln: Bus
                  123 & 456, Haltestelle "Musterplatz"
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Contact;
