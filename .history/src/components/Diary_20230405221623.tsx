import { getDiaryData } from "@/service/log";

export default async function Diary() {
  const diaries = await getDiaryData();
  return <>냠냠</>;
}
