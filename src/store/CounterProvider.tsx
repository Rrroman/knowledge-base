import { ReactNode, createContext, useMemo, useState } from 'react';
import { CounterContext } from './CounterContext';

// Without separate file 🤔
// export const CounterContext = createContext({
// 	count: 0,
// 	increment: () => {},
// 	reset: () => {},
// });

export function CounterContextProvider({ children }: { children: ReactNode }) {
	const [count, setCount] = useState(0);

	const increment = (num = 1) => {
		setCount((prev: number) => prev + num);
	};

	const reset = () => {
		setCount(0);
	};

	const counterContextDefault = useMemo(
		() => ({ count, increment, reset, isUsedOutsideOfProvider: false }),
		[count]
	);

	// Eslint error - object changes every render
	// const counterContextDefault = {
	// 	count,
	// 	increment,
	// };

	return (
		<CounterContext.Provider value={counterContextDefault}>
			{children}
		</CounterContext.Provider>
	);
}
