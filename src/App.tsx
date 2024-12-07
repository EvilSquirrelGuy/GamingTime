// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/core";
import "./index.css";

import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <main className={`bg-slate-900 grid-rows-[20px,1fr,20px]`}>
      <h1 className={`text-blue-400 text-2xl font-semibold`}><FontAwesomeIcon icon={faGamepad} /> Gaming Time</h1>
    </main>
  );
}

export default App;
