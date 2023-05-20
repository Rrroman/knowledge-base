import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/Layout';

export function Root() {
  return (
    <div className='flex h-screen p-6 text-base dark:bg-slate-800 dark:text-slate-300'>
      <Sidebar />
      <main className='grow pt-24'>
        <h1 className='mb-24 text-center'>Hello World!</h1>
        <div className='flex items-center justify-center'>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
