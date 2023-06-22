'use client'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
interface HeaderProps { 
  label?: string,
  showBackArrow?: boolean,
}
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
export default function Header({ label, showBackArrow }: HeaderProps) {
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push('/');
  }, [router]);

  return <>
    <div className='border-b-[1px] border-neutral-800 p-5'>
      <div className="flex flex-row items-center gap-2">
        {showBackArrow && (
          <BiArrowBack
            onClick={handleClick}
            size={20}
            className="
              cursor-pointer 
              hover:opacity-70 
              transition
          "/>)}
        <h1 className='text-xl font-semibold'>{ label}</h1>
      </div>
  </div>
  </>;
}
