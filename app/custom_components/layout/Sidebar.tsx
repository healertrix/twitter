'use client'
import { Home, Bell, UserCircle2, LogOut, Sun, Moon } from 'lucide-react';
import SideBarLogo from './SideBarLogo';
import SideBarItem from './SideBarItem';
import SideBarTweetBttn from './SideBarTweetBttn';
import useDarkModeToggle from './SideBarDarkToggle';
export default function Sidebar() {
  const [currentTheme, toggleTheme] = useDarkModeToggle();
  const items = [
    
    {
      label: 'Home',
      href: '/',
      icon: Home,
    },
    {
      label: 'Notifications',
      href: '/notifications',
      icon: Bell,
    },
    {
      label: 'Profile',
      href: '/profile/123',
      icon: UserCircle2,
    },
  ];
  return (
    <>
      <div className='col-span-1 h-full pr-4 md:pr-6'>
        <div className='flex flex-col items-end'>
          <div className='space-y-2 lg:w-[230px]'>
            <SideBarLogo></SideBarLogo>

            {items.map((item, index) => {
              return (
                <SideBarItem
                  key={item.href}
                  label={item.label}
                  href={item.href}
                  icon={item.icon}
                ></SideBarItem>
              );
            })}
            <SideBarItem
              onClick={toggleTheme}
              icon={currentTheme == 'dark' ? Moon:Sun}
              label={currentTheme == 'dark' ? 'Dark Mode' : 'Light Mode '}
            ></SideBarItem>
            <SideBarItem
              onClick={() => {}}
              icon={LogOut}
              label='Logout'
            ></SideBarItem>
            <SideBarTweetBttn></SideBarTweetBttn>
          </div>
        </div>
      </div>
    </>
  );
}
