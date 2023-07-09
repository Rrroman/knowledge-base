import { Outlet } from 'react-router-dom';

export function Fetchers() {
  return (
    <>
      <h2 className='mb-4'>Few Fetch examples:</h2>
      <Outlet />
    </>
  );
}
