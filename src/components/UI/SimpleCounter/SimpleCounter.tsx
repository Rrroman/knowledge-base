import { useContext } from 'react';
import { SimpleCounterContext } from '@/store/SimpleCounterContext';
import { Button } from '../Buttons';

export function SimpleCounter() {
	const simpleCounterContext = useContext(SimpleCounterContext);
	const { count, increment, reset, isUsedOutsideOfProvider } =
		simpleCounterContext;

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
