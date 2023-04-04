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
    <>
      <h2 className="text-left text-xl font-semibold text-slate-500 pb-4">
        {subject}
      </h2>
      <ul>
        {tableData.map(({ head, content, period }) => (
          <li
            key={head}
            className="flex flex-col lg:flex-row lg:items-center justify-center lg:justify-start pt-4 pb-5 lg:py-0 lg:h-16 border-t gap-0 lg:gap-4 px-4"
          >
            <h3 className="font-bold text-lg text-black/80">{head}</h3>
            <section className="text-black/50 text-sm flex items-center flex-wrap">
              {content}
              <div className="inline-block border-l h-3 mx-2 " />
              {period}
            </section>
          </li>
        ))}
      </ul>
    </>
  );
}
