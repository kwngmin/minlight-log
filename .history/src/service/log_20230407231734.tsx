import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

export type Diary = {
  title: string;
  date: Date;
  content: string;
};
type DateType = {
  date: Date;
};
export const getDiaryData = cache(async () => {
  const filePath = path.join(process.cwd(), "data", "thoughts.json");
  return readFile(filePath, "utf-8")
    .then<Diary[]>(JSON.parse)
    .then((diaries) => diaries.sort((a, b) => (a.date > b.date ? -1 : 1)));
});
// export async function getDiaryData(): Promise<Diary[]> {
//   const filePath = path.join(process.cwd(), "data", "thoughts.json");
//   return readFile(filePath, "utf-8")
//     .then<Diary[]>(JSON.parse)
//     .then((diaries) => diaries.sort((a, b) => (a.date > b.date ? -1 : 1)));
// }

export function getDate({ date }: DateType) {
  const dateData = date.toString().split("-");
  const dateString = `${dateData[0]}년 ${dateData[1].replace(
    "0",
    ""
  )}월 ${dateData[2].replace("0", "")}일`;
  return dateString;
}
