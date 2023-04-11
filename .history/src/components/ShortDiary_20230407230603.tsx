type Props = {
  title: string;
  content: string;
  date: Date;
};

export default function ShortDiary({ diaries }: Props) {
  return <ul>
    {diaries.map({title, content, date} => (<li>title</li>))}
  </ul>
}
