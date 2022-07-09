/** @jsx h */
import { tw } from "@twind";
import { h } from "preact";
import { useState } from 'preact/hooks';
import Editable from "./Editable.tsx";

export interface NewTaskProps {
    title: string;
    content: string;
}

export default function Task(props: NewTaskProps) {
    const [task, setTask] = useState("");


    return (
        <div className={tw`max-w-[14rem] rounded overflow-hidden shadow-lg`}>
            <div className={tw`px-6 py-4`}>
                <div className={tw`font-bold text-lg mb-2`}>
                    <Editable
                        text={task}
                        placeholder="Write a task name"
                        type="input"
                    >
                        <input
                            type="text"
                            name="task"
                            placeholder="Write a task name"
                            value={task}
                            onChange={e => setTask(e.target?.value)}
                        />
                    </Editable>
                </div>
                <p className={tw`text-gray-700 text-sm`}>
                    {props.content}
                </p>
            </div>
        </div>
    );
}
