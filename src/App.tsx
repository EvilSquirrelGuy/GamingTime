// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/core";
import "./index.css";

import "@fortawesome/fontawesome-svg-core/styles";

import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./components/Header";

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <div className={`bg-slate-900 grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-screen p-4 pb-20 gap-16 sm:p-20`}>
      <Header />
      <main className="flex flex-col gap-8 row-start-2">
        <h1 className={`text-blue-400 text-2xl font-semibold`}><FontAwesomeIcon icon={faGamepad} /> Gaming Time</h1>
        <p className={`text-blue-500`} >🚧 Under Construction</p>
      </main>
    </div>
  );
}

export default App;
