import { useRouter } from 'next/router';
import Link from 'next/link';
import { BsTwitter } from 'react-icons/bs';
import { Twitter } from 'lucide-react';
const SidebarLogo = () => {
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
          <BsTwitter size={30}/>
        </div>
      </Link>
    );
};

export default SidebarLogo;
