import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Sidebar } from '@/components/Layout';

export function Root() {
  // test Vite's .env
  // console.log(import.meta.env.VITE_TETS_ID);
  const [count, setCount] = useState(0);
  const clickHandler = (num?: number) => {
    setCount(num ? (prev) => prev + num : 0);
  };

  return (
    <div className='flex h-screen overflow-hidden p-6 text-base dark:bg-slate-800 dark:text-slate-300'>
      <Sidebar clickHandler={clickHandler} count={count} />
      <main className='grow pt-24'>
        <h1 className='mb-24 text-center'>🍕 Hello World! ¯\_(ツ)_/¯</h1>
        {count > 0 && <p>Count: {count}</p>}
        <div className='flex w-full flex-col items-center'>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
