/** @jsx h */
import { tw } from "@twind";
import { h } from "preact";
import NewBoardBtn from "../../components/NewBoardBtn.tsx";
import Task from "../../components/Task.tsx";

export default function Trello() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <span className={tw`text-xl font-bold mb-[3erm]`}>Start you tasks journy by adding new board</span>
      <NewBoardBtn text="Add new board" />
      <Task />
    </div>
  );
}
