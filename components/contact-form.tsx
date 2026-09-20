"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [pending, setPending] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    setPending(true);

    const formData = new FormData(form);

    formData.append("access_key", process.env.W3FORM_KEY as string);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        form.reset();
        toast.success("Message has been sent!");
      } else {
        toast.error("Something went wrong.");
      }
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setPending(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-8 w-full">
      {/* Name + Email */}
      <div className="flex flex-col gap-5 sm:flex-row sm:gap-4">
        <div className="flex-1">
          <label
            htmlFor="name"
            className="mb-2 block text-[11px] font-medium uppercase tracking-wider text-white/60"
          >
            Name
          </label>

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
            className="
          w-full rounded-xl
          border border-white/10
          bg-black/20
          px-4 py-3
          text-sm text-white
          placeholder:text-white/30
          outline-none
          backdrop-blur-md
          transition
          focus:border-white/30
          focus:bg-black/30
        "
          />
        </div>

        <div className="flex-1">
          <label
            htmlFor="email"
            className="mb-2 block text-[11px] font-medium uppercase tracking-wider text-white/60"
          >
            Email
          </label>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="your@email.com"
            required
            className="
          w-full rounded-xl
          border border-white/10
          bg-black/20
          px-4 py-3
          text-sm text-white
          placeholder:text-white/30
          outline-none
          backdrop-blur-md
          transition
          focus:border-white/30
          focus:bg-black/30
        "
          />
        </div>
      </div>

      {/* Message */}
      <div className="mt-5">
        <label
          htmlFor="message"
          className="mb-2 block text-[11px] font-medium uppercase tracking-wider text-white/60"
        >
          Message
        </label>

        <textarea
          name="message"
          id="message"
          placeholder="Tell me about your project..."
          required
          className="
        h-48
        w-full resize-none rounded-xl
        border border-white/10
        bg-black/20
        px-4 py-3
        text-sm text-white
        placeholder:text-white/30
        outline-none
        backdrop-blur-md
        transition
        focus:border-white/30
        focus:bg-black/30
      "
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={pending}
        className="
      mt-5 flex w-full items-center justify-center
      rounded-xl
      bg-white
      px-5 py-3
      text-sm font-medium text-black
      transition
      hover:bg-white/90
      active:scale-[0.99]
      cursor-pointer
      disabled:cursor-not-allowed
      disabled:opacity-50
    "
      >
        {pending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
