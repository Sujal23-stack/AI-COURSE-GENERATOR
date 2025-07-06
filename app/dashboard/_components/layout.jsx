import React from 'react'
import Sidebar from './Sidebar';

import Header2 from './Header2';
import { UserButton } from '@clerk/nextjs';

const DashboardLayout  = ({children}) => {
  return (
    <div >
      <div className='md:w-64 hidden md:block fixed h-full shadow-md bg-white'>
        <Sidebar/>
      </div>
      <div className='md:ml-64'>
        {children}
      </div>
    <UserButton/>
    </div>
  )
}

export default DashboardLayout;
