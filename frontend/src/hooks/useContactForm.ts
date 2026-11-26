import { useState, type ChangeEvent, type FormEvent } from "react";

import { submitContactMessage } from "@/lib/contact-api";
import type { ContactFormErrors, ContactFormFields } from "@/types/contact";

const emptyForm: ContactFormFields = {
  name: "",
  email: "",
  message: "",
};

function validateForm(formData: ContactFormFields): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!formData.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!formData.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!formData.message.trim()) {
    errors.message = "Please describe your project.";
  } else if (formData.message.trim().length > 5000) {
    errors.message = "Please shorten your message.";
  }

  return errors;
}

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormFields>(emptyForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    const field = name as keyof ContactFormFields;

    setFormData((previousData) => ({
      ...previousData,
      [field]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [field]: "",
      submit: undefined,
    }));

    setSubmitted(false);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateForm(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmitted(false);

    try {
      await submitContactMessage(formData);
      setSubmitted(true);
      setFormData(emptyForm);
      setErrors({});
    } catch (error) {
      console.error("Contact form error:", error);

      setErrors((previousErrors) => ({
        ...previousErrors,
        submit:
          error instanceof Error
            ? error.message
            : "Unable to send your message. Please try again.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    formData,
    errors,
    submitted,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
}
