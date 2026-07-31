import { promises as fs } from "node:fs";
import path from "node:path";

const filePath = path.join(process.cwd(), "data", "messages.json");

export interface ContactRecord {
  name: string;
  email: string;
  message: string;
  receivedAt: string;
}

export async function appendMessage(record: ContactRecord) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });

  let existing: ContactRecord[] = [];
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    existing = JSON.parse(raw) as ContactRecord[];
  } catch {
    existing = [];
  }

  existing.push(record);
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf-8");
}
