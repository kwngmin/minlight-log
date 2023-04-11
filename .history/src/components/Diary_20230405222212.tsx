import { getDiaryData } from "@/service/log";
import { link } from "fs";

export default async function Diary() {
  const diaries = getDiaryData();
  return (
    <ul>
      {diaries.map(({ title, content, date }) => (
        <li key={date.toString()}>
          <h2>{title}</h2>
          <time>{date.toString()}</time>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
}
