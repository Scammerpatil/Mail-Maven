"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ToastContainer from "@/components/ToastContainer";

export default function Home() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Hero />
    </>
  );
}
