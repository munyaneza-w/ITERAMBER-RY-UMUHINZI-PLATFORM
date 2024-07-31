"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Card } from "@/components/ui/card";
import { JSX, SVGProps } from "react";
import { NavBar } from "./nav-bar";

// Define the type for the news article
interface Article {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
}

const NEWS_API_KEY = '9ea9960aac454f649e6fa5d78e9343be'; 
const NEWS_API_URL = `https://newsapi.org/v2/everything?q=agriculture&language=en&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;

export function NewsComponent() {
  const [news, setNews] = useState<Article[]>([]); // Use the Article type
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(NEWS_API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <><NavBar /><main className="flex-1">
      <section className="py-12 md:py-20 lg:py-28">
        <div className="container max-w-5xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Agricultural News</h2>
              {loading ? (
                <p className="text-[#666]">Loading news...</p>
              ) : error ? (
                <p className="text-red-500">Error: {error}</p>
              ) : news.length > 0 ? (
                news.map((article, index) => (
                  <Card key={index} className="bg-white shadow-md rounded-lg p-6 mb-4">
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold">{article.title}</h3>
                          <p className="text-[#666]">{new Date(article.publishedAt).toLocaleDateString()}</p>
                        </div>
                        <div className="text-center">
                          <LeafIcon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <p className="text-[#666]">{article.description}</p>
                      <Link href={article.url} className="text-blue-500 hover:underline" prefetch={false}>
                        Read more
                      </Link>
                    </div>
                  </Card>
                ))
              ) : (
                <p className="text-[#666]">No news articles found.</p>
              )}
            </div>
            {/* Upcoming Events section remains the same */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Upcoming Events</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-white shadow-md rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#666]">August 5, 2024</p>
                      <p className="text-lg font-bold">Kigali Agriculture Fair</p>
                    </div>
                    <div className="text-center">
                      <CalendarIcon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </Card>
                <Card className="bg-white shadow-md rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#666]">September 12, 2024</p>
                      <p className="text-lg font-bold">Organic Farming Workshop</p>
                    </div>
                    <div className="text-center">
                      <CalendarIcon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </Card>
                <Card className="bg-white shadow-md rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#666]">October 20, 2024</p>
                      <p className="text-lg font-bold">Sustainable Agriculture Summit</p>
                    </div>
                    <div className="text-center">
                      <CalendarIcon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </Card>
                <Card className="bg-white shadow-md rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#666]">November 15, 2024</p>
                      <p className="text-lg font-bold">Rwandan Farmers Market</p>
                    </div>
                    <div className="text-center">
                      <CalendarIcon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </Card>
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
              Pricing
            </Link>
          </div>
          <div className="grid gap-2">
            <h3 className="font-bold">Support</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact Us
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              FAQs
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Help Center
            </Link>
          </div>
          <div className="grid gap-2">
            <h3 className="font-bold">Follow Us</h3>
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

function LeafIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 00-7.07 17.07A10 10 0 1012 2zm1 17.93V13a1 1 0 00-1-1h-5.93A8.03 8.03 0 0113 3.07z" />
    </svg>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  );
}

function CalendarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V10h14v11zM7 12h5v5H7z" />
    </svg>
  );
}
