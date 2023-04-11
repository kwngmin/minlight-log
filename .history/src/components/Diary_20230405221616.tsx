import { getDiaryData } from "@/service/log";

export default function Diary() {
  const diaries = await getDiaryData();
  return <>냠냠</>;
}
