/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import NewBoardBtn from "../../components/NewBoardBtn.tsx";

export default function Trello() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <p>Start you tasks journy by adding new board</p>
      <NewBoardBtn text="Add new board" />
    </div>
  );
}
