import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import logo from "../assets/white_logo_transparent.png";

const OpeningBanner = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      // Cancel previous frame if it hasn't executed yet
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      // Schedule update for next frame
      rafId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        rafId = null;
      });
    };

    // Single passive listener with RAF throttling
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // === Konfiguration ===
  const MAX_HEIGHT = typeof window !== "undefined" ? window.innerHeight : 800;
  const MIN_HEIGHT = 60; // Schmale End-Höhe
  const NAV_HEIGHT = 80; // Navigation Höhe (5rem = 80px)
  const HIDE_EXTRAS_HEIGHT = 300; // Ab dieser Höhe verschwinden Subtitle + Button

  // === Berechnungen ===
  // Banner schrumpft SOFORT mit dem Scroll (kein Offset!)
  const scrollRange = MAX_HEIGHT - MIN_HEIGHT;
  const progress = Math.min(scrollY / scrollRange, 1);
  const currentHeight = MAX_HEIGHT - progress * scrollRange;

  // Zeige Subtitle + Button nur wenn Höhe > 300px (mit kleinem Puffer für smooth fade)
  const showExtras = currentHeight > 280;
  // Sanfter Fade für Subtitle/Button: von 300px (opacity 1) bis 280px (opacity 0)
  const extrasOpacity =
    currentHeight > HIDE_EXTRAS_HEIGHT ? 1 : currentHeight > 280 ? (currentHeight - 280) / 20 : 0;

  // Logo verschwindet im Endzustand (bei MIN_HEIGHT)
  const showLogo = currentHeight > MIN_HEIGHT && progress < 0.66; // Logo weg ab Stufe 3 (66%)

  // justify-center nur im Endzustand (minimiert)
  const isMinimized = currentHeight <= MIN_HEIGHT || progress >= 0.66; // Mittig ab Stufe 3 (wenn Logo weg ist)

  // Dynamische Größen - LOGO 3x GRÖSSER!
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const logoWidth = isMobile ? 180 - progress * 148 : 600 - progress * 568; // Mobile: 180px → 32px, Desktop: 600px → 32px (3x größer!)
  const logoHeight = isMobile ? 90 - progress * 58 : 300 - progress * 268; // Mobile: 90px → 32px, Desktop: 300px → 32px (Höhe begrenzt!)

  // Schriftgröße - Easing-Funktion für smooth, natürliche Übergänge
  // easeOutCubic: Startet schnell, wird am Ende langsamer (natürlichster Scroll-Effekt)
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
  const easedProgress = easeOutCubic(progress);

  const titleSize = isMobile
    ? 3 - easedProgress * 1.875 // 3rem → 1.125rem (smooth cubic easing)
    : 7 - easedProgress * 5.875; // 7rem → 1.125rem (smooth cubic easing)

  // Scroll zum Hero Bereich - Normal
  const scrollToHero = () => {
    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Banner - sticky unter Nav mit dynamischer Höhe */}
      <div
        className="sticky top-20 z-40 overflow-hidden bg-secondary shadow-lg"
        style={{
          height: `${currentHeight}px`,
          willChange: "height",
        }}
      >
        {/* Radial Gradient Background */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"
          aria-hidden="true"
        />

        {/* Single Content - scales down on scroll - justify-center nur im Endzustand */}
        <div
          className={`absolute inset-0 z-10 flex flex-col items-center gap-4 px-4 py-2 ${isMinimized ? "justify-center" : "justify-start"}`}
          style={{
            willChange: "transform",
          }}
        >
          {/* Logo - verschwindet im Endzustand */}
          {showLogo && (
            <img
              src={logo}
              alt="PHYSIO VIO Logo"
              className="mb-1 object-contain"
              style={{
                width: `${logoWidth}px`,
                height: `${logoHeight}px`,
                willChange: "width, height",
              }}
            />
          )}

          {/* Main Banner Content - font size scales down */}
          <div className="space-y-3 text-center">
            <h1
              className="px-4 font-black tracking-tight text-primary"
              style={{
                fontSize: `${titleSize}rem`,
                lineHeight: 1.1,
                willChange: "font-size",
              }}
            >
              Neueröffnung ab
              <br />
              5. Januar 2026
            </h1>

            {/* Subtitle - Verschwindet bei 300px Höhe */}
            {showExtras && (
              <p
                className="px-4 text-base font-semibold text-primary/90 sm:text-xl"
                style={{
                  opacity: extrasOpacity,
                  willChange: "opacity",
                }}
              >
                Sichere dir jetzt schon deinen Wunschtermin!
              </p>
            )}
          </div>

          {/* Scroll Button - Verschwindet bei 300px Höhe */}
          {showExtras && (
            <button
              onClick={scrollToHero}
              className="group mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              style={{
                opacity: extrasOpacity,
                willChange: "opacity",
              }}
            >
              Erfahre mehr
              <ChevronDown
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1"
                aria-hidden="true"
              />
            </button>
          )}
        </div>
      </div>

      {/* Spacer: Hält Hero "unten" während Banner schrumpft */}
      {/* Wenn Banner von 100vh auf 60px schrumpft, nimmt dieser Spacer den Platz ein */}
      {/* So bleibt Hero sichtbar und scrollt NICHT weg, bis Banner auf MIN_HEIGHT ist */}
      <div
        style={{
          height: `${Math.max(0, MAX_HEIGHT - currentHeight)}px`,
        }}
      />

      {/* Padding zwischen Banner und Hero - verhindert "Auffressen" */}
      <div className="h-8 bg-gradient-to-b from-secondary/20 to-transparent" />
    </>
  );
};

export default OpeningBanner;
