import { promises as fs } from "node:fs";
import path from "node:path";

const filePath = path.join(process.cwd(), "data", "reservations.json");

export interface ReservationRecord {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
  receivedAt: string;
}

export async function appendReservation(record: ReservationRecord) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });

  let existing: ReservationRecord[] = [];
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    existing = JSON.parse(raw) as ReservationRecord[];
  } catch {
    existing = [];
  }

  existing.push(record);
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf-8");
}
