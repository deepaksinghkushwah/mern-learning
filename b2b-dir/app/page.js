import Hero from "@/components/Hero";
import Infoboxes from "@/components/Infoboxes";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <Infoboxes/>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <Link href='/properties'>List All Properties</Link>
      </div>
    </>

  );
}
