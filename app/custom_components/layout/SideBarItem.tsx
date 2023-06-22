import { LucideIcon } from 'lucide-react';
interface SideBarItemProps {
  // label={item.label} href = {item.href} icon = {item.icon}
  label?: string;
  href?: string;
  icon: LucideIcon;
  onClick?: () => void;
}
export default function SideBarItem({
  label,
  href,
  icon: Icon,
  onClick,
}: SideBarItemProps) {
  return (
    <>
      <div className='flex flex-row items-center' onClick={onClick}>
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
            hover:bg-opacity-30
            dark:hover:bg-opacity-10
            cursor-pointer'
          onClick={onClick}
        >
          <Icon size={24} />
          <p className='hidden lg:block text-xl'>{label}</p>
        </div>
      </div>
    </>
  );
}
