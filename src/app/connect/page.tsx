"use client";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { NavBar } from "@/components/nav-bar";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const dummyFarmers = [
  { name: "Test Account 1", location: "5 km away", crops: "Tomatoes, Lettuce" },
  { name: "Farmer Sarah", location: "8 km away", crops: "Carrots, Beets" },
  { name: "Farmer Alex", location: "12 km away", crops: "Wheat, Corn" },
  // Add more dummy farmers as needed
];

const Connect = () => {
  const [showLocationModal, setShowLocationModal] = useState(true);
  const [farmers, setFarmers] = useState<typeof dummyFarmers>([]);

  const handleAllowLocation = () => {
    // Simulate fetching location and nearby farmers
    setTimeout(() => {
      setFarmers(dummyFarmers);
      setShowLocationModal(false);
    }, 1000); // Simulate loading delay
  };

  const handleDenyLocation = () => {
    setShowLocationModal(false);
  };

  return (
      <><NavBar />
      <div className="mt-20" />
      <main className="flex-grow container max-w-5xl mx-auto py-10">
          <h1 className="text-3xl font-bold mb-6">Connect with Nearby Farmers</h1>
          {farmers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {farmers.map((farmer, index) => (
                      <Card key={index} className="p-4 bg-white shadow-md rounded-lg">
                          <h2 className="text-xl font-bold">{farmer.name}</h2>
                          <p className="text-gray-700">{farmer.location}</p>
                          <p className="text-gray-500 mt-2 italic">Crops: {farmer.crops}</p>
                      </Card>
                  ))}
              </div>
          ) : (
              <p className="text-gray-600">No farmers available at the moment.</p>
          )}
      </main><Dialog open={showLocationModal}>
              <DialogContent className="bg-background/80 backdrop-blur-md sm:max-w-[480px]">
                  <DialogHeader>
                      <DialogTitle>Allow Location Access</DialogTitle>
                      <p>We need your location to find nearby farmers.</p>
                  </DialogHeader>
                  <DialogFooter>
                      <Button onClick={handleDenyLocation} variant="outline">Deny</Button>
                      <Button onClick={handleAllowLocation}>Allow</Button>
                  </DialogFooter>
              </DialogContent>
          </Dialog></>

  );
};

export default Connect;
