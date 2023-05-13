import { useState } from 'react';
import { Button } from '@/components/UI';

export function Expand({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

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
      <Button ariaExpanded={isOpen} clickHandler={toggleHandler}>
        {title}
      </Button>
      <div>{isOpen && children}</div>
    </>
  );
}
