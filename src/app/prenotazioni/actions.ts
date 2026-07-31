"use server";

import { reservationSchema } from "@/lib/reservation-schema";
import { appendReservation } from "@/lib/reservations-store";

export type ReservationResult =
  | { success: true }
  | { success: false; error: string };

export async function submitReservation(
  input: unknown
): Promise<ReservationResult> {
  const parsed = reservationSchema.safeParse(input);

  if (!parsed.success) {
    return {
      success: false,
      error: "Controlla i dati inseriti e riprova.",
    };
  }

  try {
    await appendReservation({
      ...parsed.data,
      notes: parsed.data.notes ?? "",
      receivedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Impossibile salvare la prenotazione:", error);
    return {
      success: false,
      error: "Si è verificato un errore. Riprova o chiamaci direttamente.",
    };
  }

  return { success: true };
}
