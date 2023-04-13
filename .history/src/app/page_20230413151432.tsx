import TableGroup from "@/components/TableGroup";
import Title from "@/components/Title";

const titleData = {
  title: `안녕하세요, 반갑습니다.`,
  description: `시안에 머무르지 않고 실제로 구현하기위해 프론트엔드 개발자로 전향한 전직 UX/UI 디자이너입니다. 스타트업에서 근무한
경험이 있고 2개의 플랫폼을 기획하고 디자인한 경험이 있습니다.`,
};

export default function Home() {
  return (
    <section>
      <Title titleData={titleData} />
      <TableGroup />
    </section>
  );
}
