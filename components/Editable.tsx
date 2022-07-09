/** @jsx h */
import { tw } from "@twind";
import { ComponentChildren, h, RefObject } from 'preact';
import { useEffect, useState } from 'preact/hooks';

export interface EditableProps {
    text: string;
    type: string;
    placeholder: string,
    children: ComponentChildren,
    props?: unknown,
    childRef: RefObject<HTMLInputElement>,
}

// Component accept text, placeholder values and also pass what type of Input - input, textarea so that we can use it for styling accordingly
export default function Editable(props: EditableProps) {
    // Manage the state whether to show the label or the input box. By default, label will be shown.
    // Exercise: It can be made dynamic by accepting initial state as props outside the component 
    const [isEditing, setEditing] = useState(false);
    useEffect(() => {
        if (props.childRef && props.childRef.current && isEditing === true) {
            props.childRef.current.focus();
        }
    }, [isEditing, props.childRef]);

    const handleKeyDown = (event: KeyboardEvent, type: string) => {
        const { key } = event;
        const keys = ["Escape", "Tab"];
        const enterKey = "Enter";
        const allKeys = [...keys, enterKey];
        if (
            (type === "textarea" && keys.indexOf(key) > -1) ||
            (type !== "textarea" && allKeys.indexOf(key) > -1)
        ) {
            setEditing(false);
        }
    };

    return (
        <section {...props}>
            {isEditing ? (
                <div
                    onBlur={() => setEditing(false)}
                    onKeyDown={e => handleKeyDown(e, props.type)}
                >
                    {props.children}
                </div>
            ) : (
                <div
                    className={tw`rounded py-2 px-3 text-gray-700 leading-tight whitespace-pre-wrap hover:shadow-outline editable-${props.type}`}
                    onClick={() => setEditing(true)}
                >
                    <span className={`${props.text ? "text-black" : "text-gray-500"}`}>
                        {props.text || props.placeholder || "Editable content"}
                    </span>
                </div>
            )}
        </section>
    );
}