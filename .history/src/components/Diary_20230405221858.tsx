import { getDiaryData } from "@/service/log";
import { link } from "fs";

export default async function Diary() {
  const diaries = await getDiaryData();
  return (
    <ul>
      {diaries.map((diary) => (
        <li></li>
      ))}
    </ul>
  );
}
