import HomeContainer from "@/containers/HomeContainer";
import { MyContextProvider } from "@/containers/context/DataProvider";
export default function Home() {
  return (
    <main className="w-full h-full ">
      <MyContextProvider>
        <HomeContainer />
      </MyContextProvider>
    </main>
  );
}
