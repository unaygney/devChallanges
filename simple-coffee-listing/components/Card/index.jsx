import React from "react";
import Image from "next/image";

function Card({ coffee }) {
  return (
    <div className="w-[25%] min-w-[200px] bg-white">
      <div className="flex flex-col">
        <div className="absolute w-full h-[250px]">
          <Image src={coffee.image} alt={`${coffee.name} image`} fill />
        </div>
      </div>
    </div>
  );
}

export default Card;
