import { Diary, getDate } from "@/service/log";
import DiaryPost from "./DiaryPost";

type Props = {
  diaries: Diary[];
};

export default function ShortDiary({ diaries }: Props) {
  return (
    <ul>
      {diaries.map((diaryData) => (
        <li
          key={diaryData.date.toString()}
          className="py-8 border-b last:border-0"
        >
          <DiaryPost diary={diaryData} />
        </li>
      ))}
    </ul>
  );
}
