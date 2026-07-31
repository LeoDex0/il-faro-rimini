import { z } from "zod";

export const reservationSchema = z.object({
  name: z.string().trim().min(2, "Inserisci il tuo nome completo").max(80),
  email: z.string().trim().email("Inserisci un'email valida"),
  phone: z.string().trim().min(6, "Inserisci un numero di telefono valido").max(20),
  date: z.string().min(1, "Seleziona una data"),
  time: z.string().min(1, "Seleziona un orario"),
  guests: z.string().min(1, "Seleziona il numero di ospiti"),
  notes: z.string().max(500).optional().or(z.literal("")),
});

export type ReservationInput = z.infer<typeof reservationSchema>;

export const TIME_SLOTS = [
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
] as const;

export const GUEST_OPTIONS = ["1", "2", "3", "4", "5", "6", "7+"] as const;
