import { CONTACT_API_URL } from "@/lib/constants";
import type { ContactApiSuccess, ContactFormFields } from "@/types/contact";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function parseContactError(data: unknown): string {
  if (!isRecord(data)) {
    return "Something went wrong. Please try again.";
  }

  if (typeof data.detail === "string" && data.detail.trim()) {
    return data.detail;
  }

  const fieldMessages = Object.values(data).flatMap((value) => {
    if (typeof value === "string") {
      return [value];
    }

    if (Array.isArray(value)) {
      return value.filter((item): item is string => typeof item === "string");
    }

    return [];
  });

  if (fieldMessages.length > 0) {
    return fieldMessages.join(" ");
  }

  return "Something went wrong. Please try again.";
}

async function readResponseBody(response: Response): Promise<unknown> {
  const text = await response.text();

  if (!text) {
    return {};
  }

  try {
    return JSON.parse(text) as unknown;
  } catch {
    return {};
  }
}

export async function submitContactMessage(
  payload: ContactFormFields,
): Promise<ContactApiSuccess> {
  let response: Response;

  try {
    response = await fetch(CONTACT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: payload.name.trim(),
        email: payload.email.trim(),
        message: payload.message.trim(),
      }),
    });
  } catch {
    throw new Error("Unable to send your message. Please try again.");
  }

  const data = await readResponseBody(response);

  if (!response.ok) {
    throw new Error(parseContactError(data));
  }

  return data as ContactApiSuccess;
}
