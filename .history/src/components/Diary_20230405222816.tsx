import { getDiaryData } from "@/service/log";
import { link } from "fs";

export default async function Diary() {
  const diaries = await getDiaryData();
  return (
    <ul>
      {diaries.map(({ title, content, date }) => (
        <li key={date.toString()} className="py-6">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <time>{JSON.stringify(JSON.parse({content})}</time>
          <p>{`${content}`}</p>
        </li>
      ))}
    </ul>
  );
}
