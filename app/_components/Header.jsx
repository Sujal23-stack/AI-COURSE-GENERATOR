"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
const { useRouter } = require('next/navigation');

const  Header= () => {
    const router = useRouter();
    const handleClick = () => {
    router.push('/course-generator');
  };
  return (
    <><div className="flex items-center justify-between bg-gray-100 px-4 py-0.1">
  {/* Left section: Logo + Title */}
  <div className="flex items-center gap-4">
    <Image src="/logo.png" alt="Logo" width={75} height={75} />
    <h1 className="text-2xl font-bold">AI Course Generator</h1>
  </div>

  {/* Right section: Button */}
  <Button className={"bg-purple-500 hover:bg-purple-700 font-bold"}onClick={handleClick}>Get Started</Button>
</div>

    </>
  )
}

export default Header;

