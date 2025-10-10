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
                  PHYSIO VIO Praxis für Physiotherapie
                  <br />
                  Max Mustermann
                  <br />
                  Musterstraße 123
                  <br />
                  12345 Musterstadt
                  <br />
                  <br />
                  Telefon: 0123 456789
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

                <h3 className="mb-3 mt-6 text-xl font-semibold">Kontaktformular</h3>
                <p className="text-muted-foreground">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
                  dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
                  Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                  Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">4. Cookies</h2>
                <p className="mb-4 text-muted-foreground">
                  Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem
                  Endgerät gespeichert werden und die Ihr Browser speichert. Sie dienen dazu, unser
                  Angebot nutzerfreundlicher zu machen.
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold">Notwendige Cookies</h3>
                <p className="mb-4 text-muted-foreground">
                  Diese Cookies sind für die Grundfunktionen der Website erforderlich und können
                  nicht deaktiviert werden. Dazu gehören Cookies zur Speicherung Ihrer
                  Cookie-Einstellungen.
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold">Funktionale Cookies</h3>
                <p className="mb-4 text-muted-foreground">
                  Diese Cookies ermöglichen erweiterte Funktionen und eine Personalisierung der
                  Website.
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold">Analyse-Cookies</h3>
                <p className="mb-4 text-muted-foreground">
                  Diese Cookies helfen uns, die Nutzung unserer Website zu analysieren und zu
                  verbessern. Sie werden nur mit Ihrer Einwilligung gesetzt.
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold">Marketing-Cookies</h3>
                <p className="text-muted-foreground">
                  Diese Cookies werden verwendet, um Ihnen relevante Werbung anzuzeigen. Sie werden
                  nur mit Ihrer Einwilligung gesetzt.
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
                <p className="mt-2">
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

export default Datenschutz;
