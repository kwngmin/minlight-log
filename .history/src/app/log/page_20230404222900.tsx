import Title from "@/components/Title";

const titleData = {
  title: `Record thoughts`,
  description: `Records of Thoughts, Feelings and Lessons that are Too Short to be an Article.

  `,
};

export default function LogPage() {
  return (
    <>
      <Title titleData={titleData} />
    </>
  );
}
