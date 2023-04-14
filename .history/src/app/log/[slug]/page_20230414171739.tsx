import Title from "@/components/Title";
import { getDiaryData } from "@/service/log";

type Props = {
  params: { slug: String };
};
export default async function ThingsPage({ params: { slug } }: Props) {
  const diaries = await getDiaryData();
  //   const slugData = new Date(slug.replace("%", " ").split(" ")[0]);
  console.log(slug);
  const diaryData = diaries.find((diary) => diary.date.toString() === slug);
  //   console.log(diaryData);
  //   const { title, date, content } = diaryData;
  const titleData = { title: "sdsds", description: "sdfsdf" };

  return (
    <>
      <Title titleData={titleData} />
      <p className="text-black/80 mt-2 break-keep">asjdhkjasdkjasdh</p>
    </>
  );
}
