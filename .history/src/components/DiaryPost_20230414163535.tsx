import { getDate } from "@/service/log";
import Link from "next/link";
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
      <Link>
        <h2 className="text-2xl font-semibold text-black/80">{title}</h2>
      </Link>
      <time className="text-black/60 text-sm">
        {dateData} ({format(date.toString(), "ko")})
      </time>
      <div className="text-black/80 mt-2 break-keep">
        {content?.split("\n").map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
      {/* <p className="text-black/80 mt-4 break-keep">{content}</p> */}
    </>
  );
}
