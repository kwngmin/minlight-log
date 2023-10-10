import Table from '@/components/Table';

const careerData = [
  {
    head: 'ITLog',
    content: 'Frontend Developer & UX/UI Designer',
    period: '2023.06 - Now',
  },
  {
    head: 'Kinterch',
    content: 'UX/UI Designer',
    period: '2018.04 - 2022.03',
  },
  {
    head: 'FiftyBridge',
    content: 'UX/UI Designer',
    period: '2017.08 - 2018.04',
  },
];

const educateData = [
  {
    head: 'CodeStates',
    content: 'Software Engineering Bootcamp · Frontend',
    period: '2022.06 - 2022.12',
  },
  {
    head: 'IDAS, Hongik Univeristy',
    content: 'Digital Media Design Major · Master of Design',
    period: '2013.03 - 2015.02',
  },
  {
    head: 'Kangnam University',
    content: 'Visual Design Major · Bachelor of Fine Arts',
    period: '2005.03 - 2012.02',
  },
];

export default function TableGroup() {
  return (
    <section className='flex flex-col gap-10'>
      <Table tableData={careerData} subject='Work Experience' />
      <Table tableData={educateData} subject='Educations' />
    </section>
  );
}
