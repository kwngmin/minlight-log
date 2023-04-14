import Title from "@/components/Title";
import { Diary, getDiaryData } from "@/service/log";
import Link from "next/link";

type Props = {
  params: { slug: String };
};
export default async function ThingsPage({ params: { slug } }: Props) {
  const diaries = await getDiaryData();
  const diaryData = await diaries.find(
    (diary) => diary.date.toString() === slug
  );
  console.log(diaryData);
  const { title, date, content }: any = await diaryData;
  const titleData = { title, description: date };

  return (
    <>
      <Title titleData={titleData} />
      <p className="text-black/80 break-keep">{content}</p>
      <Link href={`/log`}>
        <button className="text-slate-400 my-8">#Things</button>
      </Link>
    </>
  );
}
