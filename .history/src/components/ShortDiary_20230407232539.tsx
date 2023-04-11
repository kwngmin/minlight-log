import { Diary, getDate } from "@/service/log";
import DiaryPost from "./Diary";

type Props = {
  diaries: Diary[];
};

export default function ShortDiary({ diaries }: Props) {
  return (
    <ul>
      {diaries.map((diary) => (
        <li key={diary.date.toString()} className="py-8 border-b last:border-0">
          <DiaryPost diary={diary} />
        </li>
      ))}
    </ul>
  );
}
