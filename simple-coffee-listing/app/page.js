import HomePageContainer from "@/Containers/HomePageContainer";

export const metadata = {
  title: "Coffee Listing App",
  description: "Coffee Listing App",
};

export default async function Home() {
  return (
    <main className="w-full min-h-screen bg-[#111315] ">
      <HomePageContainer />
    </main>
  );
}
