import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import teamImage from "@/assets/team-image.png";
import teamJonas from "@/assets/team-jonas.png";
import teamVater from "@/assets/team-vater.png";
import teamOma from "@/assets/team-oma.png";

const Team = () => {
  const team = [
    {
      name: "Dr. Prof. Jonas",
      role: "Leitender Physiotherapeut",
      specialization: "Alles was mit Bewegung zu tun hat",
      description: "Der jüngste Professor der Welt mit 42 Jahren Erfahrung",
      image: teamJonas,
    },
    {
      name: "Dr. Prof. Jonas sein Vater",
      role: "Senior Physiotherapeut",
      specialization: "Hat Jonas alles beigebracht",
      description: "Legendary Therapeut der alten Schule - kann alles heilen außer seinen Rücken",
      image: teamVater,
    },
    {
      name: "Dr. Prof. Jonas seine Oma",
      role: "Oberste Physiotherapeutin",
      specialization: "Weisheit & Kekse",
      description: "85 Jahre jung, kennt alle Tricks seit 1952. Warme Wickel sind ihre Geheimwaffe",
      image: teamOma,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main id="main-content" className="pb-20 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 animate-fade-in text-center">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
              Unser <span className="text-gradient">Team</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Lernen Sie unsere erfahrenen und engagierten Therapeuten kennen, die Sie auf Ihrem Weg
              zur Genesung begleiten.
            </p>
          </div>

          {/* Team Image */}
          <div className="mb-20 animate-fade-in">
            <div
              className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-2xl"
              style={{ height: "400px" }}
            >
              <img
                src={teamImage}
                alt="PHYSIOVIO Team - Professionelle Physiotherapeuten in Musterstadt"
                className="absolute left-1/2 h-full w-full -translate-x-1/2 object-cover"
                style={{ top: "25%", transform: "translate(-50%, -25%)" }}
                loading="lazy"
                width="1200"
                height="400"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Team Members */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8"
              >
                {/* Avatar - Centered on Mobile, Left on Desktop */}
                <div className="mb-6 flex flex-col items-center sm:mb-0 sm:flex-row sm:items-start sm:space-x-5">
                  <Avatar className="h-28 w-28 flex-shrink-0 ring-4 ring-background transition-all duration-300 group-hover:ring-secondary/20 sm:h-32 sm:w-32">
                    <AvatarImage
                      src={member.image}
                      alt={`Profilbild von ${member.name}`}
                      loading="lazy"
                      className="object-cover"
                    />
                    <AvatarFallback className="gradient-primary text-3xl font-bold text-white sm:text-4xl">
                      {member.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  {/* Content */}
                  <div className="mt-4 flex-1 text-center sm:mt-0 sm:text-left">
                    <h3 className="mb-2 text-xl font-bold sm:text-2xl">{member.name}</h3>
                    <p className="mb-3 text-base font-semibold text-secondary">{member.role}</p>
                    <p className="mb-3 text-sm text-muted-foreground">
                      <span className="font-semibold">Spezialisierung:</span>
                      <br className="sm:hidden" />
                      <span className="sm:ml-1">{member.specialization}</span>
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Philosophy Section */}
          <div className="gradient-soft mt-20 rounded-2xl border border-border p-8 sm:p-12">
            <h2 className="mb-6 text-center text-3xl font-bold">Unsere Philosophie</h2>
            <div className="mx-auto max-w-3xl space-y-4 text-muted-foreground">
              <p>
                Bei PHYSIOVIO glauben wir an eine partnerschaftliche Zusammenarbeit zwischen
                Therapeut und Patient. Wir begleiten Sie professionell auf Ihrem Weg zur Genesung,
                aber die aktive Mitarbeit liegt bei Ihnen.
              </p>
              <p>
                Unser Team vereint jahrelange Erfahrung mit modernsten Behandlungsmethoden. Jeder
                Therapeut bringt seine individuellen Stärken ein, um Ihnen die bestmögliche
                Behandlung zu bieten.
              </p>
              <p>
                Wir legen großen Wert auf kontinuierliche Weiterbildung und arbeiten nach neuesten
                wissenschaftlichen Erkenntnissen – immer mit dem Ziel, Ihre Lebensqualität
                nachhaltig zu verbessern.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Team;
