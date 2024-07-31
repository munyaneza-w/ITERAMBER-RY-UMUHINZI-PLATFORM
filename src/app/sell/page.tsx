"use client";

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { NavBar } from "@/components/nav-bar";

const Sell = () => {
  const [crops, setCrops] = useState<
    Array<{ name?: string; description?: string; image?: string; farm?: string; phone?: string }>
  >([]);

  useEffect(() => {
    const storedData = localStorage.getItem("cropData");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);

        if (Array.isArray(parsedData)) {
          setCrops(parsedData);
        } else if (typeof parsedData === "object" && parsedData !== null) {
          // Convert object to array if it contains crop details
          setCrops([parsedData]);
        } else {
          console.error("Stored data is not in expected format:", parsedData);
        }
      } catch (error) {
        console.error("Error parsing stored data:", error);
      }
    }
  }, []);

  return (
    <>
    <NavBar />
    <div className="mt-20" />
    <div className="container max-w-5xl mx-auto py-10">
          <h1 className="text-3xl font-bold mb-6">Crops for Sale</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {crops.map((crop, index) => (
                  <Card key={index} className="p-4 bg-white shadow-md rounded-lg">
                      <img
                          src={crop.image || ""}
                          alt={crop.name || "Crop Image"}
                          className="w-full h-48 object-cover rounded-md" />
                      <h2 className="text-xl font-bold mt-4">{crop.name}</h2>
                      <p className="text-gray-700 mt-2">{crop.description}</p>
                      {crop.farm && (
                          <p className="text-gray-500 mt-2 italic">Farm: {crop.farm}</p>
                      )}
                      {crop.phone && (
                          <p className="text-gray-500 mt-2 italic">Phone: {crop.phone}</p>
                      )}
                  </Card>
              ))}
          </div>
      </div></>
  );
};

export default Sell;
