import React from "react";
import Image from "next/image";
import HeroImage from "@/public/bg-cafe.jpg";
import CardComponent from "@/components/CardComponent";
function HomePageContainer() {
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="w-full h-1/3 relative ">
        <Image
          src={HeroImage}
          alt="Hero Image"
          placeholder="blur"
          fill={true}
        />
      </div>

      <CardComponent />
    </div>
  );
}

export default HomePageContainer;
