import { getDate } from "@/service/log";

type Props = {
  diary: { title: string; content: string; date: Date };
};

export default function DiaryPost({ diary }: Props) {
  const { title, content, date } = diary;
  const dateData = getDate(date);
  return <p>hi {dateData}</p>;
}
