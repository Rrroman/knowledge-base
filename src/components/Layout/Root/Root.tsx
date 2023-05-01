import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components';

export function Root() {
  return (
    <div className='flex h-screen p-6 text-base dark:bg-slate-800 dark:text-slate-300'>
      <Sidebar />
      <main className='grow'>
        <h1 className='text-center'>Hello World!</h1>
        <Outlet />
      </main>
    </div>
  );
}