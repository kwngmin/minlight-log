type TitleData = {
  title: string;
  description: string;
};
export default function Title({ titleData }: { titleData: TitleData }) {
  const { title, description } = titleData;
  return (
    <div className="py-14">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-black/60 break-keep">{description}</p>
    </div>
  );
}
