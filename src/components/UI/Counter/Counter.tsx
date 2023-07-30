import { useContext } from 'react';
import { CounterContext } from '@/store/CounterContext';
import { Button } from '../Buttons';

export function Counter() {
	const counterContext = useContext(CounterContext);
	const { count, increment, reset, isUsedOutsideOfProvider } = counterContext;

	if (isUsedOutsideOfProvider) {
		throw new Error(
			'Your Component must be used inside CounterContextProvider.'
		);
	}

	return (
		<>
			<Button buttonType='primary' clickHandler={() => increment()}>
				Increment
			</Button>
			<Button buttonType='primary' clickHandler={() => reset()}>
				Reset
			</Button>
			<p>{count}</p>
		</>
	);
}
