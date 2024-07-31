import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export function LoginComponent() {
  return (
    <div className="flex min-h-[90vh] items-center justify-center bg-[url('/placeholder.svg?height=1200&width=1200')] bg-cover bg-center">
      <div className="mx-auto w-full max-w-2xl rounded-lg bg-background p-8 shadow-xl sm:px-12 md:px-16">
        <div className="flex flex-col items-center justify-between mb-8 sm:flex-row">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline" prefetch={false}>
            <ArrowLeftIcon className="w-4 h-4" />
            Home
          </Link>
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold sm:text-4xl">Welcome to Farmers Marketplace</h1>
            <p className="text-muted-foreground">Sign in to access our thriving community of farmers and buyers.</p>
          </div>
        </div>
        <form className="mt-4 space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" required className="w-full" />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="text-sm font-medium text-primary hover:underline" prefetch={false}>
                Forgot Password?
              </Link>
            </div>
            <Input id="password" type="password" required className="w-full" />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary font-medium hover:underline" prefetch={false}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

function ArrowLeftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
