import Title from "@/components/Title";
import { getDiaryData } from "@/service/log";

type Props = {
  params: { slug: Date };
};
export default async function ThingsPage({ params: { slug } }: Props) {
  const diaries = await getDiaryData();
  console.log(slug);
  //   const diaryData = diaries.find((diary) => console.log(diary.date.toString()));
  //   const { title, date, content } = diaryData;
  const titleData = { title: "sdsds", description: "sdfsdf" };

  return (
    <>
      <Title titleData={titleData} />
      <p className="text-black/80 mt-2 break-keep">asjdhkjasdkjasdh</p>
    </>
  );
}
