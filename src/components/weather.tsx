"use client";

import { JSX, SVGProps, useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Card } from "@/components/ui/card";
import { MenuIcon } from "lucide-react";
import { NavBar } from "./nav-bar";

export function WeatherComponent() {
  interface WeatherData {
    currentWeather: {
      location: string;
      date: string;
      temperature: number;
      condition: string;
    };
    forecast: {
      date: string;
      temperature: number;
      condition: string;
    }[];
    previousWeather: {
      date: string;
      temperature: number;
      condition: string;
    }[];
  }
  
  const [weatherData, setWeatherData] = useState<WeatherData>({
    currentWeather: {
      location: "Kigali, RW",
      date: "",
      temperature: 0,
      condition: "",
    },
    forecast: [],
    previousWeather: [],
  });

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = "69461ea432de4e9adda482f185121ae0";
        const currentWeatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Kigali,RW&appid=${apiKey}&units=metric`
        );

        const currentWeather = {
          location: "Kigali, RW",
          date: new Date(currentWeatherResponse.data.dt * 1000).toLocaleDateString(),
          temperature: currentWeatherResponse.data.main.temp,
          condition: currentWeatherResponse.data.weather[0].description,
        };

        // Example previous weather data
        const previousWeather = [
          {
            date: "July 29, 2024",
            temperature: 21,
            condition: "Partly Cloudy",
          },
          {
            date: "July 28, 2024",
            temperature: 20,
            condition: "Sunny",
          },
        ];

        setWeatherData((prevData) => ({
          ...prevData,
          currentWeather,
          previousWeather,
        }));
      } catch (error) {
        console.error("Error fetching weather data:", error);
        // Handle the error (e.g., show a message to the user)
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <>
    <NavBar />
    <main className="flex-1">
      <section className="py-12 md:py-20 lg:py-28">
        <div className="container max-w-5xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Current Weather</h2>
              <Card className="bg-white shadow-md rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{weatherData.currentWeather.location}</h3>
                    <p className="text-lg text-[#666]">{weatherData.currentWeather.date}</p>
                  </div>
                  <div className="text-center">
                    <CloudSunIcon className="w-12 h-12 text-primary" />
                    <p className="text-4xl font-bold">{weatherData.currentWeather.temperature}°C</p>
                    <p className="text-[#666]">{weatherData.currentWeather.condition}</p>
                  </div>
                </div>
              </Card>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Upcoming Forecast</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {weatherData.forecast.map((day, index) => (
                  <Card key={index} className="bg-white shadow-md rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-[#666]">{day.date}</p>
                        <p className="text-lg font-bold">{day.date}</p>
                      </div>
                      <div className="text-center">
                        <CloudSunRainIcon className="w-8 h-8 text-primary" />
                        <p className="text-2xl font-bold">{day.temperature}°C</p>
                        <p className="text-[#666] text-sm">{day.condition}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Previous Weather</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {weatherData.previousWeather.map((day, index) => (
                  <Card key={index} className="bg-white shadow-md rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-[#666]">{day.date}</p>
                        <p className="text-lg font-bold">{day.temperature}°C</p>
                      </div>
                      <div className="text-center">
                        <CloudSunRainIcon className="w-8 h-8 text-primary" />
                        <p className="text-[#666] text-sm">{day.condition}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main><footer className="bg-[#f0f0f0] text-[#333] py-8 px-4 md:px-6">
        <div className="container max-w-5xl mx-auto grid md:grid-cols-5 gap-8">
          <div className="grid gap-2">
            <h3 className="font-bold">Company</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              About Us
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Careers
            </Link>
          </div>
          <div className="grid gap-2">
            <h3 className="font-bold">Marketplace</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              Browse Products
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Sell Your Produce
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Pricing
            </Link>
          </div>
          <div className="grid gap-2">
            <h3 className="font-bold">Community</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              Discussion Forums
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Upcoming Events
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Farming Resources
            </Link>
          </div>
          <div className="grid gap-2">
            <h3 className="font-bold">Support</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              Help Center
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact Us
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
          </div>
          <div className="grid gap-2">
            <h3 className="font-bold">Connect</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              Facebook
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Twitter
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Instagram
            </Link>
          </div>
        </div>
      </footer></>
  
  );
}

function LeafIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-leaf"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3l-2 2l-4 -2l4 2l2 2l-2 8l2 -8l2 -2z" />
      <path d="M12 3l-2 2l-4 -2l4 2l2 2l-2 8l2 -8l2 -2z" />
    </svg>
  );
}

function CloudSunIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-cloud-sun"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 4a3 3 0 0 1 3 3a2.97 2.97 0 0 1 -.14 .65a5.5 5.5 0 0 1 1.98 5.85a4 4 0 1 1 -8 0a5.5 5.5 0 0 1 1.98 -5.85a2.97 2.97 0 0 1 -.14 -.65a3 3 0 0 1 3 -3z" />
      <path d="M3 12h1m16 0h1m-9 -9v1m0 16v1m-7 -7h1m16 0h1m-3 -3l-1 -1m-4 0l-1 1m5 -1l1 1m-1 4l-1 -1m-4 0l-1 1m5 1l1 -1" />
    </svg>
  );
}

function CloudSunRainIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-cloud-sun-rain"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 18l0 .01m0 -3l0 .01m0 -3l0 .01m6 6l0 .01m0 -3l0 .01m0 -3l0 .01m6 6l0 .01m0 -3l0 .01m0 -3l0 .01" />
      <path d="M12 4a3 3 0 0 1 3 3a2.97 2.97 0 0 1 -.14 .65a5.5 5.5 0 0 1 1.98 5.85a4 4 0 1 1 -8 0a5.5 5.5 0 0 1 1.98 -5.85a2.97 2.97 0 0 1 -.14 -.65a3 3 0 0 1 3 -3z" />
    </svg>
  );
}
