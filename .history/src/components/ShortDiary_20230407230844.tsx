import { Diary } from "@/service/log";

type Props = {
  diaries: Diary[];
};

export default function ShortDiary({ diaries }: Props) {
  return (
    <ul>
      {diaries.map(({ title, content, date }) => (
        <li>{title}</li>
      ))}
    </ul>
  );
}
