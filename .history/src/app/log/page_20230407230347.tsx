import ShortDiary from "@/components/ShortDiary";
import Title from "@/components/Title";
import { getDiaryData } from "@/service/log";

const titleData = {
  title: `Thoughts`,
  description: `Records of Thoughts, Feelings and Lessons that are Too Short to be an Article.  `,
};

export default async function LogPage() {
  const diaries = await getDiaryData();
  console.log(diaries);
  return (
    <>
      <Title titleData={titleData} />
      <ShortDiary />
    </>
  );
}
