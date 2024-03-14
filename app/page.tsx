import AssoInfo from "@/src/components/Home/AssoInfo";
import Banner from "@/src/components/Home/Banner";
import Hero from "@/src/components/Home/Hero";
import Objectives from "@/src/components/Home/Objectives";
import Header from "@/src/components/Navigation/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 md:px-28 sm:px-28">
        <div className="bg-white py-16 sm:py-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Nos objectifs
          </h2>
          <div className="mx-auto mt-2 max-w-2xl sm:mt-20 lg:mt-4 lg:max-w-none">
            <Objectives />
            <Banner />
            <AssoInfo />
          </div>
        </div>
      </div>
    </>
  );
}
