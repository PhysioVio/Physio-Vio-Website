import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Building2, Users } from "lucide-react";
import jonasImage from "../assets/jonas.png";
import marieImage from "../assets/marie.png";
import sigiImage from "../assets/sigi.png";
import praxisImage from "../assets/praxis.png";

const Team = () => {
  const teamMembers = [
    {
      name: "Jonas",
      role: "Physiotherapeut & Praxisinhaber",
      fortbildungen: "Manuelle Lymphdrainage, Manuelle Therapie i.A., Kiefergelenkstherapie",
      description: "Mit Leidenschaft und Fachkompetenz für Ihre Gesundheit im Einsatz.",
      image: jonasImage,
    },
    {
      name: "Marie",
      role: "Physiotherapeutin",
      fortbildungen:
        "Manuelle Lymphdrainage, Manuelle Therapie, Krankengymnastik nach Bobath, Krankengymnastik am Gerät",
      description: "Einfühlsame Betreuung mit dem Fokus auf individuelle Behandlungskonzepte.",
      image: marieImage,
    },
    {
      name: "Sigi",
      role: "Verwaltung",
      description:
        "Ihr freundlicher erster Kontakt und Ansprechpartner für alle organisatorischen Fragen.",
      image: sigiImage,
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main
        id="main-content"
        className="bg-gradient-to-b from-secondary/5 via-transparent to-muted/5 pb-20 pt-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 animate-fade-in text-center">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
              Über <span className="text-gradient">Uns</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Lernen unsere Praxis und unser Team kennen – Dein Partner für Gesundheit und
              Wohlbefinden.
            </p>
          </div>

          {/* Unsere Praxis Section - JETZT ZUERST */}
          <section className="mb-20">
            <div className="mb-12 flex items-center justify-center">
              <div
                className="gradient-primary mr-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl"
                aria-hidden="true"
              >
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                <span className="text-gradient">Unsere Praxis</span>
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Praxis Image */}
              <div className="relative overflow-hidden rounded-2xl border border-primary/30 shadow-lg ring-2 ring-secondary/10">
                <img
                  src={praxisImage}
                  alt="PHYSIO VIO Praxis - Moderne Räumlichkeiten und professionelle Ausstattung"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary/20 via-secondary/10 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Praxis Info */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-card/90 via-secondary/10 to-secondary/5 p-8 shadow-lg backdrop-blur-sm">
                  <h3 className="mb-4 text-2xl font-bold">Unsere Philosophie</h3>
                  <h4 className="mb-3 text-sm font-semibold text-primary">
                    Gemeinsam gehen. Selbstständig ankommen.
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Bei PHYSIO VIO steht der Mensch im Mittelpunkt – mit all seinen individuellen
                    Bedürfnissen und Zielen. Wir begleiten Sie auf Ihrem Weg zur Gesundheit, zeigen
                    Richtungen auf und geben Impulse. Schritt für Schritt lernen Sie, Verantwortung
                    für Ihren Körper zu übernehmen und nachhaltig selbstständig zu bleiben.
                  </p>
                </div>

                <div className="gradient-soft rounded-2xl border border-secondary/40 bg-gradient-to-br from-secondary/30 via-secondary/20 to-secondary/25 p-8 ring-2 ring-secondary/10">
                  <h3 className="mb-4 text-2xl font-bold">Moderne Ausstattung</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    Klare Räume, durchdachte Gestaltung und eine harmonische Stimmung – alles darauf
                    ausgelegt, dass du dich voll auf deine Genesung einlassen kannst.{" "}
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                      <span className="text-muted-foreground">
                        Hochwertige Trainings- und Therapiegeräte
                      </span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                      <span className="text-muted-foreground">Helle und klimatisierte Räume</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                      <span className="text-muted-foreground">Barrierefreier Zugang</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                      <span className="text-muted-foreground">
                        Kostenlose Parkplätze direkt vor der Praxis
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Unser Team Section - JETZT DANACH */}
          <section>
            <div className="mb-12 flex items-center justify-center">
              <div
                className="gradient-primary mr-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl"
                aria-hidden="true"
              >
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                <span className="text-gradient">Unser Team</span>
              </h2>
            </div>

            {/* Mitarbeiter Boxen - Foto links, Text rechts - KLEINER */}
            <div className="space-y-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="via-secondary/8 group overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-r from-card/90 to-secondary/5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:border-secondary/50 hover:from-secondary/10 hover:via-secondary/15 hover:to-secondary/10 hover:shadow-xl"
                >
                  <div className="grid items-center gap-0 lg:grid-cols-[280px_1fr] lg:gap-6">
                    {/* Foto Links - Kleiner */}
                    <div className="relative h-56 overflow-hidden bg-muted sm:h-64 lg:h-72">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-black/40 via-secondary/20 to-transparent lg:bg-gradient-to-r"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Text Rechts - Kompakter */}
                    <div className="p-6 lg:pr-8">
                      <h3 className="mb-2 text-2xl font-bold">{member.name}</h3>
                      <p className="mb-3 text-base font-semibold text-primary">{member.role}</p>
                      {member.fortbildungen && (
                        <p className="mb-3 text-sm text-muted-foreground">
                          <span className="font-semibold">Fortbildungen:</span>{" "}
                          {member.fortbildungen}
                        </p>
                      )}
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
