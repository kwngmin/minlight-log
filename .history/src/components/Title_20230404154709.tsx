type Props = {
  subject: string;
  description: string;
};
export default function Title({ subject, description }: Props) {
  return (
    <div className="py-14">
      <h1 className="text-3xl font-bold mb-4">{`Hi, I'm Minlight`}</h1>
      <p className="text-black/70 break-keep">
        프론트엔드 개발자로 전향한 UX/UI 디자이너 입니다. 스타트업에서 근무한
        경험이 있고 서비스되고 있는 2개의 플랫폼을 기획부터 디자인한 경험이
        있습니다.
      </p>
    </div>
  );
}
