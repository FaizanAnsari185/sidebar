"use client";

import { useState } from "react";

export default function SideBar() {
  const [open, setOpen] = useState(false);

  function handelToggle() {
    setOpen(!open);
  }

  return (
    <main>
      <div
        className={` ${
          !open ? "-translate-x-full" : ""
        } bg-gray-200 h-screen border-2 border-black w-96 transition-transform ease-in-out duration-700 absolute flex justify-between`}
      >
        <div>This is Side Bar</div>
        <div>
          <button
            onClick={handelToggle}
            className="bg-lime-500 rounded-xl p-2 border-2 border-lime-700"
          >
            close
          </button>
        </div>
      </div>
      <div>
        <button
          onClick={handelToggle}
          className="bg-lime-500 rounded-xl p-2 border-2 border-lime-700"
        >
          Open Side Bar
        </button>
      </div>
    </main>
  );
}
