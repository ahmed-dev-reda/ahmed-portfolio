"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Locale = "en" | "ar";

export const dict = {
  en: {
    // header
    nav_work: "Work",
    nav_about: "About",
    nav_contact: "Contact",
    lang_label: "عربي",
    theme_label: "Theme",
    language_label: "Language",
    switch_to_light: "Switch to light theme",
    switch_to_dark: "Switch to dark theme",

    // hero
    hero_hi: "Hi, I am",
    hero_cta: "Contact me",

    // services
    services_heading: "Services",
    services_blurb:
      "From pixel-perfect front-ends to scalable full stacks — the services I deliver to bring web projects to life.",
    service_cta: "Get started",
    nav_services: "Services",

    // projects
    projects_heading: "Featured Projects",
    projects_blurb:
      "Here are some of the selected projects that showcase my passion for front-end development.",
    project_info: "Project info",
    project_year: "Year",
    project_role: "Role",
    project_stack: "Stack",
    project_live: "Live demo",
    project_github: "See on GitHub",

    // about
    about_heading: "About me",

    // contact
    contact_heading: "Let's connect",
    contact_hello: "Say hello at",
    contact_resume_pre: "For more info, here's my",
    contact_resume: "resume",

    form_name: "Name",
    form_email: "Email",
    form_subject: "Subject",
    form_message: "Message",

    form_name_placeholder: "Enter your name",
    form_email_placeholder: "Enter your email address",
    form_subject_placeholder: "Enter the subject",
    form_message_placeholder: "Write your message here...",

    form_submit: "Submit",
    form_sending: "Sending...",

    toast_success: "Message sent 🎉",
    toast_success_desc: "Thanks for reaching out — I'll get back to you soon.",
    toast_error: "Message not sent",
  },

  ar: {
    // header
    nav_work: "أعمالي",
    nav_about: "نبذة عني",
    nav_contact: "تواصل",
    lang_label: "EN",
    theme_label: "المظهر",
    language_label: "اللغة",
    switch_to_light: "التبديل إلى الوضع الفاتح",
    switch_to_dark: "التبديل إلى الوضع الغامق",

    // hero
    hero_hi: "أهلًا، أنا",
    hero_cta: "تواصل معي",

    // services
    services_heading: "خدماتي",
    services_blurb:
      "من تصميم الواجهات الأمامية بدقة إلى بناء تطبيقات ويب متكاملة وقابلة للتوسع — أقدم خدمات تساعد على تحويل أفكار الويب إلى واقع.",
    service_cta: "ابدأ الآن",
    nav_services: "خدماتي",

    // projects
    // Project names stay English
    projects_heading: "مشاريع مميزة",
    projects_blurb:
      "إليك بعض المشاريع المختارة التي تعكس شغفي بتطوير الواجهات الأمامية.",
    project_info: "معلومات المشروع",
    project_year: "السنة",
    project_role: "الدور",
    project_stack: "التقنيات",
    project_live: "عرض مباشر",
    project_github: "عرض الكود على GitHub",

    // about
    about_heading: "نبذة عني",

    // contact
    contact_heading: "تواصل معي",
    contact_hello: "راسلني على",
    contact_resume_pre: "لمزيد من المعلومات، يمكنك الاطلاع على",
    contact_resume: "سيرتي الذاتية",

    form_name: "الاسم",
    form_email: "البريد الإلكتروني",
    form_subject: "الموضوع",
    form_message: "الرسالة",

    form_name_placeholder: "اكتب اسمك",
    form_email_placeholder: "اكتب بريدك الإلكتروني",
    form_subject_placeholder: "اكتب موضوع الرسالة",
    form_message_placeholder: "اكتب رسالتك هنا...",

    form_submit: "إرسال",
    form_sending: "جارٍ الإرسال...",

    toast_success: "تم إرسال الرسالة 🎉",
    toast_success_desc: "شكرًا لتواصلك — سأرد عليك قريبًا.",
    toast_error: "لم يتم إرسال الرسالة",
  },
} as const;

export type MessageKey = keyof typeof dict.en;

interface I18nValue {
  locale: Locale;
  isRtl: boolean;
  t: (key: MessageKey) => string;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nValue>({
  locale: "en",
  isRtl: false,
  t: (key) => dict.en[key],
  setLocale: () => {},
});

const STORAGE_KEY = "site-locale";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // restore the saved locale once mounted (SSR always renders "en")
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved === "ar" || saved === "en") setLocaleState(saved);
  }, []);

  // reflect the locale on the document element (lang + dir for RTL)
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const t = useCallback((key: MessageKey) => dict[locale][key], [locale]);

  return (
    <I18nContext.Provider
      value={{ locale, isRtl: locale === "ar", t, setLocale }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

/** Localised project description; names always stay in English. */
export function projectDescription(
  locale: Locale,
  description: string,
  descriptionAr?: string,
) {
  return locale === "ar" && descriptionAr ? descriptionAr : description;
}
