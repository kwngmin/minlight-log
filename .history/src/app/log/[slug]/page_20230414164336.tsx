type Props = {
    params: {slug:string}
} 
export default function ThingsPage({params:{slug}}: Props) {
    const diaries = await getDiaryData();

    return (
    
    );
}

