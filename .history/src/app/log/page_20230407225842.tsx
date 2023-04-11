import Diary from "@/components/Diary";
import Title from "@/components/Title";
import { getDiaryData } from "@/service/log";

const titleData = {
  title: `Thoughts`,
  description: `Records of Thoughts, Feelings and Lessons that are Too Short to be an Article.  `,
};

export default function LogPage() {
  const diaries = await getDiaryData();

  return (
    <>
      <Title titleData={titleData} />
      <Diary />
    </>
  );
}
