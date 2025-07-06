"use client";
import React from 'react'
import Image from 'next/image'
import { HiHome ,HiMiniShieldCheck,HiBars3,HiMiniPower} from "react-icons/hi2";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const Sidebar = () => {

  const Menu = [
    {
      id: 1,
      name: 'Home',
      icon: <HiHome />,
      link: '/dashboard'
    },
    {
      id: 2,
      name: 'Explore',
      icon: <HiBars3 />,
      link: '/dashboard/explore'
    },
    {
      id: 3,
      name: 'Upgrade',
      icon: <HiMiniShieldCheck />,
      link: '/dashboard/upgrade'
    },
    {
      id: 4,
      name: 'Logout',
      icon: <HiMiniPower />,
      link: '/dashboard/logout'
    }
  ];

  const path = usePathname();
  return (<> <div className='fixed h-full md:w-64 p-5 shadow-md bg-white '>
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={75} height={50} className="mb-0" />
        <p className="font-semibold text-lg">AI COURSE GENERATOR</p>
      </div>
      <hr className='my-2'></hr>
      <ul>
  {Menu.map((item, index) => (
    <li
      key={item.id}
      className={`flex items-center gap-9 p-5 hover:bg-gray-100 rounded-md cursor-pointer ${
        path === item.link ? 'bg-gray-100 text-black' : ''
      }`}
    >
      <Link href={item.link} className="flex items-center gap-2 w-full h-full">
        {item.icon}
        {item.name}
      </Link>
    </li>
  ))}
</ul>

    </div></>
   
  );
}

export default Sidebar;
