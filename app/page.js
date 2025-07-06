import Image from "next/image";
import { Divide } from "lucide-react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { ClerkProvider } from "@clerk/nextjs";
export default function Home() {
  return (
    <ClerkProvider>
    <div>
      <Header/>
      <Hero/>
    </div>
    </ClerkProvider>
    
  );
}
