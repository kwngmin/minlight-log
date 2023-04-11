import { getDate } from "@/service/log";

type Props = { title: string; content: string; date: Date };

export default async function DiaryPost({ title, content, date }: Props) {
  const dateData = await getDate(date);
  return <p>hi</p>;
}
