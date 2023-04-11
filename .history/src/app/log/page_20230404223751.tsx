import Title from "@/components/Title";

const titleData = {
  title: `일상적인 기록`,
  description: `Records of Thoughts, Feelings and Lessons that are Too Short to be an Article.  `,
};

export default function LogPage() {
  return (
    <>
      <Title titleData={titleData} />
    </>
  );
}
