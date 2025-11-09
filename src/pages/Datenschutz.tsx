import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pb-20 pt-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-fade-in text-center">
            <div className="gradient-primary mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
              <span className="text-gradient">Datenschutzerklärung</span>
            </h1>
          </div>

          <div className="prose prose-slate max-w-none">
            <div className="space-y-8 rounded-2xl border border-border bg-card p-8">
              <section>
                <h2 className="mb-4 text-2xl font-semibold">1. Datenschutz auf einen Blick</h2>
                <h3 className="mb-3 mt-6 text-xl font-semibold">Allgemeine Hinweise</h3>
                <p className="text-muted-foreground">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                  personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                  Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
                  werden können.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">2. Verantwortlicher</h2>
                <p className="text-muted-foreground">
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                  <br />
                  <br />
                  PHYSIO VIO
                  <br />
                  Praxis für Physiotherapie
                  <br />
                  Inhaber: Jonas Rothmeier
                  <br />
                  Neunaigenerstraße 1
                  <br />
                  92533 Wernberg-Köblitz
                  <br />
                  <br />
                  Telefon: 09604 9389600
                  <br />
                  E-Mail: info@physiovio.de
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  3. Datenerfassung auf dieser Website
                </h2>

                <h3 className="mb-3 mt-6 text-xl font-semibold">Server-Log-Dateien</h3>
                <p className="mb-4 text-muted-foreground">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so
                  genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt:
                </p>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Browsertyp und Browserversion</li>
                  <li>Verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Erfassung
                  dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold">Kontaktaufnahme</h3>
                <p className="text-muted-foreground">
                  Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, werden Ihre Angaben
                  inklusive der von Ihnen mitgeteilten Kontaktdaten zwecks Bearbeitung der Anfrage
                  und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
                  nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von
                  Art. 6 Abs. 1 lit. b DSGVO.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">4. Externe Dienste</h2>

                <h3 className="mb-3 mt-6 text-xl font-semibold">Google Maps</h3>
                <p className="text-muted-foreground">
                  Diese Website nutzt den Kartendienst Google Maps zur Darstellung unseres
                  Standorts. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street,
                  Dublin 4, Irland. Bei der Nutzung von Google Maps werden Daten an Google
                  übertragen und dort gespeichert. Die Nutzung erfolgt auf Grundlage von Art. 6 Abs.
                  1 lit. f DSGVO. Weitere Informationen finden Sie in der Datenschutzerklärung von
                  Google:{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline"
                  >
                    https://policies.google.com/privacy
                  </a>
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">5. Ihre Rechte</h2>
                <p className="mb-4 text-muted-foreground">Sie haben jederzeit das Recht:</p>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>
                    Auskunft über Ihre bei uns gespeicherten Daten zu erhalten (Art. 15 DSGVO)
                  </li>
                  <li>
                    Die Berichtigung unrichtiger personenbezogener Daten zu verlangen (Art. 16
                    DSGVO)
                  </li>
                  <li>
                    Die Löschung Ihrer bei uns gespeicherten Daten zu verlangen (Art. 17 DSGVO)
                  </li>
                  <li>Die Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
                  <li>Der Verarbeitung zu widersprechen (Art. 21 DSGVO)</li>
                  <li>Auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Sich bei einer Aufsichtsbehörde zu beschweren (Art. 77 DSGVO)</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">6. Datensicherheit</h2>
                <p className="text-muted-foreground">
                  Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure
                  Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die
                  von Ihrem Browser unterstützt wird. Zusätzlich sichern wir unsere Website und
                  sonstigen Systeme durch technische und organisatorische Maßnahmen gegen Verlust,
                  Zerstörung, Zugriff, Veränderung oder Verbreitung Ihrer Daten durch unbefugte
                  Personen ab.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  7. Änderungen der Datenschutzerklärung
                </h2>
                <p className="text-muted-foreground">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
                  aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer
                  Leistungen in der Datenschutzerklärung umzusetzen.
                </p>
              </section>

              <div className="border-t border-border pt-6 text-sm text-muted-foreground">
                <p>Stand: Januar 2025</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Datenschutz;
