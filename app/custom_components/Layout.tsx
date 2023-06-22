import React, { ReactNode } from 'react';
import Sidebar from './layout/Sidebar';
import Followbar from './layout/Followbar';
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='h-screen'>
      <div className='container h-full mx-auto xl:px-30 max-w-full`'>
        <div className='grid grid-cols-4 h-full'>
          <Sidebar />
          <div
            className='
              col-span-3 
              lg:col-span-2 
              border-x-[1px] 
              border-neutral-800
              dark:border-neutral-200
          '
          >
            {children}
          </div>
          <Followbar></Followbar>
          
        </div>
      </div>
    </div>
  );
};

export default Layout;
