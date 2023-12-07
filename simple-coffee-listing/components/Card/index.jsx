import React from "react";
import Image from "next/image";

function Card({ coffee }) {
  return (
    <div className="w-[26%] min-w-[200px] bg-transparent">
      <div className="flex flex-col">
        <div className="relative w-full h-[180px] rounded-lg overflow-hidden ">
          <Image
            src={coffee.image}
            alt={`${coffee.name} image`}
            quality={90}
            fill
          />
          {coffee.popular && (
            <span className="bg-[#F6C768] text-[#111315] text-xs px-1.5 py-1 rounded-xl absolute top-2 left-2 font-semibold">
              Popular
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
