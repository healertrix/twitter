'use client'
import { Button } from '@/components/ui/button';
import Head from 'next/head';
import DarkModeToggle from './custom_components/darkmodeToggle';
export default function Home() {
  return (
    <>
      <Head>
        <title>Dark Mode Toggle</title>
        <meta name='description' content='A cool twitter clone' />
      </Head>
      
      Hello World
    </>
  );
}
