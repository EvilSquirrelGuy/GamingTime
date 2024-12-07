import React from "react";

import "@fortawesome/fontawesome-svg-core/styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


export default function Header() {
  return (
    <header className="w-full flex flex-col align-middle items-start p-4 text-blue-500">
      <FontAwesomeIcon icon={faBars} className={`text-xl cursor-pointer`} />
    </header>
  )
}