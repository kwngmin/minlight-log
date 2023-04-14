import ShortDiary from "@/components/ShortDiary";
import Title from "@/components/Title";
import { getDiaryData } from "@/service/log";

export const metadata = {
  title: {
    default: "Logs",
    template: "Kwngmin's Logs",
  },
};

const titleData = {
  title: `Things`,
  description: `Record of thought, moments, feelings that I don't want to forget.`,
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
