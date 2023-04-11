import { getDate } from "@/service/log";

type Props = {
  diary: { title: string; content: string; date: Date };
};

export default async function DiaryPost({ diary }: Props) {
  const dateData = await getDate(date);
  return <p>hi</p>;
}
