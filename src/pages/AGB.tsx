import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileCheck } from "lucide-react";

const AGB = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pb-20 pt-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-fade-in text-center">
            <div className="gradient-primary mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl">
              <FileCheck className="h-8 w-8 text-white" />
            </div>
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
              <span className="text-gradient">Allgemeine Geschäftsbedingungen</span>
            </h1>
          </div>

          <div className="prose prose-slate max-w-none">
            <div className="space-y-8 rounded-2xl border border-border bg-card p-8">
              <section>
                <h2 className="mb-4 text-2xl font-semibold">§ 1 Geltungsbereich</h2>
                <p className="text-muted-foreground">
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Behandlungen und
                  Leistungen, die von PHYSIO VIO Praxis für Physiotherapie erbracht werden. Mit der
                  Inanspruchnahme unserer Leistungen akzeptiert der Patient diese AGB.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">§ 2 Terminvereinbarung</h2>
                <p className="mb-4 text-muted-foreground">
                  Termine können telefonisch, per E-Mail oder über unser Online-Buchungssystem
                  vereinbart werden. Die Bestätigung erfolgt in der Regel innerhalb von 24 Stunden.
                </p>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Termine sollten rechtzeitig vereinbart werden</li>
                  <li>Bei Erstbehandlungen planen wir mehr Zeit ein</li>
                  <li>Bitte erscheinen Sie pünktlich zu Ihrem Termin</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">§ 3 Terminabsagen und Stornierungen</h2>
                <p className="mb-4 text-muted-foreground">
                  Sollten Sie einen vereinbarten Termin nicht wahrnehmen können, bitten wir um
                  rechtzeitige Absage:
                </p>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Absagen müssen mindestens 24 Stunden vor dem Termin erfolgen</li>
                  <li>
                    Bei kurzfristigeren Absagen oder Nichterscheinen behalten wir uns vor, eine
                    Ausfallgebühr in Höhe von 50% der Behandlungskosten zu berechnen
                  </li>
                  <li>Bei Privatpatienten wird die volle Behandlungsgebühr in Rechnung gestellt</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">§ 4 Behandlung</h2>
                <p className="mb-4 text-muted-foreground">
                  Die physiotherapeutische Behandlung erfolgt auf Grundlage einer ärztlichen
                  Verordnung oder als Privatleistung nach individueller Vereinbarung.
                </p>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>
                    Bitte bringen Sie zur Erstbehandlung Ihre Verordnung und ggf. relevante Befunde
                    mit
                  </li>
                  <li>Die Behandlung wird individuell auf Ihre Beschwerden abgestimmt</li>
                  <li>Eine aktive Mitarbeit des Patienten ist für den Therapieerfolg wichtig</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">§ 5 Vergütung</h2>
                <p className="mb-4 text-muted-foreground">
                  Die Abrechnung erfolgt nach den jeweils gültigen Gebührenordnungen:
                </p>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>
                    Bei gesetzlich Versicherten erfolgt die Abrechnung direkt mit der Krankenkasse
                  </li>
                  <li>Privatpatienten erhalten eine Rechnung nach GebüH</li>
                  <li>
                    Selbstzahler erhalten eine Rechnung nach GebüH oder individueller Vereinbarung
                  </li>
                  <li>Rezeptgebühren sind direkt bei Behandlungsbeginn zu entrichten</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">§ 6 Schweigepflicht</h2>
                <p className="text-muted-foreground">
                  Alle Mitarbeiter unterliegen der gesetzlichen Schweigepflicht. Ihre Daten werden
                  vertraulich behandelt und nur für die Behandlung und Abrechnung verwendet. Eine
                  Weitergabe an Dritte erfolgt nur mit Ihrer ausdrücklichen Einwilligung oder wenn
                  dies gesetzlich vorgeschrieben ist.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">§ 7 Haftung</h2>
                <p className="mb-4 text-muted-foreground">
                  Wir haften im Rahmen der gesetzlichen Bestimmungen für Schäden, die auf Vorsatz
                  oder grober Fahrlässigkeit beruhen. Für leichte Fahrlässigkeit haften wir nur bei
                  Verletzung wesentlicher Vertragspflichten.
                </p>
                <p className="text-muted-foreground">
                  Der Patient ist verpflichtet, persönliche Gegenstände selbst zu verwahren. Für
                  abhanden gekommene Gegenstände übernehmen wir keine Haftung.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">§ 8 Hausrecht</h2>
                <p className="text-muted-foreground">
                  Das Praxispersonal übt das Hausrecht aus. Bei Verstößen gegen die Hausordnung oder
                  unangemessenem Verhalten kann der Zutritt zur Praxis verweigert werden.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">§ 9 Hygienevorschriften</h2>
                <p className="mb-4 text-muted-foreground">
                  Zum Schutz aller Patienten und Mitarbeiter gelten folgende Hygienevorschriften:
                </p>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Bei Infektionskrankheiten bitten wir um rechtzeitige Absage</li>
                  <li>Händedesinfektion beim Betreten der Praxis</li>
                  <li>Bitte bringen Sie ein eigenes Handtuch mit</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">§ 10 Schlussbestimmungen</h2>
                <p className="mb-4 text-muted-foreground">
                  Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die
                  Wirksamkeit der übrigen Bestimmungen davon unberührt.
                </p>
                <p className="text-muted-foreground">
                  Es gilt deutsches Recht. Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz
                  unserer Praxis.
                </p>
              </section>

              <div className="border-t border-border pt-6 text-sm text-muted-foreground">
                <p>Stand: Januar 2025</p>
                <p className="mt-2">
                  PHYSIO VIO Praxis für Physiotherapie
                  <br />
                  Musterstraße 123, 12345 Musterstadt
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

export default AGB;
