import { getDate } from "@/service/log";

type Props = {
  diary: { title: string; content: string; date: Date };
};

export default function DiaryPost({ diary }: Props) {
  const { title, content, date } = diary;
  const dateData = getDate(date);
  return (
    <>
      <h2>{title}</h2>
      <span>{dateData}</span>
      <p>{content}</p>
    </>
  );
}
