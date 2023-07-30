import { createContext } from 'react';

export const CounterContext = createContext({
	isUsedOutsideOfProvider: true,
	count: 0,
	increment: () => {},
	reset: () => {},
});
