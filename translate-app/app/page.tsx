import HomeContainer from "@/containers/HomeContainer";
import { MyContextProvider } from "@/containers/context/DataProvider";
export default function Home() {
  return (
    <main className="w-full min-h-screen flex justify-center items-center ">
      <MyContextProvider>
        <HomeContainer />
      </MyContextProvider>
    </main>
  );
}
