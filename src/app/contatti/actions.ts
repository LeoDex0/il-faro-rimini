"use server";

import { contactSchema } from "@/lib/contact-schema";
import { appendMessage } from "@/lib/contact-store";

export type ContactResult = { success: true } | { success: false; error: string };

export async function submitContactMessage(
  input: unknown
): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(input);

  if (!parsed.success) {
    return { success: false, error: "Controlla i dati inseriti e riprova." };
  }

  try {
    await appendMessage({
      ...parsed.data,
      receivedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Impossibile salvare il messaggio:", error);
    return {
      success: false,
      error: "Si è verificato un errore. Riprova o scrivici direttamente via email.",
    };
  }

  return { success: true };
}
