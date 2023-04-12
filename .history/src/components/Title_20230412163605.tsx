type TitleData = {
  title: string;
  description: string;
};
export default function Title({ titleData }: { titleData: TitleData }) {
  const { title, description } = titleData;
  return (
    <div className="py-14 px-4 lg:px-6 bg-zinc-50 border rounded-2xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
      <p className="text-black/50 break-keep">{description}</p>
    </div>
  );
}
