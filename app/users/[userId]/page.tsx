'use client'
import Header from "@/app/custom_components/Header"
import useUser from "@/app/custom_components/hooks/useUser"
import ClipLoader from "react-spinners/ClipLoader"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { use } from "react"
export default function UserView() {
    
    
    const pathname: string|null = usePathname();
    
    const id = pathname.split('/').pop();
    // console.log(id);
    
    const { data: fetchedUser, isLoading } = useUser(id as string);
     if (isLoading || !fetchedUser) {
       return (
         <div className='flex justify-center items-center h-full'>
           <ClipLoader color='lightblue' size={80} />
         </div>
       );
     }
    return <div>
        <Header showBackArrow label={fetchedUser?.name}></Header>
    </div>
}