'use client'
import { LucideIcon } from 'lucide-react';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import useCurrentUser from '../hooks/useCurrentUser';
import useLoginModal from '../hooks/useLoginModal';
interface SideBarItemProps {
  // label={item.label} href = {item.href} icon = {item.icon}
  label?: string;
  href?: string;
  icon: LucideIcon;
  onClick?: () => void;
  auth?: boolean;
}
export default function SideBarItem({
  label,
  href,
  icon: Icon,
  onClick,
  auth,
}: SideBarItemProps) {
 const router = useRouter();
 const loginModal = useLoginModal();

 const { data: currentUser } = useCurrentUser();

 const handleClick = useCallback(() => {
   if (onClick) {
     return onClick();
   }

   if (auth && !currentUser) {
     loginModal.onOpen();
   } else if (href) {
     router.push(href);
   }
 }, [router, href, auth, loginModal, onClick, currentUser]);

  return (
    <>
      <div className='flex flex-row items-center' onClick={handleClick}>
        <div
          className='
            relative
            rounded-full
            h-14
            w-14
            flex
            items-center
            justify-center
            p-4
            hover:bg-blue-500
            hover:bg-opacity-10
            cursor-pointer
            lg:hidden'
        >
          <Icon size={28} />
        </div>
        <div
          className='
        relative
        hidden
        lg:flex
        items-center
        gap-4
        p-4
        rounded-full
         hover:bg-blue-300
            hover:bg-opacity-20
            dark:hover:bg-opacity-10
            cursor-pointer'
          onClick={handleClick}
        >
          <Icon size={24} />
          <p className='hidden lg:block text-xl'>{label}</p>
        </div>
      </div>
    </>
  );
}
