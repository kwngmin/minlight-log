import { getDiaryData } from "@/service/log";
import { link } from "fs";

export default async function Diary() {
  const diaries = await getDiaryData();
  return (
    <ul>
      {diaries.map(({ title, content, date }) => (
        <li key={date.toString()} className="py-10 border-b last:border-0">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <time>{date.toString()}</time>
          <p>{JSON.stringify(content)}</p>
        </li>
      ))}
    </ul>
  );
}
