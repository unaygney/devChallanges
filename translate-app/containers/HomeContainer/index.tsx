"use client";
import React, { useState } from "react";
import { useMyContext } from "@/containers/context/DataProvider";
import Button from "@/components/Button";
import { BUTTONS } from "./constant";
import CopyIcon from "@/assets/icons/Copy.svg";
import SoundIcon from "@/assets/icons/sound_max_fill.svg";
import ChangeIcon from "@/assets/icons/Horizontal_top_left_main.svg";

function HomeContainer() {
  const { search, setSearch, value } = useMyContext();
  const [buttons, setButtons] = useState(BUTTONS);
  const [buttons2, setButtons2] = useState(BUTTONS);
  const [translationData, setTranslationData] = useState("");

  interface FilteredDataType {
    id: number;
    title: string;
    type: "Primary";
    isActive: boolean;
    tag: string;
  }
  type HandleCopyFunction = (text: string) => void;

  const [filteredData, setFilteredData] = useState<FilteredDataType | null>(
    null
  );
  const [filteredData2, setFilteredData2] = useState<FilteredDataType | null>(
    null
  );

  const handleClick = (clickedId: number) => {
    const updatedButtons = buttons.map((button) => {
      if (button.id === clickedId) {
        return { ...button, isActive: true };
      } else {
        return { ...button, isActive: false };
      }
    });
    setButtons(updatedButtons);
    const filteredData = buttons.find((button) => button.id === clickedId);
    setFilteredData(filteredData);
  };

  const handleClick2 = (clickedId: number) => {
    const updatedButtons = buttons2.map((button) => {
      if (button.id === clickedId) {
        return { ...button, isActive: true };
      } else {
        return { ...button, isActive: false };
      }
    });
    setButtons2(updatedButtons);
    const filteredData = buttons.find((button) => button.id === clickedId);
    setFilteredData2(filteredData);
  };

  const getTranslate = async () => {
    try {
      const response = await fetch("api/getTranslate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filteredData,
          filteredData2,
          value,
        }),
      });
      const data = await response.json();
      const { translation } = data;
      setTranslationData(translation);
    } catch (error) {
      throw new Error("Failed to translate!");
    }
  };

  const handleCopy: HandleCopyFunction = (text) => {
    navigator.clipboard.writeText(text);
  };

  const readTheSpeech: HandleCopyFunction = (speechText) => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = speechText;
    window.speechSynthesis.speak(msg);
  };

  return (
    <div className="w-full h-full my-20 flex flex-col justify-center items-center gap-4 px-6">
      <div className="bg-[#212936cc] bg-opacity-80 w-full  border border-[#4D5562] border-solid rounded-3xl p-6">
        <div className="flex md:gap-3 gap-1 flex-wrap  items-center border-b border-[#4d5562] border-solid pb-4">
          {buttons.map((button) => (
            <Button
              title={button.title}
              key={button.id}
              id={button.id}
              tag={button.tag}
              isActive={button.isActive}
              onClick={() => handleClick(button.id)}
            />
          ))}
        </div>
        <div className=" w-full h-[200px] flex flex-col ">
          <textarea
            className="w-full h-full bg-transparent resize-none outline-none text-white py-6"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            maxLength={500}
          />
          <div className="flex gap-2 items-end ">
            <button
              onClick={() => readTheSpeech(search)}
              className=" w-8 h-8  p-1 border-2 border-[#4D5562] border-solid rounded-lg "
            >
              <SoundIcon />
            </button>
            <button
              onClick={() => handleCopy(search)}
              className="w-8 h-8  p-1 border-2 border-[#4D5562] border-solid rounded-lg "
            >
              <CopyIcon />
            </button>

            <div className="ml-auto flex flex-col gap-2 ">
              <div className="ml-auto">
                <p className="text-xs text-[#4D5562] ">{`${search.length} / 500`}</p>
              </div>
              <button
                onClick={getTranslate}
                className=" w-[100px] md:w-[200px] h-[48px] bg-[#3662E3] text-white rounded-lg  "
              >
                Translate
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ıkıncı box */}
      <div className="bg-[#212936cc] bg-opacity-80 w-full  border border-[#4D5562] border-solid rounded-3xl p-6">
        <div className="flex flex-wrap md:flex-nowrap md:gap-3 gap-1 items-center border-b border-[#4d5562] border-solid pb-4">
          {buttons2.map((button) => (
            <Button
              title={button.title}
              key={button.id}
              id={button.id}
              isActive={button.isActive}
              onClick={() => handleClick2(button.id)}
            />
          ))}
          <button className=" w-8 h-8  p-1 border-2 border-[#4D5562] border-solid rounded-lg ">
            <ChangeIcon />
          </button>
        </div>
        <div className=" w-full h-[200px]  ">
          <textarea
            disabled
            className="w-full h-[170px] bg-transparent resize-none outline-none text-white py-6  "
            value={
              translationData ? translationData : "Bonjour, comment allez-vous?"
            }
          />
          <div className="flex  gap-2">
            <button
              onClick={() =>
                readTheSpeech(
                  translationData
                    ? translationData
                    : "Bonjour, comment allez-vous?"
                )
              }
              className=" w-8 h-8  p-1 border-2 border-[#4D5562] border-solid rounded-lg "
            >
              <SoundIcon />
            </button>
            <button
              onClick={() =>
                handleCopy(
                  translationData
                    ? translationData
                    : "Bonjour, comment allez-vous?"
                )
              }
              className="w-8 h-8  p-1 border-2 border-[#4D5562] border-solid rounded-lg "
            >
              <CopyIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContainer;
