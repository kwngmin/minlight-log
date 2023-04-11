import { getDiaryData } from "@/service/log";

export default async function Diary() {
  const diaries = await getDiaryData();
  return <>{diaries.map(diary => )}</>;
}
