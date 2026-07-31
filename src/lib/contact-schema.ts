import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Inserisci il tuo nome").max(80),
  email: z.string().trim().email("Inserisci un'email valida"),
  message: z
    .string()
    .trim()
    .min(10, "Il messaggio deve contenere almeno 10 caratteri")
    .max(1000),
});

export type ContactInput = z.infer<typeof contactSchema>;
