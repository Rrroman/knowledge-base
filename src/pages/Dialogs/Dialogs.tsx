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
      <button onClick={() => setIsOpened(true)}>Open "dialog" modal</button>

      <Dialog
        title='Dialog modal example'
        isOpened={isOpened}
        onProceed={onProceed}
        onClose={onCloseHandler}
      >
        <p>To close: click Close, press Escape, or click outside.</p>
      </Dialog>
      <p>Proceeds count: {count}</p>
    </div>
  );
}

export { Dialogs };
