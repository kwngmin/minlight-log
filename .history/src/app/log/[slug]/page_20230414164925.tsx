import Title from "@/components/Title";
import { getDiaryData } from "@/service/log";

type Props = {
  params: { slug: string };
};
export default function ThingsPage({ params: { slug } }: Props) {
  const diaries = await getDiaryData();
  const diaryData = diaries.filter((diary) => diary.date.toString() === slug);
  const titleData = { title: "ddddd", description: "dddd" };

  return (
    <>
      <Title titleData={titleData} />
      <p className="text-black/80 mt-2 break-keep">asjdhkjasdkjasdh</p>
    </>
  );
}
