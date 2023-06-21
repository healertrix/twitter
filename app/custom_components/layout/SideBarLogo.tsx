import { useRouter } from 'next/router';
import Link from 'next/link';
import { BsTwitter } from 'react-icons/bs';
import { Twitter } from 'lucide-react';
interface SidebarLogoProps { 
    state: string;
}
const SidebarLogo = ({state}:SidebarLogoProps) => {
//   const router = useRouter();

    return (
      <Link href='/'>
        <div
          className='
        rounded-full 
        h-14
        w-14
        p-4 
        flex 
        items-center 
        justify-center 
        hover:bg-blue-300 
        hover:bg-opacity-10 
        cursor-pointer
    '
        >
          <BsTwitter
            size={30}
            color={state == 'light' ? 'rgb(14 165 233)' : 'white'}
          />
        </div>
      </Link>
    );
};

export default SidebarLogo;
