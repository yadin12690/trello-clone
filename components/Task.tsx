/** @jsx h */
import { tw } from "@twind";
import { h } from "preact";
import { useRef, useState } from 'preact/hooks';
import Editable from "./Editable.tsx";

export default function Task() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");


    return (
        <div className={tw`max-w-[14rem] h-40 rounded overflow-hidden shadow-lg`}>
            <form className={tw`bg-white rounded`}>
                <div className={tw`px-6 py-4`}>
                    <Editable
                        text={task}
                        placeholder="Write a task name"
                        type="input"
                        childRef={inputRef}
                    >
                        <input
                            type="text"
                            ref={inputRef}
                            name="task"
                            className={tw`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300`}
                            placeholder="Write a task name"
                            value={task}
                            onChange={e => setTask((e.target as HTMLInputElement).value)}
                        />
                    </Editable>
                </div>
                <div className="px-4 pb-4">
                    <Editable
                        text={description}
                        placeholder="Description for the task"
                        childRef={textareaRef}
                        type="textarea"
                    >
                        <textarea
                            ref={textareaRef}
                            name="description"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                            placeholder="Description for the task"
                            rows={5}
                            value={description}
                            onChange={e => setDescription((e.target as HTMLInputElement).value)}
                        />
                    </Editable>
                </div>
            </form>
        </div>
    );
}
