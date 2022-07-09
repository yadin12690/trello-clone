/** @jsx h */
import { tw } from "@twind";
import { ComponentChildren, h, RefObject } from 'preact';
import { useEffect, useState } from 'preact/hooks';

export type EditableProps = {
    text: string;
    type: string;
    placeholder: string,
    children: ComponentChildren,
    childRef: RefObject<HTMLElement>,
}

// Component accept text, placeholder values and also pass what type of Input - input, textarea so that we can use it for styling accordingly
const Editable = ({
    text,
    type,
    placeholder,
    children,
    childRef,
    ...props
}: EditableProps) => {

    const [isEditing, setEditing] = useState(false);
    useEffect(() => {
        console.log(isEditing);
        if (childRef && childRef.current && isEditing === true) {
            childRef.current.focus();
        }
    }, [isEditing, childRef]);

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
                    onKeyDown={e => handleKeyDown(e, type)}
                >
                    {children}
                </div>
            ) : (
                <div
                    className={tw`rounded py-2 px-3 text-gray-700 leading-tight whitespace-pre-wrap hover:shadow-outline editable-${type}`}
                    onClick={() => setEditing(true)}
                >
                    <span className={tw`${text ? "text-black" : "text-gray-500"}`}>
                        {text || placeholder || "Editable content"}
                    </span>
                </div>
            )}
        </section>
    );
};

export default Editable;
