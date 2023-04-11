import { readFile } from 'fs/promises'
import path from 'path'

export type diary = {
    title: string
    date: Date
    content:string
}
export async function getDiaryData(): Promise(Diary[]) {
    const filePath = path.join(process.cwd(), 'data', 'diary.json')
    return readFile(filePath, "utf-8")
    .then<diary[]>(JSON.parse)
    .then((diaries) => diaries.sort((a,b)=> (a.data > b.date ? -1: 1)))
    
}