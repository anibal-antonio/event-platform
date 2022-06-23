import { gql, useQuery } from "@apollo/client";
import { lessonQueryResponse } from "../interfaces/ILesson";
import Lesson from "./Lesson";




const GET_LESSONS_QUERY = gql `
    query queryLessons {
        lessons(orderBy: availableAt_ASC) {
            title
            slug
            id
            availableAt
            lessonType
        }
    }
`;

export default function Sidebar() {

    const {data} = useQuery<lessonQueryResponse>(GET_LESSONS_QUERY);    
    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>
            <div className="flex flex-col gap-8">
                {data?.lessons.map((lesson) => 
                    <Lesson 
                    key={lesson.id}
                    title={lesson.title}
                    slug={lesson.slug}
                    availableAt={new Date(lesson.availableAt)}
                    lessonType={lesson.lessonType}/>)}
            </div>
        </aside>
    )
}