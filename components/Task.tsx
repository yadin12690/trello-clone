/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export interface NewTaskProps {
    title: string;
    content: string;
}

export default function Task(props: NewTaskProps) {

    return (
        <button className={tw`flex items-center bg-green-500 text-white hover:bg-green-900 p-2 rounded text-sm w-auto`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-5v5h-4v-5h-5v-4h5v-5h4v5h5v4z" /></svg>
            <span></span>
        </button>
    );
}