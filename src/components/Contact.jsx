import { useState } from "react";
import { Mail, MapPin } from "lucide-react";

function SocialIcon({ name }) {
  if (name === "X") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-5-7.5L5.4 22H2.2l7.3-8.4L1.8 2h6.5l4.5 6.9L18.9 2Zm-1.1 17.9h1.7L7.3 4H5.5l12.3 15.9Z"
        />
      </svg>
    );
  }

  if (name === "GitHub") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.5 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.1 1.2a10.6 10.6 0 0 1 5.7 0C16.9 4.2 18 4.5 18 4.5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3 0 4.2-2.7 5.2-5.3 5.5.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z"
        />
      </svg>
    );
  }

  if (name === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.4 2H3.6C2.7 2 2 2.7 2 3.6v16.8c0 .9.7 1.6 1.6 1.6h16.8c.9 0 1.6-.7 1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6ZM7.9 18.7H4.8V9h3.1v9.7ZM6.4 7.7a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Zm12.3 11h-3.1V14c0-1.1 0-2.5-1.6-2.5s-1.8 1.2-1.8 2.4v4.8H9.1V9h3v1.3c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.6v5.4Z"
        />
      </svg>
    );
  }

  return <Mail size={19} aria-hidden="true" />;
}

function Contact({ sectionRef }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    { name: "X", url: "https://x.com/code0e" },
    { name: "LinkedIn", url: "" },
    { name: "GitHub", url: "https://github.com/code0e" },
    { name: "Email", url: "mailto:codee025@gmail.com" },
  ];

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));

    setSubmitted(false);
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe your project.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitted(false);

    try {
      const response = await fetch(
        "https://logic-dev-backend.onrender.com/api/contact/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        const errorMessage =
          data.detail ||
          Object.values(data).flat().join(" ") ||
          "Something went wrong. Please try again.";

        throw new Error(errorMessage);
      }

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      console.error("Contact form error:", error);

      setErrors((previousErrors) => ({
        ...previousErrors,
        submit:
          error.message || "Unable to send your message. Please try again.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClasses =
    "mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3.5 text-sm text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/10";

  return (
    <section
      ref={sectionRef}
      className="bg-[var(--color-bg)] px-5 py-20 text-[var(--color-text)] sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto w-full max-w-none">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-[var(--color-muted)] sm:text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
            CONTACT ME
          </p>

          <h2 className="text-4xl font-black leading-tight tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
            Let's build something special
            <span className="text-[var(--color-accent)]">.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
            I'm open to discussing freelance projects, collaborations, and
            opportunities to build useful digital experiences. Tell me what you
            have in mind, and let's talk.
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Contact details */}
          <div className="flex flex-col">
            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-surface)] text-[var(--color-accent)]">
                  <MapPin size={20} aria-hidden="true" />
                </div>

                <div>
                  <p className="text-xs font-bold tracking-widest text-[var(--color-muted)]">
                    BASE LOCATION
                  </p>
                  <p className="mt-2 font-semibold text-[var(--color-text)]">
                    Awka, Anambra, Nigeria
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    Remote / Hybrid
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-surface)] text-[var(--color-accent)]">
                  <Mail size={20} aria-hidden="true" />
                </div>

                <div>
                  <p className="text-xs font-bold tracking-widest text-[var(--color-muted)]">
                    DIRECT EMAIL
                  </p>
                  <a
                    href="mailto:codee025@gmail.com"
                    className="mt-2 inline-block font-semibold text-[var(--color-text)] transition hover:text-[var(--color-accent)]"
                  >
                    codee025@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-9 border-t border-[var(--color-border)] pt-7">
              <p className="mb-4 text-xs font-bold tracking-widest text-[var(--color-muted)]">
                FIND ME ONLINE
              </p>

              <div className="flex flex-wrap gap-3" aria-label="Social links">
                {socialLinks.map(({ name, url }) =>
                  url ? (
                    <a
                      key={name}
                      href={url}
                      aria-label={name}
                      title={name}
                      target={name === "Email" ? undefined : "_blank"}
                      rel={name === "Email" ? undefined : "noreferrer"}
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-accent)]"
                    >
                      <SocialIcon name={name} />
                    </a>
                  ) : null,
                )}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-xl shadow-black/[0.03] sm:p-8 lg:p-10">
            <div className="mb-7">
              <h3 className="text-2xl font-bold tracking-tight text-[var(--color-text)]">
                Tell me about your project.
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                Fill in the details below to get the conversation started.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-bold tracking-wider text-[var(--color-text)]"
                  >
                    YOUR NAME
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="logic code"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name ? "contact-name-error" : undefined
                    }
                    className={`${inputClasses} ${
                      errors.name ? "border-red-500" : ""
                    }`}
                  />

                  {errors.name && (
                    <p
                      className="mt-2 text-sm text-red-600"
                      id="contact-name-error"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-bold tracking-wider text-[var(--color-text)]"
                  >
                    EMAIL ADDRESS
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="code@example.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? "contact-email-error" : undefined
                    }
                    className={`${inputClasses} ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />

                  {errors.email && (
                    <p
                      className="mt-2 text-sm text-red-600"
                      id="contact-email-error"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-bold tracking-wider text-[var(--color-text)]"
                >
                  MESSAGE DESCRIPTION
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project, goals, and timeline..."
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "contact-message-error" : undefined
                  }
                  className={`${inputClasses} resize-y ${
                    errors.message ? "border-red-500" : ""
                  }`}
                />

                {errors.message && (
                  <p
                    className="mt-2 text-sm text-red-600"
                    id="contact-message-error"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-bold text-[var(--color-accent-foreground)] transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Proposal"}
                {!isSubmitting && <span>↗</span>}
              </button>

              {submitted && (
                <p
                  className="mt-4 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm leading-6 text-[var(--color-text)]"
                  role="status"
                >
                  Your message was sent successfully! I'll get back to you soon.
                </p>
              )}

              {errors.submit && (
                <p
                  className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm leading-6 text-red-600"
                  role="alert"
                >
                  {errors.submit}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
