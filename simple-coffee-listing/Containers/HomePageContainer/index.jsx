import React from "react";
import Image from "next/image";
import HeroImage from "@/public/bg-cafe.jpg";
import CardComponent from "@/components/CardComponent";
function HomePageContainer() {
  return (
    <div className="w-full h-full flex flex-col pb-20 ">
      <div className="w-full relative " style={{ height: "300px" }}>
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
