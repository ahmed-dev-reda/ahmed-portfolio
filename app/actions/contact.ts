"use server";

export type ContactState = {
  success: boolean;
  message: string | null;
};

const W3FORMS_URL = "https://api.web3forms.com/submit";

export async function sendContactMessage(
  prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return {
      success: false,
      message:
        "Contact form is not configured: add WEB3FORMS_ACCESS_KEY to .env (get one free at web3forms.com).",
    };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Name, email and message are required.",
    };
  }

  try {
    const res = await fetch(W3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        subject: subject || "New message from the portfolio",
        message: `${message}\n\n— Sent from the portfolio contact form by ${name} (${email})`,
        from_name: "Portfolio — Contact Form",
        replyto: email,
      }),
    });

    const json = (await res.json()) as { success: boolean; message?: string };

    if (json.success) {
      return { success: true, message: null };
    }

    return {
      success: false,
      message: json.message ?? "Sending failed, try again later.",
    };
  } catch {
    return {
      success: false,
      message: "Unexpected error, try again later.",
    };
  }
}
