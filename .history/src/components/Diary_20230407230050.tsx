type Props = {};

export default async function Diary({ diaries }: Props) {
  return (
    <ul>
      {diaries.map(({ title, content, date }) => (
        <li key={date.toString()} className="py-8 border-b last:border-0">
          <h2 className="text-2xl font-medium">{title}</h2>
          <time className="text-sm text-black/60">{date.toString()}</time>
          <p>{JSON.stringify(content)}</p>
        </li>
      ))}
    </ul>
  );
}
