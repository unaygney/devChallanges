"use client";
import React from "react";
import { useMyContext } from "@/context/DataProvider";

function HomeContainer() {
  const { search, setSearch, value } = useMyContext();
  console.log(value);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 px-6">
      <div className="bg-black bg-opacity-50 w-full h-[300px]">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="bg-fuchsia-200 w-40 h-20">{search}</div>
        <div className="bg-fuchsia-200 w-40 h-20">{value}</div>
      </div>
      <div className="bg-black bg-opacity-50 w-full h-[300px]">onebox</div>
    </div>
  );
}

export default HomeContainer;
