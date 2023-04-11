import { Diary, getDate } from "@/service/log";
import Diary from "./Diary";
import Diary from "./Diary";

type Props = {
  diaries: Diary[];
};

export default function ShortDiary({ diaries }: Props) {
  return (
    <ul>
      {diaries.map((diary) => (
        <li key={date.toString()} className="py-8 border-b last:border-0">
          <Diary diary={diary} />
        </li>
      ))}
    </ul>
  );
}
