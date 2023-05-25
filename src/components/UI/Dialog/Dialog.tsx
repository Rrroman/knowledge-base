import { MouseEvent, useEffect, useRef, useState } from 'react';

const isClickInsideRectangle = (e: MouseEvent, element: HTMLElement) => {
  const r = element.getBoundingClientRect();

  return (
    e.clientX > r.left &&
    e.clientX < r.right &&
    e.clientY > r.top &&
    e.clientY < r.bottom
  );
};

type Props = {
  title: string;
  isOpened: boolean;
  onProceed: () => void;
  onClose: () => void;
  children: React.ReactNode;
};

function Dialog({ title, isOpened, onProceed, onClose, children }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const modalRef = ref.current;

    let timeout: ReturnType<typeof setTimeout>;

    if (isOpened && modalRef) {
      modalRef.showModal();
    } else if (modalRef) {
      setIsClosing(true);

      timeout = setTimeout(() => {
        setIsClosing(false);
        modalRef.close();
      }, 300);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isOpened]);

  function proceedAndClose() {
    onProceed();
    onClose();
  }

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <dialog
        ref={ref}
        className={`relative rounded-md bg-white p-6 backdrop:backdrop-blur-sm  
        ${isOpened ? 'open:animate-fade-in open:backdrop:animate-fade-in' : ''}
        ${isClosing ? 'animate-fade-out backdrop:animate-fade-out' : ''}`}
        onCancel={onClose}
        onClick={(e) =>
          ref.current && !isClickInsideRectangle(e, ref.current) && onClose()
        }
      >
        <h3>{title}</h3>
        {children}
        <div className='flex gap-4'>
          <button
            className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'
            onClick={proceedAndClose}
          >
            Proceed
          </button>
          <button
            className='rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600'
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </dialog>
    </>
  );
}

export { Dialog };

// https://dev.to/elsyng/react-modal-dialog-using-html-dialog-element-5afk
