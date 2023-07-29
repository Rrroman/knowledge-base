import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {
	ReactNode,
	createContext,
	useCallback,
	useContext,
	useId,
	useMemo,
	useState,
} from 'react';
import { Button } from '@/components/UI';

type ContextValue = {
	contentId: string;
	isOpen: boolean;
	toggleHandler: () => void;
};

const ExpandBtnCtx = createContext<ContextValue>({
	contentId: '',
	isOpen: false,
	toggleHandler: () => {},
});

export function ExpandCompoundExample({ children }: { children: ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);
	const contentId = useId();

	const toggleHandler = useCallback(
		() => setIsOpen(!isOpen),
		[isOpen, setIsOpen]
	);

	const contextValue = useMemo(
		() => ({
			contentId,
			isOpen,
			toggleHandler,
		}),
		[contentId, isOpen, toggleHandler]
	);

	return (
		<ExpandBtnCtx.Provider value={contextValue}>
			{children}
		</ExpandBtnCtx.Provider>
	);
}

function ExpandButton({ children }: { children: ReactNode }) {
	const { contentId, isOpen, toggleHandler } = useContext(ExpandBtnCtx);
	return (
		<Button
			ariaControls={contentId}
			ariaExpanded={isOpen}
			clickHandler={toggleHandler}
		>
			{children}
			<div className={`${isOpen && 'rotate-90'} inline-block duration-500`}>
				<KeyboardArrowRightIcon />
			</div>
		</Button>
	);
}

function ExpandContent({
	children,
	openStyles,
	transitionStyles,
}: {
	children: ReactNode | ((isHidden: boolean) => JSX.Element);
	openStyles?: string;
	transitionStyles?: string;
}) {
	const { contentId, isOpen } = useContext(ExpandBtnCtx);
	return (
		<div
			aria-hidden={!isOpen}
			className={`${
				isOpen ? `grid-rows-[1fr] ${openStyles}` : 'grid-rows-[0fr]'
			} transition-[grid-template-rows, ${transitionStyles}] grid duration-500`}
		>
			<div className='overflow-hidden'>
				<div id={contentId}>
					{typeof children === 'function' ? children(!isOpen) : children}
				</div>
			</div>
		</div>
	);
}

ExpandCompoundExample.Button = ExpandButton;
ExpandCompoundExample.Content = ExpandContent;
