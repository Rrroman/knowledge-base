import { useId, useState } from 'react';
import { Button } from '@/components/UI';

export function Expand({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  // Off rule that enforce to use useCallback instead of passing a function
  // Which was intended to enforce that bind or arrow functions are not used in props
  // Example of use:
  // ===============
  // const toggleHandler = useCallback(() => {
  //   setIsOpen(!isOpen);
  // }, [isOpen]);

  function toggleHandler() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Button
        ariaControls={contentId}
        ariaExpanded={isOpen}
        clickHandler={toggleHandler}
      >
        <span>{title}</span>
      </Button>
      <div
        aria-hidden={!isOpen}
        className={`${
          isOpen ? 'grid-rows-[1fr] p-2' : ' grid-rows-[0fr]'
        } transition-[grid-template-rows, padding] grid duration-500`}
      >
        <div className='overflow-hidden'>
          <div id={contentId}>{children}</div>
        </div>
      </div>
      {/* ================================ */}
      {/* https://keithjgrant.com/posts/2023/04/transitioning-to-height-auto/ */}
      {/* ================================ */}
      {/* Flex box version 
      If centered, the animation will jiggle, in this case, better is grid approach */}
      {/* <div className='flex'>
        <div>
          <div
            id={contentId}
            className={`${
              isOpen ? 'max-h-full p-2' : 'max-h-0'
            } transition-[max-height, padding] overflow-hidden duration-500`}
          >
            {children}
          </div>
        </div>
      </div> */}
    </>
  );
}
