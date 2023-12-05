import HomePageContainer from "@/Containers/HomePageContainer";

export const metadata = {
  title: "Coffee Listing App",
  description: "Coffee Listing App",
};

export default function Home() {
  return (
    <main className="w-full h-full bg-[#111315]">
      <HomePageContainer />
    </main>
  );
}
