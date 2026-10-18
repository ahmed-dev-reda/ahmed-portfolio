"use client";

import { useEffect, useRef, useState } from "react";
import { useActionState } from "react";
import { toast } from "sonner";

import { portfolio, socials } from "@/components/data";
import { sendContactMessage } from "@/app/actions/contact";
import Reveal from "@/components/sections/reveal";

const inputClasses =
  "w-full rounded-md border border-[#484848] bg-card/50 px-4 py-3 text-sm text-white outline-none backdrop-blur-md transition placeholder:text-secondary focus:border-lime focus:bg-card/70";

const initialContactState = { success: false, message: null as string | null };

export default function Contact() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialContactState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  // clear the form once the message is delivered
  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  // toast feedback for the latest server-action result
  useEffect(() => {
    if (state.message === null) return; // initial state, nothing sent yet

    if (state.success) {
      toast.success("Message sent 🎉", {
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
      return;
    }

    toast.error("Message not sent", {
      description: state.message,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <footer id="contact">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 sm:px-10 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-[3%] lg:py-24">
        {/* Intro */}
        <Reveal x={-40} y={0}>
          <div className="flex h-full flex-col">
            <h2 className="display-heading text-4xl text-white sm:text-5xl md:text-6xl">
              Let&apos;s connect
            </h2>

            <p className="mt-5 text-sm text-secondary">
              Say hello at{" "}
              <a
                href={`mailto:${portfolio.email}`}
                className="text-white underline underline-offset-4 hover:text-lime"
              >
                {portfolio.email}
              </a>
            </p>

            <p className="mt-2 text-sm text-secondary">
              For more info, here&apos;s my{" "}
              <a
                href={portfolio.resume}
                download
                className="text-white underline underline-offset-4 hover:text-lime"
              >
                resume
              </a>
            </p>

            <div className="mt-8 flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-lime transition hover:bg-lime hover:text-[#1a2a00]"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>

            <p className="mt-16 text-xs text-secondary lg:mt-auto lg:pt-20">
              © {new Date().getFullYear()} {portfolio.name}
            </p>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1}>
          <form
            ref={formRef}
            action={formAction}
            className="space-y-5 rounded-2xl border border-[#484848]/60 bg-card/30 p-5 backdrop-blur-md sm:p-6"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs text-secondary"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                placeholder="John Doe"
                className={inputClasses}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs text-secondary"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={inputClasses}
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-xs text-secondary"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                required
                className={inputClasses}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs text-secondary"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className={`${inputClasses} resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={pending}
              className="rounded-full bg-lime px-7 py-3 text-[11px] font-bold uppercase tracking-widest text-[#1a2a00] transition hover:bg-lime-hover disabled:cursor-wait disabled:opacity-60"
            >
              {pending ? "Sending..." : "Submit"}
            </button>
          </form>
        </Reveal>
      </div>
    </footer>
  );
}
