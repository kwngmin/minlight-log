type TitleData = {
  title: string;
  description: string;
};
export default function Title({ titleData }: { titleData: TitleData }) {
  const { title, description } = titleData;
  return (
    <div className="pt-14 pb-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
      <p className="text-black/50 break-keep">{description}</p>
    </div>
  );
}
