import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { JSX, SVGProps } from "react"

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5] text-[#333]">
      <header className="bg-[#f0f0f0] text-[#333] py-4 px-6 md:px-10 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 text-lg font-bold" prefetch={false}>
          <LeafIcon className="w-6 h-6" />
          ITERAMBERE-RY-UMUHINZI
        </Link>
       
        <div className="flex items-center gap-4">
          <Link href="/login"> <Button size="sm" >Login</Button></Link>
          
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-[url('https://i0.wp.com/forestsnews.cifor.org/wp-content/uploads/2020/08/44038175404_e4431ccb8c_c.jpg')] bg-cover bg-center py-20 md:py-32 lg:py-40 text-center">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#fff]">
              Connecting Farmers, Nourishing Communities
            </h1>
            <p className="text-lg md:text-xl text-[#fff] mb-8">
              Discover the best local produce, connect with fellow farmers, and stay informed with our Farmers
              Marketplace.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Explore the Marketplace</Button>
              <Button variant="secondary" size="lg">
                Join the Community
              </Button>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 lg:py-28">
          <div className="container max-w-5xl px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Discover Local Produce</h2>
                <p className="text-[#666] mb-8">
                  Browse our vibrant marketplace and connect with local farmers to find the freshest, highest-quality
                  produce for your business or family.
                </p>
                <Link href="#" className="inline-flex items-center gap-2 font-medium hover:underline" prefetch={false}>
                  Explore the Marketplace
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
              <div>
                <img
                  src="https://visitrwanda.com/wp-content/uploads/fly-images/2388/Visit-Rwanda-Agriculture--1920x1256.jpg"
                  alt="Farmers Marketplace"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#f0f0f0] py-12 md:py-20 lg:py-28">
          <div className="container max-w-5xl px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src="https://rwandadispatch.com/wp-content/uploads/2023/06/inspecting-climbing-beans.jpeg"
                  alt="Farmers Community"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Connect with Fellow Farmers</h2>
                <p className="text-[#666] mb-8">
                  Join our vibrant community of farmers, share insights, and collaborate to build a more sustainable
                  food system.
                </p>
                <Link href="#" className="inline-flex items-center gap-2 font-medium hover:underline" prefetch={false}>
                  Join the Community
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 lg:py-28">
          <div className="container max-w-5xl px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Informed</h2>
                <p className="text-[#666] mb-8">
                  Keep up with the latest weather forecasts and farming news to help you make informed decisions for
                  your business.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 font-medium hover:underline"
                    prefetch={false}
                  >
                    Weather Forecast
                    <CloudIcon className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 font-medium hover:underline"
                    prefetch={false}
                  >
                    Farming News
                    <NewspaperIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div>
                <img
                  src="https://turkanawildlifesafaris.com/wp-content/uploads/2024/05/noaa-WHLI73X8tE0-unsplash-scaled.jpg"
                  alt="Weather and News"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#f0f0f0] text-[#333] py-8 px-4 md:px-6">
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
            <h3 className="font-bold">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" prefetch={false}>
                <FacebookIcon className="w-6 h-6" />
              </Link>
              <Link href="#" prefetch={false}>
                <TwitterIcon className="w-6 h-6" />
              </Link>
              <Link href="#" prefetch={false}>
                <InstagramIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const LeafIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 1.5C8.083 4.5 4.5 8.083 1.5 12c5.917 8.917 14.917 7.917 16.5 6 1.5-1.917 2.917-10.917-6-16.5z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 1.5l1.5 3-3 1.5 1.5 3-3 1.5 1.5 3-3 1.5 1.5 3" />
  </svg>
)

const MenuIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
)

const ArrowRightIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h14" />
  </svg>
)

const CloudIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 15h14c2 0 3-1.5 3-3.5S21 8 19 8a5 5 0 00-1.8.4A4.8 4.8 0 0012 3a5 5 0 00-5 5H5C3 8 1 9.5 1 11.5S3 15 5 15z"
    />
  </svg>
)

const NewspaperIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 19a2 2 0 002-2V5c0-.94-.88-2-2-2H5c-1.12 0-2 .88-2 2v12c0 1.12.88 2 2 2h14zM5 5h14v4H5V5zm0 6h7v4H5v-4zm9 0h5v4h-5v-4zM5 17h14v2H5v-2z"
    />
  </svg>
)

const FacebookIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 2h-3c-1.11 0-2.21.45-3 1.25A4.25 4.25 0 0011 6.5V9H9v4h2v7h4v-7h2.5L18 9h-3V6.5c0-.28.11-.55.29-.71.18-.17.43-.29.71-.29h2V2z"
    />
  </svg>
)

const TwitterIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 19c7.74 0 12-6.25 12-11.67V7.1A8.73 8.73 0 0022 4a8.1 8.1 0 01-2.36.62A4.06 4.06 0 0021.47 2a8.15 8.15 0 01-2.59.99A4.05 4.05 0 0012 5c0 .33.03.66.1.98A11.5 11.5 0 013 3a4.05 4.05 0 001.25 5.4A4 4 0 012.8 8v.05c0 1.94 1.4 3.56 3.3 3.94a4.07 4.07 0 01-1.82.07A4.05 4.05 0 008 16c-1.25 1-2.83 1.58-4.52 1.58A10.9 10.9 0 002 17c1.58.9 3.4 1.42 5.34 1.42"
    />
  </svg>
)

const InstagramIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2.5c3.24 0 3.6.01 4.85.07 1.18.05 1.83.24 2.26.4a4.62 4.62 0 011.7 1.11 4.62 4.62 0 011.11 1.7c.16.43.34 1.08.4 2.26.06 1.25.07 1.61.07 4.85 0 3.24-.01 3.6-.07 4.85-.05 1.18-.24 1.83-.4 2.26a4.62 4.62 0 01-1.11 1.7 4.62 4.62 0 01-1.7 1.11c-.43.16-1.08.34-2.26.4-1.25.06-1.61.07-4.85.07-3.24 0-3.6-.01-4.85-.07-1.18-.05-1.83-.24-2.26-.4a4.62 4.62 0 01-1.7-1.11 4.62 4.62 0 01-1.11-1.7c-.16-.43-.34-1.08-.4-2.26-.06-1.25-.07-1.61-.07-4.85 0-3.24.01-3.6.07-4.85.05-1.18.24-1.83.4-2.26a4.62 4.62 0 011.11-1.7 4.62 4.62 0 011.7-1.11c.43-.16 1.08-.34 2.26-.4C8.4 2.51 8.76 2.5 12 2.5z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 5.5h.01" />
  </svg>
)

const searchClient = {
  async search(requests: any) {
    return {
      results: [
        {
          hits: [
            { objectID: 1, title: 'Apple', description: 'A sweet red fruit' },
            { objectID: 2, title: 'Banana', description: 'A yellow fruit' },
          ],
        },
      ],
    }
  },
}


