// import CategoryPage from "@bvida/components/ui/CategoryPage";
// import HomePage from "@bvida/components/ui/Homepage";
// import Landingpage from "@bvida/components/ui/landingpage";
import Image from "next/image";
import React from "react";
import HomePage from "../components/ui/Homepage";
import CategoryPage from "../components/ui/CategoryPage";
import Landingpage from "../components/ui/landingpage";
import Footer from "../components/ui/Footer";

export default function Home() {
  return (
    <>
      <Landingpage />
      {/* <HomePage />
      <CategoryPage /> */}
      <Footer />
    </>
  );
}
