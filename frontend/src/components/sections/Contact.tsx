import type { Ref } from "react";

import { Section } from "@/components/layout";
import { Button } from "@/components/ui";
import { site } from "@/data/site";
import { useContactForm } from "@/hooks/useContactForm";

type ContactProps = {
  sectionRef: Ref<HTMLElement>;
};

export function Contact({ sectionRef }: ContactProps) {
  const {
    formData,
    errors,
    submitted,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <Section sectionRef={sectionRef} id="contact">
      <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="display m-0 text-[2.15rem] text-[var(--color-text)] sm:text-5xl">
            Tell me what you want to build.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-[var(--color-muted)]">
            Freelance work, collaborations, and product conversations. I read
            every message.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-block text-sm text-[var(--color-text)] underline decoration-[var(--color-border)] underline-offset-4 transition-colors hover:text-[var(--color-accent)]"
          >
            {site.email}
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="text-xs text-[var(--color-muted)]">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                className="field"
              />
              {errors.name ? (
                <p id="contact-name-error" className="mt-2 text-sm text-red-600">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="contact-email" className="text-xs text-[var(--color-muted)]">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? "contact-email-error" : undefined
                }
                className="field"
              />
              {errors.email ? (
                <p id="contact-email-error" className="mt-2 text-sm text-red-600">
                  {errors.email}
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="contact-message" className="text-xs text-[var(--color-muted)]">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message ? "contact-message-error" : undefined
              }
              className="field resize-y"
            />
            {errors.message ? (
              <p id="contact-message-error" className="mt-2 text-sm text-red-600">
                {errors.message}
              </p>
            ) : null}
          </div>

          <Button
            type="submit"
            className="mt-6 w-full sm:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </Button>

          {submitted ? (
            <p
              className="mt-4 text-sm leading-6 text-[var(--color-text)]"
              role="status"
            >
              Your message was sent successfully. I’ll get back to you soon.
            </p>
          ) : null}

          {errors.submit ? (
            <p
              className="mt-4 text-sm leading-6 text-red-600"
              role="alert"
            >
              {errors.submit}
            </p>
          ) : null}
        </form>
      </div>
    </Section>
  );
}
