type TitleData = {
  title: string;
  description: string;
};
export default function Title({ title, description }: TitleData) {
  return (
    <div className="py-14">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-black/70 break-keep">{description}</p>
    </div>
  );
}
