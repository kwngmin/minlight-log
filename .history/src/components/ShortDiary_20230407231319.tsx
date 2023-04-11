import { Diary, getDate } from "@/service/log";

type Props = {
  diaries: Diary[];
};

export default function ShortDiary({ diaries }: Props) {
  return (
    <ul>
      {diaries.map(({ title, content, date }) => (
        <li key={date.toString()} className="py-8 border-b last:border-0">
          <h2 className="text-2xl font-medium">{title}</h2>
          <time className="text-sm text-black/60">
            {getDate(date.toString())}
          </time>
          <p>{JSON.stringify(content)}</p>
        </li>
      ))}
    </ul>
  );
}
