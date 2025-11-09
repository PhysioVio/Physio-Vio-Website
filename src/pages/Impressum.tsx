import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pb-20 pt-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-fade-in text-center">
            <div className="gradient-primary mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
              <span className="text-gradient">Impressum</span>
            </h1>
          </div>

          <div className="prose prose-slate max-w-none">
            <div className="space-y-8 rounded-2xl border border-border bg-card p-8">
              <section>
                <h2 className="mb-4 text-2xl font-semibold">Angaben gemäß § 5 TMG</h2>
                <p className="text-muted-foreground">
                  PHYSIO VIO
                  <br />
                  Inhaber: Jonas Rothmeier
                  <br />
                  Neunaigenerstraße 1
                  <br />
                  92533 Wernberg-Köblitz
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Kontakt</h2>
                <p className="text-muted-foreground">
                  Telefon: 09604 9389600
                  <br />
                  E-Mail: info@physiovio.de
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Berufsrechtliche Angaben</h2>
                <p className="text-muted-foreground">
                  Berufsbezeichnung: Physiotherapeut (verliehen in Deutschland)
                  <br />
                  Zuständige Aufsichtsbehörde: Gesundheitsamt Schwandorf
                  <br />
                  Es gelten die Bestimmungen des Masseur- und Physiotherapeutengesetzes (MPhG).
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Umsatzsteuer</h2>
                <p className="text-muted-foreground">Steuernummer: [Wird noch ergänzt]</p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h2>
                <p className="text-muted-foreground">
                  Jonas Rothmeier
                  <br />
                  Physiotherapeut
                  <br />
                  Neunaigenerstraße 1
                  <br />
                  92533 Wernberg-Köblitz
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Haftungsausschluss</h2>
                <h3 className="mb-2 mt-4 text-lg font-medium">Haftung für Inhalte</h3>
                <p className="text-muted-foreground">
                  Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die
                  Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir keine
                  Gewähr.
                </p>

                <h3 className="mb-2 mt-4 text-lg font-medium">Haftung für Links</h3>
                <p className="text-muted-foreground">
                  Diese Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
                  keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der
                  jeweilige Anbieter oder Betreiber verantwortlich.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Urheberrecht</h2>
                <p className="text-muted-foreground">
                  Die auf dieser Website erstellten Inhalte und Werke unterliegen dem deutschen
                  Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                  Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen
                  Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  Hinweis gemäß § 36 VSBG / Art. 14 ODR-VO
                </h2>
                <p className="text-muted-foreground">
                  Die Europäische Kommission stellt eine Plattform zur Verbraucherstreitbeilegung
                  bereit:{" "}
                  <a
                    href="https://consumer-redress.ec.europa.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline"
                  >
                    https://consumer-redress.ec.europa.eu/
                  </a>
                </p>
                <p className="mt-3 text-muted-foreground">
                  Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren
                  vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Hinweis zum Heilmittelwerbegesetz</h2>
                <p className="text-muted-foreground">
                  Die Informationen auf dieser Website dienen ausschließlich der allgemeinen
                  Information und ersetzen nicht die persönliche Beratung durch qualifizierte Ärzte,
                  Therapeuten oder Heilpraktiker.
                </p>
                <p className="mt-3 text-muted-foreground">
                  Wir weisen ausdrücklich darauf hin, dass bei unseren Leistungsangeboten kein
                  Heilversprechen abgegeben wird. Es kann weder eine Garantie noch ein Versprechen
                  für eine Linderung oder Verbesserung von Krankheitszuständen gegeben werden.
                </p>
                <p className="mt-3 text-muted-foreground">
                  Die bereitgestellten Inhalte dienen nicht zur Selbstdiagnose oder
                  Selbstbehandlung. Für Schäden, die aus der Nutzung der auf dieser Website
                  veröffentlichten Informationen entstehen könnten, übernehmen wir keine Haftung.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Impressum;
