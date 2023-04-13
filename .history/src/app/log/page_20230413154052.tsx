import ShortDiary from "@/components/ShortDiary";
import Title from "@/components/Title";
import { getDiaryData } from "@/service/log";

const titleData = {
  title: `Thoughts`,
  description: `Record of thought or moments that I don't want to forget as developer.`,
};

export default async function LogPage() {
  const diaries = await getDiaryData();
  return (
    <>
      <Title titleData={titleData} />
      <ShortDiary diaries={diaries} />
    </>
  );
}
