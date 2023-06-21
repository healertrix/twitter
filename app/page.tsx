'use client'
import Explore from './components/section 3/explore';
import Content from './components/section 2/content';
export default function Home() {
  return (
    <>
      <main className='grid grid-cols-4'>
        <div className='col-span-1 sticky'>lorem</div>
        <div className='col-span-2 overflow-y-auto overflow-x-hidden '>
          <Content></Content>
        </div>
        <div className='flex justify-end col-span-1'>
          <Explore></Explore>
        </div>
      </main>
    </>
  );
}
