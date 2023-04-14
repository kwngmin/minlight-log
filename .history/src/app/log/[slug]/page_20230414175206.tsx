import Title from "@/components/Title";
import { getDate, getDiaryData } from "@/service/log";
import Link from "next/link";
import { format, register } from "timeago.js";
import ko from "timeago.js/lib/lang/ko";

type Props = {
  params: { slug: String };
};
export default async function ThingsPage({ params: { slug } }: Props) {
  const diaries = await getDiaryData();
  const diaryData = await diaries.find(
    (diary) => diary.date.toString() === slug
  );
  const { title, date, content }: any = await diaryData;
  const dateData = getDate(date);
  register("ko", ko);
  const titleData = {
    title,
    description: `${dateData} (${format(date.toString(), "ko")})`,
  };

  return (
    <>
      <Title titleData={titleData} />
      <p className="text-black/80 break-keep">{content}</p>
      <Link href={`/log`}>
        <button className="text-slate-400 my-8 font-medium">#Things</button>
      </Link>
    </>
  );
}
