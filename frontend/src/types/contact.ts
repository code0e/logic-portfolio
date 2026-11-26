export type ContactFormFields = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormErrors = Partial<
  Record<keyof ContactFormFields | "submit", string>
>;

export type ContactApiSuccess = {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
};
