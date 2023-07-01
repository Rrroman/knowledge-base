import { FetchExample, QueryClientExample } from '@/components';

export function FetchersInsidePage() {
  return (
    <>
      <h2 className='text-red-400'>
        Few Fetch examples in one page.So can be used params for props but all
        components at once. In this case this is bad for example of different
        fetches. Instead can be used outlet context to investigate...
      </h2>
      <FetchExample />
      <QueryClientExample />
    </>
  );
}
