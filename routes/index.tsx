/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 table mx-auto max-w-screen-md`}>
      <img
        src="/mini-trello-logo.png"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Welcome to trello mini clone made with Fresh.js
      </p>
      <a href="/trello" className={tw`table mx-auto`}>
        <button className={tw`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded`}>
          Take me to create new board</button>
      </a>
    </div>
  );
}
