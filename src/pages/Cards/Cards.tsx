import { Card } from '@/components';
import { SimpleCounter } from '@/components/UI/SimpleCounter/SimpleCounter';
import { SimpleCounterContextProvider } from '@/store/CounterProvider';

export function Cards() {
	return (
		<SimpleCounterContextProvider>
			<Card>
				<h1>Card</h1>
				<SimpleCounter />
				<Card styles='max-w-7xl'>
					<h2>Nested Card</h2>
					<div className='grid grid-cols-2 gap-4 border border-purple-700 p-5'>
						<Card styles='max-w-xl'>
							<SimpleCounter />
							<h3>Even more nested Card</h3>
						</Card>
						<Card styles='max-w-xl'>
							<h3>Lobotomized Owl * + * not good here GRID</h3>
						</Card>
						<Card styles='max-w-xl'>
							<SimpleCounter />
							<h3>Even more nested Card</h3>
						</Card>
						<Card styles='max-w-xl'>
							<h3>Lobotomized Owl * + * bug with first GRID child</h3>
						</Card>
					</div>
				</Card>
				<Card styles='max-w-7xl'>
					<h2>Nested Card</h2>
					<div className='flex gap-4 border border-purple-700'>
						<Card styles='max-w-xl'>
							<h3>Even more nested Card</h3>
						</Card>
						<Card styles='max-w-xl'>
							<SimpleCounter />
							<h3>Lobotomized Owl * + * bug with first FLEX child</h3>
						</Card>
					</div>
				</Card>
			</Card>
		</SimpleCounterContextProvider>
	);
}
