import { ReactNode, createContext, useMemo, useState } from 'react';
import { SimpleCounterContext } from './SimpleCounterContext';

// Without separate file 🤔
// export const SimpleCounterContext = createContext({
// 	count: 0,
// 	increment: () => {},
// 	reset: () => {},
// });

export function SimpleCounterContextProvider({
	children,
}: {
	children: ReactNode;
}) {
	const [count, setCount] = useState(0);

	const increment = (num = 1) => {
		setCount((prev: number) => prev + num);
	};

	const reset = () => {
		setCount(0);
	};

	const SimpleCounterContextDefault = useMemo(
		() => ({ count, increment, reset, isUsedOutsideOfProvider: false }),
		[count]
	);

	// Eslint error - object changes every render
	// const SimpleCounterContextDefault = {
	// 	count,
	// 	increment,
	// };

	return (
		<SimpleCounterContext.Provider value={SimpleCounterContextDefault}>
			{children}
		</SimpleCounterContext.Provider>
	);
}
