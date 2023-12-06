import { getCoffees } from "@/services/coffees";
import React from "react";
import Card from "../Card";

async function CardComponent() {
  const coffees = await getCoffees();
  console.log(coffees);
  return (
    <div className="bg-[#1B1D1F] -mt-20 z-10 w-[80%] max-w-[1200px] mx-auto  py-10 px-6 flex flex-col items-center rounded-md ">
      <div className="flex flex-col gap-4 bg-vector bg-no-repeat bg-right-top max-w-[510px] ">
        <h2 className="text-[#FEF7EE] text-3xl font-semibold text-center ">
          Our Collection
        </h2>
        <p className="text-base text-[#6F757C] font-medium text-center">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <div className="mx-auto flex gap-4 text-white font-semibold text-sm">
          <button className="bg-[#6F757C] p-2 rounded-md">All Products</button>
          <button>Available Now</button>
        </div>
      </div>
      <div className="w-full flex gap-6 flex-wrap justify-center mt-10">
        {coffees?.map((coffee, i) => (
          <Card key={i} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}

export default CardComponent;
