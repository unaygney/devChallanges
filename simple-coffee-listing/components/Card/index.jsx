import React from "react";
import Image from "next/image";
import FilledStarImg from "@/assets/icons/Star_fill.svg";
import EmptyStarImg from "@/assets/icons/Star.svg";

function Card({ coffee }) {
  return (
    <div className="w-[30%] min-w-[270px] bg-transparent">
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
        <div className="flex flex-col relative">
          <h3 className="mt-2 text-white font-bold text-base">{coffee.name}</h3>
          <div className="flex items-center mt-2 gap-2">
            {coffee.rating ? <FilledStarImg /> : <EmptyStarImg />}
            <p className="text-white">
              {coffee.rating ? (
                <>
                  {parseFloat(coffee.rating).toFixed(1)}
                  <span className="text-[#6F757C] font-bold text-sm">
                    ({coffee.votes} votes)
                  </span>
                </>
              ) : (
                <p className="text-[#6F757C] text-xs font-semibold ">
                  No Ratings
                </p>
              )}
            </p>
          </div>

          <span className="absolute right-0 top-2 px-2 py-1 rounded-md bg-[#BEE3CC] text-[#111315] text-xs font-bold ">
            {coffee.price}
          </span>
          {!coffee.available && (
            <span className="absolute right-0 top-10 text-[#ED735D]">
              Sold out
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
