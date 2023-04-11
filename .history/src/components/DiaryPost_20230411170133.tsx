import { getDate } from "@/service/log";

type Props = {
  diary: { title: string; content: string; date: Date };
};

export default function DiaryPost({ diary }: Props) {
  const { title, content, date } = diary;
  const dateData = getDate(date);
  return (
    <>
      <h2 className="text-2xl font-semibold text-black/70">{title}</h2>
      <time className="text-black/60">{dateData}</time>
      <p>{content}</p>
    </>
  );
}
