import { getDate } from "@/service/log";
import { format, register } from "timeago.js";
import ko from "timeago.js/lib/lang/ko";

type Props = {
  diary: { title: string; content: string; date: Date };
};

export default function DiaryPost({ diary }: Props) {
  const { title, content, date } = diary;
  const dateData = getDate(date);
  register("ko", ko);
  return (
    <>
      <h2 className="text-2xl font-semibold text-black/80 mb-1">{title}</h2>
      <time className="text-black/50">
        {dateData} ({format(date.toString(), "ko")})
      </time>
      <div>
        {content.split('\n').map(line => return ( <p>{line}</p>))}
      </div>
      <p className="text-black/80 mt-4 break-keep">{content}</p>
    </>
  );
}
