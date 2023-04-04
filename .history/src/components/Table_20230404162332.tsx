type Props = {
  tableData: {
    head: string;
    content: string;
    period: string;
  }[];
  subject: string;
};

export default function Table({ tableData, subject }: Props) {
  return (
    <article className="my-4 lg:my-6">
      <h2 className="text-left text-xl font-semibold text-slate-500 pb-4">
        {subject}
      </h2>
      <ul>
        {tableData.map(({ head, content, period }) => (
          <li
            key={head}
            className="flex flex-col justify-center lg:justify-start lg:flex-row h-20 lg:h-16 border-t gap-0 lg:gap-4 px-4 lg:px-8 mb-4"
          >
            <h3 className="font-bold text-lg text-black/80">{head}</h3>
            <section className="text-black/60 text-center lg:text-left flex items-center text-sm">
              {content}
              <span className="border-l text-xs mx-2 border-slate-400 shrink-0 " />
              {period}
            </section>
          </li>
        ))}
      </ul>
    </article>
  );
}
