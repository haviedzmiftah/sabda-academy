"use client";

import { trackEvent } from "@/lib/analytics";

const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");

export function WhatsAppButton() {
  if (!phoneNumber) return null;

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Halo Sabda Academy, saya ingin mengetahui program coding untuk anak.")}`}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackEvent("whatsapp_click", { location: "floating_button" })}
      className="focus-ring fixed bottom-5 right-5 z-20 flex min-h-12 items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 font-bold text-white shadow-elevated transition-colors hover:bg-emerald-700 md:hidden"
      aria-label="Chat Sabda Academy melalui WhatsApp"
    >
      <span aria-hidden="true">◉</span> Chat WhatsApp
    </a>
  );
}
