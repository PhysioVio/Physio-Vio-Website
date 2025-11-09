import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleService = (index: number) => {
    // Wenn dieselbe Box geklickt wird, schließe sie. Sonst öffne die neue.
    setOpenIndex(openIndex === index ? null : index);
  };
  const services = [
    {
      title: "Krankengymnastik (KG)",
      description:
        "Gezielte Bewegungstherapie zur Wiederherstellung, Erhaltung und Förderung der Gesundheit. Durch individuelle Übungen verbessern wir Ihre Beweglichkeit, Kraft und Koordination. Ideal nach Operationen, Verletzungen oder bei chronischen Beschwerden.",
      features: ["Individuelle Therapiepläne", "Schmerzlinderung", "Beweglichkeitsförderung"],
    },
    {
      title: "Manuelle Lymphdrainage (MLD)",
      description:
        "Sanfte Massagetechnik zur Aktivierung des Lymphsystems und Förderung des Lymphabflusses. Besonders wirksam bei Schwellungen, Ödemen nach Operationen oder Verletzungen. Die rhythmischen Griffe unterstützen die natürliche Entstauung des Körpers.",
      features: ["Ödembehandlung", "Entstauungstherapie", "Postoperative Nachsorge"],
    },
    {
      title: "Manuelle Therapie (MT)",
      description:
        "Spezielle Handgrifftechniken zur Behandlung von Funktionsstörungen des Bewegungsapparates. Wir mobilisieren Gelenke, dehnen verkürzte Muskeln und behandeln Blockaden. Besonders effektiv bei Gelenkschmerzen, Bewegungseinschränkungen und Verspannungen.",
      features: ["Gelenkbehandlung", "Mobilisation", "Schmerztherapie"],
    },
    {
      title: "Kiefergelenkstherapie (CMD)",
      description:
        "Spezialisierte Behandlung von Kiefergelenksbeschwerden (craniomandibulärer Dysfunktion). Durch gezielte manuelle Techniken behandeln wir Kieferschmerzen, Verspannungen und Bewegungseinschränkungen. Wirksam bei Zähneknirschen, Kopfschmerzen und Kiefergelenksproblemen.",
      features: ["Kiefergelenkbehandlung", "Schmerzreduktion", "Funktionsverbesserung"],
    },
    {
      title: "Krankengymnastik am Gerät (KGG)",
      description:
        "Gerätegestütztes Training zur Verbesserung von Kraft, Ausdauer und Koordination. An modernen Trainingsgeräten arbeiten wir gezielt an Schwachstellen. Perfekt für den Muskelaufbau und die Stabilisierung nach Verletzungen.",
      features: ["Muskelaufbau", "Stabilisationstraining", "Funktionelles Training"],
    },
    {
      title: "Krankengymnastik nach Bobath (KG Bobath)",
      description:
        "Spezielles neurophysiologisches Behandlungskonzept für Patienten mit neurologischen Erkrankungen. Durch gezielte Bewegungsanbahnung verbessern wir gestörte Bewegungsmuster. Ideal nach Schlaganfall, bei Parkinson oder Multipler Sklerose.",
      features: ["Neurologische Rehabilitation", "Bewegungsanbahnung", "Alltagstraining"],
    },

    {
      title: "Klassische Massagetherapie (KMT)",
      description:
        "Bewährte Massagetechniken zur Lockerung verspannter Muskulatur und Förderung der Durchblutung. Durch gezielte Griffe lösen wir Verhärtungen, lindern Schmerzen und steigern Ihr Wohlbefinden. Ideal zur Entspannung und Regeneration.",
      features: ["Muskellösung", "Durchblutungsförderung", "Entspannung"],
    },
    {
      title: "Elektrotherapie (ET)",
      description:
        "Therapeutische Anwendung von elektrischem Strom zur Schmerzlinderung und Muskelstimulation. Die elektrischen Impulse fördern die Durchblutung, lockern die Muskulatur und unterstützen den Heilungsprozess. Wirksam bei akuten und chronischen Schmerzen.",
      features: ["Schmerzreduktion", "Muskelstimulation", "Durchblutungsförderung"],
    },
    {
      title: "Ultraschalltherapie (WT mittels Ultraschall)",
      description:
        "Behandlung mit hochfrequenten Schallwellen, die tief ins Gewebe eindringen. Fördert die Heilung, lockert Verklebungen und lindert Entzündungen. Besonders wirksam bei Sehnenreizungen, Muskelverhärtungen und chronischen Schmerzzuständen.",
      features: ["Tiefenwärme", "Gewebeheilung", "Schmerzlinderung"],
    },
    {
      title: "Wärmetherapie (WT mittels Fango/Heißluft)",
      description:
        "Wohltuende Wärmeanwendungen zur Muskelentspannung und Durchblutungsförderung. Fango-Packungen oder Heißluft bereiten das Gewebe optimal auf weitere Behandlungen vor. Ideal zur Lockerung bei Verspannungen und chronischen Schmerzen.",
      features: ["Muskelentspannung", "Durchblutungsförderung", "Vorbereitung"],
    },
    {
      title: "Kältetherapie (KT)",
      description:
        "Gezielte Kälteanwendungen zur Schmerzlinderung und Entzündungshemmung. Kälte reduziert Schwellungen, hemmt Entzündungsprozesse und lindert akute Schmerzen. Perfekt nach Verletzungen, Operationen oder bei entzündlichen Erkrankungen.",
      features: ["Entzündungshemmung", "Abschwellung", "Akute Schmerzlinderung"],
    },
    {
      title: "Kinesiotaping",
      description:
        "Elastische Tape-Verbände zur Unterstützung der Muskulatur und Gelenke. Die speziellen Tapes stabilisieren, ohne die Bewegungsfreiheit einzuschränken, fördern die Durchblutung und können Schmerzen lindern. Ideal für Sportler und bei Überlastungssyndromen.",
      features: ["Muskelunterstützung", "Gelenkstabilisation", "Schmerzlinderung"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main
        id="main-content"
        className="bg-gradient-to-b from-secondary/5 via-transparent to-transparent pb-20 pt-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header mit Bild */}
          <div className="mb-16 grid animate-fade-in gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="text-center lg:text-left">
              <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
                <span className="text-gradient">Unsere Leistungen</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground lg:mx-0">
                Physiotherapie mit modernsten Behandlungsmethoden für deine Gesundheit und dein
                Wohlbefinden.
              </p>
            </div>

            {/* Hero Bild */}
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 shadow-xl ring-2 ring-secondary/10">
              <div
                className="gradient-primary absolute -inset-2 rounded-3xl opacity-10 blur-xl"
                aria-hidden="true"
              />
              <img
                src="/placeholder.svg"
                alt="Professionelle Physiotherapie - Moderne Behandlungsmethoden"
                className="relative h-full w-full rounded-2xl object-cover"
                style={{ minHeight: "200px", maxHeight: "280px" }}
                loading="eager"
              />
            </div>
          </div>

          {/* Services Accordion */}
          <div className="mb-16 space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="via-secondary/8 group overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-r from-card/90 to-card/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-secondary/50 hover:from-secondary/10 hover:via-secondary/15 hover:to-secondary/10 hover:shadow-xl"
              >
                {/* Header - Immer sichtbar, klickbar */}
                <button
                  onClick={() => toggleService(index)}
                  className="flex w-full items-center justify-between gap-3 rounded-l-2xl border-l-4 border-secondary/40 p-4 text-left transition-all hover:border-secondary hover:bg-gradient-to-r hover:from-secondary/15 hover:to-secondary/10 sm:gap-4 sm:p-6"
                >
                  <h3 className="text-base font-bold sm:text-xl">{service.title}</h3>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 sm:h-6 sm:w-6 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Content - Smoother & synchrone Animation */}
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-border px-6 pb-6 pt-4">
                      <p className="mb-6 leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="gradient-soft rounded-2xl border border-secondary/30 bg-gradient-to-br from-secondary/20 via-secondary/15 to-secondary/25 p-8 text-center shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Individuelle Beratung gewünscht?</h2>
            <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
              Gerne beraten wir dich persönlich, welche Behandlungsmethoden für deine individuellen
              Bedürfnisse am besten geeignet sind.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-primary/90 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-primary/90 hover:to-secondary hover:shadow-xl"
              >
                Jetzt Termin vereinbaren
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center justify-center rounded-xl border-2 border-secondary bg-gradient-to-r from-secondary/20 to-secondary/10 px-8 py-3 font-semibold text-primary shadow-md transition-all hover:scale-105 hover:border-secondary hover:from-secondary/30 hover:to-secondary/20 hover:shadow-lg"
              >
                Unser Team kennenlernen
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
