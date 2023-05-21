import { useState } from 'react';
import { Dialog } from '@/components/UI';

function Dialogs() {
  const [isOpened, setIsOpened] = useState(false);
  const [count, setCount] = useState(0);

  function onProceed() {
    setCount((prev) => prev + 1);
  }

  function onCloseHandler() {
    setIsOpened(false);
  }

  return (
    <div>
      <button
        className='group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800'
        onClick={() => setIsOpened(true)}
      >
        <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
          Open "dialog" modal
        </span>
      </button>

      <Dialog
        title='Dialog modal example'
        isOpened={isOpened}
        onProceed={onProceed}
        onClose={onCloseHandler}
      >
        <p>To close: click Close, press Escape, or click outside.</p>
      </Dialog>
      <p className='text-center'>Proceeds count: {count}</p>
    </div>
  );
}

export { Dialogs };
