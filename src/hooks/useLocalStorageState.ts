import { useEffect, useState } from 'react';

export function useLocalStorageState(key: string, initialValue: any) {
	const [storedValue, setStoredValue] = useState(() => {
		const item = window.localStorage.getItem(key);

		return item ? JSON.parse(item) : initialValue;
	});

	useEffect(() => {
		if (!key) {
			return;
		}

		localStorage.setItem(key, JSON.stringify(storedValue));
	}, [key, storedValue]);

	return [storedValue, setStoredValue];
}
