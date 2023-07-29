import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { ReactNode, useId, useState } from 'react';
import { Button } from '@/components/UI';

export function Expand({
	title,
	openStyles,
	transitionStyles,
	renderBody,
}: {
	title: string;
	renderBody?: ReactNode | ((isOpen: boolean) => JSX.Element);
	openStyles?: string;
	transitionStyles?: string;
}) {
	const [isOpen, setIsOpen] = useState(false);
	const contentId = useId();

	function toggleHandler() {
		setIsOpen((prev) => !prev);
	}

	return (
		<>
			<Button
				ariaControls={contentId}
				ariaExpanded={isOpen}
				clickHandler={toggleHandler}
			>
				{title}
				<div className={`${isOpen && 'rotate-90'} inline-block duration-500`}>
					<KeyboardArrowRightIcon />
				</div>
			</Button>
			<div
				aria-hidden={!isOpen}
				className={`${
					isOpen ? `grid-rows-[1fr] ${openStyles}` : 'grid-rows-[0fr]'
				} transition-[grid-template-rows, ${transitionStyles}] grid duration-500`}
			>
				<div className='overflow-hidden'>
					<div id={contentId}>
						{typeof renderBody === 'function' ? renderBody(isOpen) : renderBody}
					</div>
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

// https://youtu.be/B_n4YONte5A
