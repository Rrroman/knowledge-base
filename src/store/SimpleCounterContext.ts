import { createContext } from 'react';

export const SimpleCounterContext = createContext({
	isUsedOutsideOfProvider: true,
	count: 0,
	increment: () => {},
	reset: () => {},
});
