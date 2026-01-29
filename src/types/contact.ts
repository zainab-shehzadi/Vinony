export type ContactInfo = {
  phone: string;
  email: string;
  address: string;
};

export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
};