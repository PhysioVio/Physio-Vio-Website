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
                  PHYSIO VIO Praxis für Physiotherapie
                  <br />
                  Max Mustermann
                  <br />
                  Musterstraße 123
                  <br />
                  12345 Musterstadt
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Kontakt</h2>
                <p className="text-muted-foreground">
                  Telefon: 0123 456789
                  <br />
                  E-Mail: info@physiovio.de
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Berufsbezeichnung</h2>
                <p className="text-muted-foreground">
                  Physiotherapeut
                  <br />
                  Zuständige Kammer: [Kammer eintragen]
                  <br />
                  Verliehen in: Deutschland
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Aufsichtsbehörde</h2>
                <p className="text-muted-foreground">
                  [Name der zuständigen Aufsichtsbehörde]
                  <br />
                  [Adresse der Behörde]
                  <br />
                  [Stadt, PLZ]
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Berufsrechtliche Regelungen</h2>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Berufsordnung für Physiotherapeuten</li>
                  <li>Masseur- und Physiotherapeutengesetz (MPhG)</li>
                  <li>Ausbildungs- und Prüfungsverordnung (PhysTh-APrV)</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Umsatzsteuer-ID</h2>
                <p className="text-muted-foreground">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                  <br />
                  [USt-IdNr. eintragen]
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Berufshaftpflichtversicherung</h2>
                <p className="text-muted-foreground">
                  [Name der Versicherung]
                  <br />
                  [Adresse der Versicherung]
                  <br />
                  Geltungsraum: Deutschland
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Redaktionell verantwortlich</h2>
                <p className="text-muted-foreground">
                  Max Mustermann
                  <br />
                  Musterstraße 123
                  <br />
                  12345 Musterstadt
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">EU-Streitschlichtung</h2>
                <p className="text-muted-foreground">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
                  bereit:
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-secondary hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  <br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  Verbraucherstreitbeilegung / Universalschlichtungsstelle
                </h2>
                <p className="text-muted-foreground">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <div className="border-t border-border pt-6 text-sm text-muted-foreground">
                <p>
                  Quelle:{" "}
                  <a
                    href="https://www.e-recht24.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    e-recht24.de
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Impressum;
