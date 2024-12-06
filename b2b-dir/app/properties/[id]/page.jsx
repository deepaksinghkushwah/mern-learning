import React from "react";
import properties from "@/properties.json";
import { PropertyCard } from "@/components/PropertyCard";
import Link from "next/link";
import Image from "next/image";
const page = async ({ params }) => {
  const { id } = await params;
  const item = await properties.find((item) => item._id == id);

  return (
    <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="bg-gray-500 text-white rounded-md w-full">
        <div className="bg-white text-black rounded-lg shadow-md w-full">
          {item?._id && (<div className="flex flex-col md:flex-row justify-start gap-3">
            <Image
              src={`https://picsum.photos/seed/dog-${item._id}/500/500`}
              width={500}
              height={500}
              alt="Hello"
              priority={false}
              className="shadow-md border-black rounded-s-lg"
            />
            <div className="mt-3 rounded-e-lg">
              <h1 className="text-3xl">{item.name}</h1>
              <table className="table table-dark">
                <tbody>
                <tr>
                  <th className="align-top text-left" width="25%">Type</th>
                  <td width="75%"> {item.type}</td>
                </tr>
                <tr>
                  <th className="align-top text-left">Description</th>
                  <td>{item.description}</td>
                </tr>
                <tr>
                  <th className="align-top text-left">Location</th>
                  <td>
                  {item.location.street +
                    ", " +
                    item.location.city +
                    ", " +
                    item.location.state +
                    ", " +
                    item.location.zipcode}
                  </td>
                </tr>
                <tr>
                  <th className="align-top text-left">Beds</th>
                  <td>{item.beds}</td>
                </tr>
                <tr>
                  <th className="align-top text-left">Bathrooms</th>
                  <td>{item.baths}</td>
                </tr>
                <tr>
                  <th className="align-top text-left">Area</th>
                  <td>{item.square_feet}sqft</td>
                </tr>
                <tr>
                  <th className="align-top text-left">Amenities</th>
                  <td>{item.amenities.join(", ")}</td>
                </tr>
                <tr>
                  <th className="align-top text-left">Rates</th>
                  <td className="">
                  <div>{item.rates.monthly && "Monthly Rates: " + item.rates.monthly}</div>
                  <div>{item.rates.weekly && "Weekly Rates: " + item.rates.weekly}</div>
                  <div>{item.rates.nightly && "Nightly Rates: " + item.rates.nightly}</div>
                  </td>
                </tr>
                </tbody>
              </table>              
            </div>
          </div>)}
          {!item?._id && 'No property found'}
        </div>
      </div>
    </div>
  );
};

export default page;
