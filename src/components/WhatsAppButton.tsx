import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "4915129826319"; // +49 151 29826319 ohne Leerzeichen und +
  const message = encodeURIComponent("Hallo! Ich möchte einen Termin vereinbaren.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 sm:h-16 sm:w-16"
      aria-label="Kontakt via WhatsApp"
      title="Schreiben Sie uns auf WhatsApp"
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
      <span className="absolute -right-1 -top-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-[#25D366]"></span>
      </span>
    </a>
  );
};

export default WhatsAppButton;
