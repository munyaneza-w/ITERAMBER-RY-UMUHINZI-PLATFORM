"use client"
import Link from "next/link";
import { SVGProps, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignupComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Use the new useRouter hook

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/dashboard"); // Navigate to the dashboard
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="flex min-h-[90vh] items-center justify-center bg-[url('/placeholder.svg?height=1200&width=1200')] bg-cover bg-center">
      <div className="mx-auto w-full max-w-2xl rounded-lg bg-background p-8 shadow-xl sm:px-12 md:px-16">
        <div className="flex flex-col items-center justify-between mb-8 sm:flex-row">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeftIcon className="w-4 h-4" />
            Home
          </Link>
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold sm:text-4xl">Create an Account</h1>
            <p className="text-muted-foreground">Join our community and start selling or buying agricultural products.</p>
          </div>
        </div>
        <form className="mt-4 space-y-4" onSubmit={handleSignup}>
          {error && <p className="text-red-500">{error}</p>}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              required
              className="w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              required
              className="w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
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
  );
}
