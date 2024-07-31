"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Card } from "@/components/ui/card";
import { CartesianGrid, XAxis, Line, LineChart, Tooltip } from "recharts";
import { ClassAttributes, HTMLAttributes, JSX, SVGProps } from "react";
import { PopUpModal } from "./pop-up-modal";
import { NavBar } from "./nav-bar";
interface Item {
  id: number;
  name: string;
  description: string;
}

export function DashboardComponent() {
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateOrUpdate = (item: Item) => {
    if (item.id) {
      setItems((prevItems) =>
        prevItems.map((i) => (i.id === item.id ? item : i))
      );
    } else {
      setItems((prevItems) => [
        ...prevItems,
        { ...item, id: new Date().getTime() },
      ]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
    <NavBar />
    <main className="flex-1">
      <section className="py-12 md:py-20 lg:py-28">
        <div className="container max-w-5xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Dashboard</h2>
              <Card className="bg-white shadow-md rounded-lg p-6">
                <div className="grid gap-6">
                  <div className="flex items-center justify-between">
                    <div>

                      <p className="text-lg text-[#666]">Add a new farm product</p>
                    </div>
                    <PopUpModal />
                  </div>
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold">{item.name}</h3>
                        <p className="text-lg text-[#666]">{item.description}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" onClick={() => { setSelectedItem(item); setIsModalOpen(true); } }>Edit</Button>
                        <Button variant="ghost" onClick={() => handleDelete(item.id)}>Delete</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Analytics</h2>
              <Card className="bg-white shadow-md rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Crop Yield Trends</h3>
                    <LinechartChart className="" />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main><footer className="bg-[#f0f0f0] text-[#333] py-8 px-4 md:px-6">
        <div className="container max-w-5xl mx-auto grid md:grid-cols-5 gap-8">
          <div className="grid gap-2">
            <h3 className="font-bold">Company</h3>
            <Link href="/about" className="hover:underline" prefetch={false}>
              About Us
            </Link>
            <Link href="/team" className="hover:underline" prefetch={false}>
              Our Team
            </Link>
            <Link href="/careers" className="hover:underline" prefetch={false}>
              Careers
            </Link>
          </div>
          <div className="grid gap-2">
            <h3 className="font-bold">Marketplace</h3>
            <Link href="/products" className="hover:underline" prefetch={false}>
              Browse Products
            </Link>
            <Link href="/sell" className="hover:underline" prefetch={false}>
              Sell Your Produce
            </Link>
            <Link href="/pricing" className="hover:underline" prefetch={false}>
              Pricing
            </Link>
          </div>
          <div className="grid gap-2">
            <h3 className="font-bold">Community</h3>
            <Link href="/forums" className="hover:underline" prefetch={false}>
              Discussion Forums
            </Link>
            <Link href="/events" className="hover:underline" prefetch={false}>
              Upcoming Events
            </Link>
            <Link href="/resources" className="hover:underline" prefetch={false}>
              Farming Resources
            </Link>
          </div>
          <div className="grid gap-2">
            <h3 className="font-bold">Support</h3>
            <Link href="/contact" className="hover:underline" prefetch={false}>
              Contact Us
            </Link>
            <Link href="/faqs" className="hover:underline" prefetch={false}>
              FAQs
            </Link>
            <Link href="/help" className="hover:underline" prefetch={false}>
              Help Center
            </Link>
          </div>
          <div className="grid gap-2">
            <h3 className="font-bold">Legal</h3>
            <Link href="/privacy" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:underline" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
        </div>
      </footer></>
      

  );
}

function LeafIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4 19 2c-1 2-3 3.5-4.1 9.2A7 7 0 0 1 11 20Z" />
      <path d="M22 19c-0.5 0-10 1-10-11" />
      <path d="m9 13-4.5 4.5" />
    </svg>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function LinechartChart(props: ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  const data = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 500 },
    { name: "Apr", value: 700 },
    { name: "May", value: 600 },
    { name: "Jun", value: 500 },
    { name: "Jul", value: 600 },
    { name: "Aug", value: 800 },
    { name: "Sep", value: 700 },
    { name: "Oct", value: 600 },
    { name: "Nov", value: 500 },
    { name: "Dec", value: 400 },
  ];

  return (
    <LineChart width={500} height={300} data={data} className="w-full">
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#82ca9d" />
    </LineChart>
  );
}

function ItemForm({ item, onSave }: { item: Item | null; onSave: (item: Item) => void }) {
  const [name, setName] = useState(item?.name || "");
  const [description, setDescription] = useState(item?.description || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ id: item?.id || 0, name, description });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <Button type="submit">{item ? "Update" : "Create"}</Button>
    </form>
  );
}
