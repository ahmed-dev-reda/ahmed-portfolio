"use client";

import { useI18n } from "@/components/providers/i18n";

/** Language toggle: shows the language it switches to. */
export default function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  return (
    <button
      type="button"
      aria-label={locale === "en" ? "التبديل إلى العربية" : "Switch to English"}
      onClick={() => setLocale(locale === "en" ? "ar" : "en")}
      className="flex h-9 min-w-9 items-center justify-center rounded-full bg-card text-foreground text-[11px] font-bold tracking-wide transition-colors duration-200 hover:bg-lime hover:text-[#1a2a00]"
    >
      {locale === "en" ? "عربي" : "EN"}
    </button>
  );
}
