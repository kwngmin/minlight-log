type Props = {
  subject: string;
  description: string;
};
export default function Title({ subject, description }: Props) {
  return (
    <div className="py-14">
      <h1 className="text-3xl font-bold mb-4">{`Hi, I'm Minlight`}</h1>
      <p className="text-black/70 break-keep">{description}</p>
    </div>
  );
}
