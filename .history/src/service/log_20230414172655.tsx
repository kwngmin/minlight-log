import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

export type Diary = {
  title: string;
  date: Date;
  content: string;
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

export function getDate(date: Date) {
  const dateData = date.toString().split("-");
  const year = dateData[0];
  const month = dateData[1].replace("0", "");
  const day = dateData[2].split(" ")[0].replace("0", "");
  const dateString = `${year}년 ${month}월 ${day}일`;
  return dateString;
}
