import { getDiaryData } from "@/service/log";
import { link } from "fs";

export default async function Diary() {
  const diaries = await getDiaryData();
  return (
    <ul>
      {diaries.map(({ title, content, date }) => (
        <li>
          <h2>{title}</h2>
        </li>
      ))}
    </ul>
  );
}
