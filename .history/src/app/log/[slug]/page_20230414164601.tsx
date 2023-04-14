import Title from "@/components/Title";
import { getDiaryData } from "@/service/log";

type Props = {
  params: { slug: string };
};
export default function ThingsPage({ params: { slug } }: Props) {
  const diaries = await getDiaryData();
  const titleData = { title: "", description: "" };

  return (
    <>
      <Title titleData={titleData} />
    </>
  );
}
