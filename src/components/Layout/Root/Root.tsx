import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/Layout';

export function Root() {
  // test Vite's .env
  // console.log(import.meta.env.VITE_TETS_ID);

  return (
    <div className='flex h-screen overflow-hidden p-6 text-base dark:bg-slate-800 dark:text-slate-300'>
      <Sidebar />
      <main className='grow pt-24'>
        <h1 className='mb-24 text-center'>🍕 Hello World! ¯\_(ツ)_/¯</h1>
        <div className='flex w-full flex-col items-center'>
          {/* <div className='flex items-center justify-center'> */}
          <Outlet />
        </div>
      </main>
    </div>
  );
}
