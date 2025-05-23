"use client";

import { useEffect, useState } from "react";
import ClickoutSide from "../ClickoutSide";
import DownArrow from "../svg/DownArrow";
import NavLink from "./NavLink";

const DropdownAdmission = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }
  }, [isOpen]);
  return (
    <ClickoutSide
      onClick={() => setIsOpen(false)}
      className="relative duration-1000 ease-linear"
    >
      <div
        className={`relative hover:bg-indigo-600 rounded ${
          isOpen && "bg-indigo-600"
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-2 py-2.5 w-full lg:inline-flex flex gap-2 items-center cursor-pointer "
        >
          Admission
          <DownArrow isOpen={isOpen} />
        </button>
        <ul
          className={`mt-0 lg:mt-4 flex flex-col lg:absolute lg:shadow-lg w-full lg:w-40 bg-indigo-800 lg:rounded ${
            isOpen ? "" : "hidden"
          }`}
        >
          <NavLink path="/home/admission" title="Primary" isLast={false} />
          <NavLink path="/home/admission" title="School" isLast={true} />
        </ul>
      </div>
    </ClickoutSide>
  );
};

export default DropdownAdmission;
