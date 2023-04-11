type TitleData = {
  title: string;
  description: string;
};
export default function Title({ titleData }: { titleData: TitleData }) {
  const { title, description } = titleData;
  return (
    <div className="py-14">
      <h1 className="text-3xl md:text-4xl font-bold mb-3 text-center text-ellipsis">
        {title}
      </h1>
      <p className="text-black/50 break-keep">{description}</p>
    </div>
  );
}
