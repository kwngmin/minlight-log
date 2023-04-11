import { readFile } from "fs/promises";
import path from "path";

export type Diary = {
  title: string;
  date: Date;
  content: string;
};
export async function getDiaryData(): Promise<Diary[]> {
  const filePath = path.join(process.cwd(), "data", "diary.json");
  return readFile(filePath, "utf-8")
    .then<Diary[]>(JSON.parse)
    .then((diaries) => diaries.sort((a, b) => (a.date > b.date ? -1 : 1)));
}
