import { PropertyCard } from "@/components/PropertyCard";
import properties from '@/properties.json';
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl">Properties List</h1>
      <Link href="/properties/add" className="bg-blue-700 text-white px-4 py-2 rounded">Add Property</Link>
      <div className="grid md:grid-cols-3 gap-3 ">
      {properties.map((item) => (
        <PropertyCard item={item} key={item._id}/>
      ))}
       </div>
    </div>
  );
}
