"use client";
import React from "react";
import { useMyContext } from "@/containers/context/DataProvider";
import Button from "@/components/Button";

function HomeContainer() {
  const { search, setSearch, value } = useMyContext();
  console.log(value);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 px-6">
      <div className="bg-[#212936cc] bg-opacity-80 w-full h-[300px] border border-[#4D5562] border-solid rounded-3xl p-6">
        <div>
          <Button title={false} type="guney" />
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
