"use client";
import React, { useState } from "react";
import { useMyContext } from "@/containers/context/DataProvider";
import Button from "@/components/Button";
import { BUTTONS } from "./constant";

function HomeContainer() {
  const { search, setSearch, value } = useMyContext();
  const [buttons, setButtons] = useState(BUTTONS);

  const handleClick = (clickedId) => {
    const updatedButtons = buttons.map((button) => {
      if (button.id === clickedId) {
        return { ...button, isActive: true };
      } else {
        return { ...button, isActive: false };
      }
    });

    setButtons(updatedButtons);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 px-6">
      <div className="bg-[#212936cc] bg-opacity-80 w-full h-[300px] border border-[#4D5562] border-solid rounded-3xl p-6">
        <div className="flex gap-3 items-center border-b border-[#4d5562] border-solid pb-4">
          <Button title={"Detect Language"} type="Primary" />
          {buttons.map((button) => (
            <Button
              title={button.title}
              key={button.id}
              id={button.id}
              type={button.type}
              isActive={button.isActive}
              onClick={() => handleClick(button.id)}
            />
          ))}
        </div>
        <div>content</div>
        {/* <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        /> */}
      </div>

      <div className="bg-[#212936cc] bg-opacity-80 w-full h-[300px] border border-[#4D5562] border-solid rounded-3xl p-6">
        onebox
      </div>
    </div>
  );
}

export default HomeContainer;
