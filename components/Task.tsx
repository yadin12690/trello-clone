/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export interface NewTaskProps {
    title: string;
    content: string;
}

export default function Task(props: NewTaskProps) {



    return (
        <div className={tw`max-w-[14rem] rounded overflow-hidden shadow-lg`}>
            <div className={tw`px-6 py-4`}>
                <div className={tw`font-bold text-lg mb-2`}>{props.title}</div>
                <p className={tw`text-gray-700 text-sm`}>
                    {props.content}
                </p>
            </div>
        </div>
    );
}
