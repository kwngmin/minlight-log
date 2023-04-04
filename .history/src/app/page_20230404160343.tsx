import Title from "@/components/Title";

const titleData = {
  title: `Hi, I'm Minlight`,
  description: `프론트엔드 개발자로 전향한 UX/UI 디자이너입니다. 스타트업에서 근무한
경험이 있고 서비스되고 있는 2개의 플랫폼을 기획하고 디자인한 경험이 있습니다.`,
};
export default function AboutPage() {
  const careerData = [
    {
      head: "Kinterch",
      content: "UX/UI Designer",
      period: "2018.04 - 2022.03",
    },
    {
      head: "FiftyBridge",
      content: "UX/UI Designer",
      period: "2017.08 - 2018.04",
    },
  ];
}

const educateData = [
  {
    head: "CodeStates",
    content: "Software Engineering Bootcamp · Frontend",
    period: "2022.06 - 2022.12",
  },
  {
    head: "IDAS, Hongik Univeristy",
    content: "Digital Media Design Major · Master of Design",
    period: "2013.03 - 2015.02",
  },
  {
    head: "Kangnam University",
    content: "Visual Design Major · Bachelor of Fine Arts",
    period: "2005.03 - 2012.02",
  },
];

export default function Home() {
  return (
    <section>
      <Title titleData={titleData} />
    </section>
  );
}
